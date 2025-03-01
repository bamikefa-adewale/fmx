import { db } from "@/db/drizzle";
import { categories } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

// POST a new category
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, id } = body;

  if (!name) {
    return NextResponse.json(
      { error: "Category name is required", success: 404 },
      { status: 400 }
    );
  }
  try {
    const data = await db.insert(categories).values({ name, id }).returning();
    return NextResponse.json(
      {
        message: "new category added successfully...",
        success: true,
        data,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return NextResponse.json(
    { message: "something went wrrong" },
    { status: 500 }
  );
}

// GET all categories 
export async function GET() {
  try {
    const data = await db.select().from(categories);
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
