import Link from "next/link"

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl mb-6">Employee Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/dashboard/schedule" className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <h2 className="text-xl">My Schedule</h2>
                    <p>View your work schedule</p>
                </Link>
                <Link href="/dashboard/events" className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <h2 className="text-xl">Employee Events</h2>
                    <p>View internal events</p>
                </Link>
                <Link href="/dashboard/requests" className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <h2 className="text-xl">My Requests</h2>
                    <p>Submit and view requests</p>
                </Link>
            </div>
        </div>
    )
}