import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { employeeRequests } from "@/lib/schema"
import { eq, desc } from "drizzle-orm"
import { randomUUID } from "crypto"

export async function GET() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const requests = await db.select().from(employeeRequests).where(eq(employeeRequests.userId, session.user.id)).orderBy(desc(employeeRequests.createdAt))

    return NextResponse.json(requests)
}

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const { type, description } = await req.json()

    if (!type || !description) {
        return NextResponse.json({ error: "Type and description required" }, { status: 400 })
    }

    const request = await db.insert(employeeRequests).values({ id: randomUUID(), userId: session.user.id, type, description }).returning()

    return NextResponse.json(request[0])
}