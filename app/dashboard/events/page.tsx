import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { events } from "@/lib/schema"
import { desc } from "drizzle-orm"

export default async function EmployeeEvents() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return <div>Please log in</div>

    const eventList = await db.select().from(events).orderBy(desc(events.date))

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl mb-6">All Events</h1>
            <div className="space-y-4">
                {eventList.map(event => (
                    <div key={event.id} className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{event.title}</h2>
                        <p>{event.description}</p>
                        <p>Date: {event.date.toDateString()}</p>
                        {event.location && <p>Location: {event.location}</p>}
                        <p>Public: {event.isPublic ? 'Yes' : 'No'}</p>
                    </div>
                ))}
                {eventList.length === 0 && <p>No events.</p>}
            </div>
        </div>
    )
}