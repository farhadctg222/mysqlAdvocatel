
import connectDB from "../../../connectdb";
export async function GET() {
  try {
    const db = await connectDB();

    // ⚠️ টেবিলের নাম ঠিক আছে কিনা নিশ্চিত করুন
    const [rows] = await db.execute(
      "SELECT * FROM buildings ORDER BY id DESC"
    );

    return Response.json({
      ok: true,
      count: rows.length,
      data: rows,
    });

  } catch (error) {
    return Response.json(
      {
        ok: false,
        message: "Failed to fetch buildings",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
