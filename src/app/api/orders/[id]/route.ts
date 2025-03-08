import { db } from "@/db/drizzle";
import { orders } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

//GETTING SINGLE ORDER
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { message: "Category ID is required", success: false },
      { status: 400 }
    );
  }
  try {
    const data = await db
      .select()
      .from(orders)
      .where(eq(orders.id, id))
      .limit(1);
    if (!data.length) {
      return NextResponse.json(
        { message: "No Order Fund", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Orders fetched successfully",
        status: true,
        data: data[0],
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message, status: false },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: "Something went wrong", status: false },
      { status: 500 }
    );
  }
}
