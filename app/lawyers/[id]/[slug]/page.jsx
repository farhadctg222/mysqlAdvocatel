import connectDB from "@/connectdb"; // (চাইলে remove করতে পারেন, এখানে লাগবে না)

/* ✅ API থেকে এক জন lawyer data আনার helper */
const getLawyer = async (id, slug) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/lawyer/${id}/${slug}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
};


/* ===================== ✅ SEO METADATA (API based) ===================== */
export async function generateMetadata({ params }) {
  const { id, slug } = await params;

  const data = await getLawyer(id, slug);

  if (!data) {
    return {
      title: "Lawyer Not Found",
      description: "এই আইনজীবীর প্রোফাইল পাওয়া যায়নি",
    };
  }

  return {
    title: `${data.name} | ${data.designation} | ${data.court_level}`,
    description:
      data.description ||
      `${data.name} একজন অভিজ্ঞ আইনজীবী। চেম্বার: ${data.chamber_address}`,
    keywords: [
      data.name,
      "Lawyer in Bangladesh",
      "Advocate",
      data.designation,
      data.court_level,
    ],
    openGraph: {
      title: `${data.name} – Advocate Profile`,
      description: data.description,
      type: "profile",
    },
  };
}

/* ===================== PAGE ===================== */
export default async function Page({ params }) {
  const { id, slug } = await params;

  // ✅ DB না, API থেকে আনা
  const data = await getLawyer(id, slug);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-cyan-50 to-blue-100 px-4">
        <h1 className="text-9xl font-extrabold text-cyan-600 mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 mb-4">
          Oops! পেজটি পাওয়া যায়নি
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md text-center">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে অথবা নাম পরিবর্তন করা হয়েছে অথবা পেজটি কখনোই তৈরি হয়নি।
        </p>
        <a
          href="/"
          className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-700 transition"
        >
          হোমপেজে ফিরুন
        </a>
      </div>
    );
  }

  // ✅ JSON string parse safe
  const practiceAreas = (() => {
    try {
      return data.practice_areas ? JSON.parse(data.practice_areas) : [];
    } catch {
      return [];
    }
  })();

  const languages = (() => {
    try {
      return data.languages ? JSON.parse(data.languages) : [];
    } catch {
      return [];
    }
  })();

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="block sm:hidden bg-gray-100 pb-10">
        <div className="bg-white m-3 p-4 rounded-lg shadow">
          <div className="flex flex-col items-center gap-4">
            <img
              src={data.image}
              alt={data.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 transition-transform duration-500 hover:scale-105"
            />

            <h1 className="text-xl font-bold text-center">{data.name}</h1>
            <p className="text-sm text-center">{data.education}</p>
            <p className="text-sm font-semibold text-center">{data.designation}</p>
            <p className="text-xs text-center">{data.workplace}</p>

            <p className="text-sm text-center">
              <b>Experience:</b> {data.experience_years} years
            </p>

            <p className="text-sm text-center">
              <b>Practice Areas:</b> {practiceAreas.join(", ")}
            </p>

            <p className="text-sm text-center">
              <b>Languages:</b> {languages.join(", ")}
            </p>
          </div>

          {/* Chamber Info */}
          <div className="mt-4 text-sm space-y-1">
            <p><b>Chamber:</b> {data.chamber_name}</p>
            <p><b>Address:</b> {data.chamber_address}</p>
            <p><b>Visiting Time:</b> {data.visiting_time}</p>

            {data.status === "Active" && <p><b>Phone:</b> {data.phone}</p>}

            <p><b>Email:</b> {data.email}</p>
            <p>
              <b>Consultation Fee:</b> ৳{data.consultation_fee}{" "}
              {data.online_consultation ? "(Online Available)" : ""}
            </p>
          </div>

          <div className="mt-4 text-sm">
            <p><b>About:</b> {data.description}</p>
          </div>
        </div>

        {/* Call / Notice */}
        {data.status === "Active" ? (
          <a
            href={`tel:${data.phone}`}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold z-50"
          >
            📞 Call Now
          </a>
        ) : (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-yellow-50 border border-yellow-300 text-yellow-700 px-6 py-3 rounded-xl shadow z-50 text-center text-sm">
            এই মুহূর্তে চেম্বারটি সক্রিয় নেই। অনুগ্রহ করে সমন্বয়কের সাথে যোগাযোগ করুন।
            {data.coordinator_phone ? (
              <div className="mt-2">
                <a
                  href={`tel:${data.coordinator_phone}`}
                  className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  📞 Call Coordinator
                </a>
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden sm:flex justify-center bg-gray-100 py-6 print:bg-white print:py-0">
        <div
          className="bg-white text-black shadow-lg print:shadow-none"
          style={{ width: "210mm", minHeight: "297mm", padding: "20mm" }}
        >
          <div className="flex items-center gap-6 border-b-2 pb-5">
            <div className="w-40 h-52 border">
              <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">{data.name}</h1>
              <p className="text-lg mt-1">{data.education}</p>
              <p className="font-semibold mt-1">{data.designation}</p>
              <p className="text-md mt-1">{data.workplace}</p>
              <p className="text-red-600 font-medium mt-1">Court Level: {data.court_level}</p>

              <p className="mt-2"><b>Experience:</b> {data.experience_years} years</p>
              <p><b>Practice Areas:</b> {practiceAreas.join(", ")}</p>
              <p><b>Languages:</b> {languages.join(", ")}</p>
            </div>
          </div>

          {/* Chamber Info conditional */}
          {data.status === "Active" ? (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold border-b pb-1">Chamber Information</h2>
              <table className="w-full mt-3 border border-collapse">
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold w-1/3">Chamber Name</td>
                    <td className="border p-2">{data.chamber_name}</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Chamber Address</td>
                    <td className="border p-2">{data.chamber_address}</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Phone</td>
                    <td className="border p-2">{data.phone}</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Email</td>
                    <td className="border p-2">{data.email}</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Consultation Fee</td>
                    <td className="border p-2">
                      ৳{data.consultation_fee} {data.online_consultation ? "(Online Available)" : ""}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-center">
              <p className="text-yellow-700 font-semibold">
                এই মুহূর্তে চেম্বারটি সক্রিয় নেই। অনুগ্রহ করে সমন্বয়কের সাথে যোগাযোগ করুন।
              </p>
              {data.coordinator_phone ? (
                <p className="mt-2">
                  Coordinator:{" "}
                  <a className="text-emerald-700 font-bold" href={`tel:${data.coordinator_phone}`}>
                    {data.coordinator_phone}
                  </a>
                </p>
              ) : null}
            </div>
          )}

          <div className="mt-6">
            <h2 className="text-2xl font-semibold border-b pb-1">About the {data.name}</h2>
            <p className="mt-3 text-justify leading-7">{data.description}</p>
          </div>

          <div className="mt-16 flex justify-between items-end">
            <div className="text-left">
              <p className="font-semibold">{data.name}</p>
              <p className="border-t pt-1 w-48 text-center ml-auto">Advocate Signature</p>
            </div>
          </div>

          <div className="mt-10 text-center text-sm">
            <p>Printed Profile – Advocate & Chamber Details</p>
          </div>
        </div>
      </div>
    </>
  );
}
