
// import { db } from "@/db/drizzle";
// import { categories } from "@/db/schema";
// import { eq } from "drizzle-orm";
// import { NextRequest, NextResponse } from "next/server";


// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id }  = params;

//   try {
//     const data = await db
//       .select()
//       .from(categories)
//       .where(eq(categories.id, id))
//       .limit(1);

//     if (!data.length) {
//       return NextResponse.json(
//         { message: "Category not found", success: false },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       message: "Category fetched successfully",
//       status: true,
//       data: data[0],
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       return NextResponse.json({ message: error.message }, { status: 500 });
//     }
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }
