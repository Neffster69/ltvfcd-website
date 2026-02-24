import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { schedules } from "@/lib/schema"
import { eq, desc } from "drizzle-orm"

export default async function Schedule() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return <div>Please log in</div>

    const scheduleList = await db.select().from(schedules).where(eq(schedules.userId, session.user.id)).orderBy(desc(schedules.date))

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl mb-6">My Schedule</h1>
            <div className="space-y-4">
                {scheduleList.map(schedule => (
                    <div key={schedule.id} className="bg-white p-4 rounded shadow">
                        <p>Date: {schedule.date.toDateString()}</p>
                        <p>Shift: {schedule.shift}</p>
                    </div>
                ))}
                {scheduleList.length === 0 && <p>No scheduled shifts.</p>}
            </div>
        </div>
    )
}