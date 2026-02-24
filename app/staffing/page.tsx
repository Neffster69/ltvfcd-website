export default function Staffing() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl mb-6">Our Team</h1>
            <p className="mb-4">
                Meet the dedicated professionals who serve our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold">Chief John Doe</h3>
                    <p>Fire Chief</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold">Captain Jane Smith</h3>
                    <p>Operations Captain</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold">Lieutenant Bob Johnson</h3>
                    <p>Training Lieutenant</p>
                </div>
            </div>
        </div>
    )
}