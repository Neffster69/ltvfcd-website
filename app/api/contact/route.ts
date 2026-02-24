import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { contactRequests } from "@/lib/schema"
import { randomUUID } from "crypto"

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    await db.insert(contactRequests).values({ id: randomUUID(), name, email, message })

    return NextResponse.json({ success: true })
}