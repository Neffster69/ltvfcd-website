import { db } from "@/lib/db"
import { events } from "@/lib/schema"
import { eq, desc } from "drizzle-orm"

export default async function Events() {
    const eventList = await db.select().from(events).where(eq(events.isPublic, true)).orderBy(desc(events.date))

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl mb-6">Upcoming Events</h1>
            <div className="space-y-4">
                {eventList.map(event => (
                    <div key={event.id} className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{event.title}</h2>
                        <p>{event.description}</p>
                        <p>Date: {event.date.toDateString()}</p>
                        {event.location && <p>Location: {event.location}</p>}
                    </div>
                ))}
                {eventList.length === 0 && <p>No upcoming events.</p>}
            </div>
        </div>
    )
}