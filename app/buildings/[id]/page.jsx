// import Link from "next/link";

import Link from "next/link";
import connectDB from "../../../connectdb";
import LoadMoreLawyers from "../../component/load-more";

const PAGE_SIZE = 10;

export default async function Page({ params }) {
  // ✅ await বাদ, parseInt ব্যবহার
  const { id } = params;
  const buildingId = parseInt(id);

  if (isNaN(buildingId)) {
    return <div>Invalid Building ID</div>;
  }

  const db = await connectDB();

  // 🔹 first 10 lawyers (SSR)
  const [lawyers] = await db.execute(
    `
    SELECT
      id, name, slug, designation, education,
      court_level, image, status, coordinator_phone
    FROM lawyers
    WHERE building_id = ?
    ORDER BY id DESC
    LIMIT ${PAGE_SIZE}
    `,
    [buildingId] // শুধু buildingId bind param
  );

  // ✅ debug log (optional)
  console.log("Building ID:", buildingId);
  console.log("Lawyers fetched:", lawyers.length);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Link href="/chattogram" className="text-sm text-blue-600 hover:underline">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold text-center my-6">
        Lawyers List
      </h1>

      {/* 🔹 Card Grid */}
      <LoadMoreLawyers
        initialData={lawyers}
        buildingId={buildingId}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
}


// import connectDB from "../../../connectdb";
// import LoadMoreLawyers from "../../component/load-more";


// const PAGE_SIZE = 10;

// export default async function Page({ params }) {
//   const { id } = await params;
//   const buildingId = Number(id);

//   const db = await connectDB();

//   // 🔹 first 10 lawyers (SSR)
//   const [lawyers] = await db.execute(
//     `
//     SELECT
//       id, name, slug, designation, education,
//       court_level, image, status, coordinator_phone
//     FROM lawyers
//     WHERE building_id = ?
//     ORDER BY id DESC
//     LIMIT ?
//     `,
//     [buildingId, PAGE_SIZE]
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <Link href="/chattogram" className="text-sm text-blue-600 hover:underline">
//         ← Back
//       </Link>

//       <h1 className="text-2xl font-bold text-center my-6">
//         Lawyers List
//       </h1>

//       {/* 🔹 Card Grid (আপনার আগের UI 그대로) */}
//       <LoadMoreLawyers
//         initialData={lawyers}
//         buildingId={buildingId}
//         pageSize={PAGE_SIZE}
//       />
//     </div>
//   );
// }
