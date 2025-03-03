import { db } from "@/db/drizzle";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

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
      .from(products)
      .where(eq(products.id, id))
      .limit(1);
    if (!data.length) {
      return NextResponse.json(
        { message: "No products found for this category", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Category fetched successfully",
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
