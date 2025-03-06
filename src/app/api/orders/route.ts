import { db } from "@/db/drizzle";
import { orders } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();
    const user = await currentUser();
    const { userId } = await auth();
    console.log(items, userId);
    if (!userId || !user)
      return NextResponse.json(
        {
          message: "Unauthorized User",
        },
        {
          status: 401,
        }
      );
    // Insert order into the database
    const newOrder = await db
      .insert(orders)
      .values({
        items,
        user_id: userId,
      })
      .returning();
    if (!newOrder)
      return NextResponse.json(
        {
          message: "Failed to place order",
        },
        {
          status: 500,
        }
      );

    return NextResponse.json(
      { success: true, order: newOrder[0] , message: `${user?.fullName} Order placed successfully`},
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
  }
}
