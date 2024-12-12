import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    })

    return NextResponse.json({
      message: "Database connection successful",
      users,
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    )
  }
} 