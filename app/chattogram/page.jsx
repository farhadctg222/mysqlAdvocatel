import Link from "next/link";
import connectDB from "../../connectdb";


/* =========================
   ✅ SEO metadata (static)
========================= */
export const metadata = {
  title: "Chattogram Court Buildings | AdvocateListBD",
  description:
    "Chattogram court buildings list. Select a building to view building-wise lawyer list and contact details.",
  alternates: {
    canonical: "/chattogram",
  },
  openGraph: {
    title: "Chattogram Court Buildings | AdvocateListBD",
    description:
      "Browse Chattogram court buildings and find building-wise lawyers easily.",
    url: "/chattogram",
    siteName: "AdvocateListBD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Chattogram Court Buildings | AdvocateListBD",
    description:
      "Browse Chattogram court buildings and find building-wise lawyers easily.",
  },
};

/* =========================
   🔐 AI-SAFE column list
========================= */
const BUILDING_COLUMNS = `
  id,
  building_name,
  slug,
  status
`;

export default async function ChattogramPage() {
  /* =========================
     📌 Direct DB query
     (NO fetch, NO API)
  ========================= */
  const db = await connectDB();

  const [buildings] = await db.execute(`
  SELECT id, building_name, slug, status
  FROM buildings
  ORDER BY id DESC
`);


  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">Chattogram — Court Buildings</h1>
        <p className="text-sm text-gray-500 mt-1">
          Select a building to view lawyers
        </p>
      </div>

      {buildings.length === 0 ? (
        <p className="text-center text-gray-500">
          কোনো বিল্ডিং পাওয়া যায়নি
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildings.map((b) => {
            const isActive =
              String(b.status) === "1" ||
              String(b.status).toLowerCase() === "active";

            return (
              <div
                key={b.id}
                className="border rounded-2xl bg-white shadow-sm hover:shadow-md transition overflow-hidden"
              >
                {/* Header */}
                <div className="p-4 border-b">
                  <h2 className="text-lg font-semibold">
                    {b.building_name ?? "Unnamed Building"}
                  </h2>

                </div>

                {/* Footer */}
                <div className="p-4 flex items-center justify-between">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {isActive ? "Active" : "Inactive"}
                  </span>

                  <Link
                    href={`/buildings/${b.id}`}
                    className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                  >
                    View Lawyers
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
