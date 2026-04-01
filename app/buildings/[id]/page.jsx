// import Link from "next/link";

import Link from "next/link";
import connectDB from "../../../connectdb";
import LoadMoreLawyers from "../../component/load-more";

const PAGE_SIZE = 10;

/* ===================== SEO METADATA ===================== */
export async function generateMetadata({ params }) {
  const { id } = await params;
  const buildingId = Number(id);

  if (isNaN(buildingId)) {
    return {
      title: "Lawyers List",
      description: "Building wise lawyer list in Bangladesh",
    };
  }

  return {
    title: `Building ${buildingId} Lawyers | Chattogram Advocate List`,
    description: `Find lawyers and advocates in building ${buildingId}, Chattogram Bangladesh. Contact details, chamber info and more.`,

    keywords: [
      "Chattogram Lawyer",
      "Lawyer in Chattogram",
      "Advocate Bangladesh",
      "Building Wise Lawyer",
      "advocate in chittagong",
      "bangladesh supreme court advocate",
      "chattogram lawyer",
      "ainjibi dowel bhaban",
      "supreme court advocate","mohammad farhad uddin","co-ordinator of advocate list bd","farhad uddin chattogram","farhad uddin lawyer","farhad uddin advocate",
      `Building ${buildingId} Lawyer`,
      "Advocate List BD",
    ],

    alternates: {
      canonical: `https://www.advocatelistbd.com/building/${buildingId}`,
    },

    openGraph: {
      title: `Building ${buildingId} Lawyers`,
      description: "Browse lawyers by building in Chattogram",
      url: `https://www.advocatelistbd.com/building/${buildingId}`,
      siteName: "AdvocateListBD",
      images: [
        {
          url: "/og-lawyer.jpg",
          width: 1200,
          height: 630,
          alt: "Lawyer List",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Building ${buildingId} Lawyers`,
      description: "Find lawyers in Chattogram",
      images: ["/og-lawyer.jpg"],
    },
  };
}

/* ===================== PAGE ===================== */
export default async function Page({ params }) {
  const { id } = await params;
  const buildingId = Number(id);

  if (isNaN(buildingId)) {
    return <div>Invalid Building ID</div>;
  }

  const db = await connectDB();

  const [lawyers] = await db.execute(
    `
    SELECT
      id, name, slug, designation, education,
      court_level, image, status, coordinator_phone
    FROM lawyers
    WHERE building_id = ?
    ORDER BY id ASC
    LIMIT ${PAGE_SIZE}
    `,
    [buildingId]
  );

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
