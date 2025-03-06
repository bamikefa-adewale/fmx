import { db } from "@/db/drizzle";
import { products } from "@/db/schema";
import { ilike } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    name,
    soldBy,
    location,
    description,
    currentPrice,
    markPrice,
    user_id,
    category_Id,
    images,
  } = await req.json();
  if (
    !name ||
    !soldBy ||
    !location ||
    !description ||
    !currentPrice ||
    !markPrice ||
    !user_id ||
    !category_Id ||
    !images
  )
    return NextResponse.json(
      {
        message: "missing required fields...",
        success: false,
      },
      { status: 400 }
    );

  try {
    const data = await db
      .insert(products)
      .values({
        name,
        soldBy,
        location,
        description,
        currentPrice,
        markPrice,
        user_id,
        category_Id,
        images,
      })
      .returning();
    if (!data)
      return NextResponse.json(
        { message: "no data inserted....", success: false },
        { status: 404 }
      );

    return NextResponse.json(
      {
        message: "data inserted successfully...",
        success: "true",
        data,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return NextResponse.json(
    {
      message: " something went wrong...",
      sucess: false,
    },
    { status: 500 }
  );
}

// GET PRODUCT
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit") || "12";
  const searchQuery = searchParams.get("search") || "";
  try {
    const query = db.select().from(products).limit(Number(limit));

    //filter serch product
    if (searchQuery) {
      query.where(ilike(products.name, `%${searchQuery}%`));
    }
    const data = await query;
    console.log(data);
    if (!data || data.length === 0)
      return NextResponse.json(
        { message: "no products found...", success: false },
        { status: 404 }
      );
    return NextResponse.json(
      {
        message: "products fetched successfully",
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
