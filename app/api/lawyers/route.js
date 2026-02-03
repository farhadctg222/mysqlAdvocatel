import connectDB from "../../../connectdb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const buildingId = Number(searchParams.get("buildingId"));
  const offset = Number(searchParams.get("offset") || 0);
  const limit = Number(searchParams.get("limit") || 10);

  const db = await connectDB();

  const [rows] = await db.execute(
    `
    SELECT
      id, name, slug, designation, education,
      court_level, image, status, coordinator_phone
    FROM lawyers
    WHERE building_id = ?
    ORDER BY id DESC
    LIMIT ? OFFSET ?
    `,
    [buildingId, limit, offset]
  );

  return Response.json({ data: rows });
}
