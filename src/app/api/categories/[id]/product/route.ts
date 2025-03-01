import { db } from "@/db/drizzle";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const data = await db
      .select()
      .from(products)
      .where(eq(products.category_Id, id));
    if (!data.length) {
      return NextResponse.json(
        { message: "No products found for this category", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Products fetched successfully",
      status: true,
      data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
