import { db } from "@/db/drizzle";
import { products } from "@/db/schema";
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
  } = await req.json();
  if (
    !name ||
    !soldBy ||
    !location ||
    !description ||
    !currentPrice ||
    !markPrice ||
    !user_id ||
    !category_Id
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
      })
      .returning();
    if (!data)
      return NextResponse.json(
        { message: "no data inserted....", success: false },
        { status: 404 }
      );
    console.log(data);
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
export async function GET() {
  try {
    const data = await db.select().from(products);
    console.log(data);
    if (!data)
      return NextResponse.json(
        { message: "no data found", success: false },
        { status: 404 }
      );
    return NextResponse.json({
      message: "products fetched successfully",
      status: true,
      data,
    });
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
