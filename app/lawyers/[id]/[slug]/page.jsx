import connectDB from "@/connectdb";

/* ===================== HELPERS ===================== */
const safeText = (value, fallback = "") => {
  if (value === null || value === undefined) return fallback;
  return String(value).trim();
};

const parseJsonArray = (value) => {
  try {
    if (!value) return [];
    const parsed = typeof value === "string" ? JSON.parse(value) : value;
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
};

const truncateWords = (text, wordLimit = 100) => {
  if (!text) return "";
  const words = String(text).trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const toAbsoluteImageUrl = (image) => {
  const img = safeText(image);
  if (!img) {
    return "https://www.advocatelistbd.com/default-lawyer.jpg";
  }
  if (img.startsWith("http://") || img.startsWith("https://")) {
    return img;
  }
  return `https://www.advocatelistbd.com${img.startsWith("/") ? "" : "/"}${img}`;
};

/* ===================== DB HELPER ===================== */
const getLawyer = async (id, slug) => {
  try {
    const db = await connectDB();
    const [rows] = await db.execute(
      "SELECT * FROM `lawyers` WHERE `id` = ? AND `slug` = ? LIMIT 1",
      [String(id), String(slug)]
    );
    return rows?.[0] || null;
  } catch (e) {
    console.error("DB fetch failed:", e);
    return null;
  }
};

/* ===================== SEO METADATA ===================== */
export async function generateMetadata({ params }) {
  const { id, slug } = await params;
  const data = await getLawyer(id, slug);

  if (!data) {
    return {
      title: "Lawyer Not Found",
      description: "এই আইনজীবীর প্রোফাইল পাওয়া যায়নি",
    };
  }

  const name = safeText(data.name, "Advocate Profile");
  const designation = safeText(data.designation, "Advocate");
  const email = safeText(data.email);
  const courtLevel = safeText(data.court_level);
  const chamberAddress = safeText(data.chamber_address);
  const visitTime = safeText(data.visiting_time);
  const experienceYears = safeText(data.experience_years);
  const image = toAbsoluteImageUrl(data.image);
  const profileUrl = `https://www.advocatelistbd.com/lawyers/${id}/${slug}`;

  const description = truncateWords(
    safeText(data.description) ||
      `${name} - ${designation}${
        courtLevel ? `, ${courtLevel}` : ""
      }. ${experienceYears ? `${experienceYears} years experience. ` : ""}${
        chamberAddress ? `Chamber: ${chamberAddress}. email: ${email}. visiting time: ${visitTime}` : ""
      }`,
    35
  );

  return {
    title: `${name}${designation ? ` | ${designation}` : ""}${
      courtLevel ? ` | ${courtLevel}` : ""
    }`,
    description,
    keywords: [
      name,
      "chattogram lawyer",
      `${courtLevel ? courtLevel + " " : ""}lawyer in chattogram`,'advocate addvocate advocate  এডভোকেট আইনজীবী',
      "Lawyer in Bangladesh",
      "Advocate",
      designation,
      courtLevel,
      email,
      chamberAddress,
      description,
      visitTime,
      safeText(data.chamber_name),
    ].filter(Boolean),
    alternates: {
      canonical: profileUrl,
    },
    openGraph: {
      title: `${name} | ${designation}`,
      description,
      url: profileUrl,
      siteName: "AdvocateListBD",
      type: "profile",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | ${designation}`,
      description,
      images: [image],
      
    },
  };
}

/* ===================== PAGE ===================== */
export default async function Page({ params }) {
  const { id, slug } = await params;
  const data = await getLawyer(id, slug);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-cyan-50 via-white to-blue-100 px-4 text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-cyan-600">404</h1>
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-slate-800">
          Oops! পেজটি পাওয়া যায়নি
        </h2>
        <p className="mt-3 max-w-xl text-slate-600 leading-7">
          আপনি যে প্রোফাইলটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে
          অথবা এই মুহূর্তে পাওয়া যাচ্ছে না।
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-3 text-white font-semibold shadow hover:bg-cyan-700 transition"
        >
          হোম পেজে ফিরুন
        </a>
      </div>
    );
  }

  const practiceAreas = parseJsonArray(data.practice_areas);
  const languages = parseJsonArray(data.languages);

  const name = safeText(data.name, "Advocate Name");
  const education = safeText(data.education);
  const designation = safeText(data.designation);
  const workplace = safeText(data.workplace);
  const courtLevel = safeText(data.court_level);
  const experienceYears = safeText(data.experience_years);
  const chamberName = safeText(data.chamber_name);
  const chamberAddress = safeText(data.chamber_address);
  const visitingTime = safeText(data.visiting_time);
  const phone = safeText(data.phone);
  const email = safeText(data.email);
  const consultationFee = safeText(data.consultation_fee);
  const description = safeText(data.description);
  const shortDescription = truncateWords(description, 100);
  const coordinatorPhone = safeText(data.coordinator_phone);
  const image = toAbsoluteImageUrl(data.image);
  const status = safeText(data.status, "Inactive");
  const onlineConsultation = Boolean(data.online_consultation);

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="block sm:hidden min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 pb-28">
        <div className="px-4 pt-4">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg">
            <div className="px-5 pt-6 pb-5 text-center bg-linear-to-b from-indigo-50 to-white">
              <div className="relative mx-auto w-32 h-32">
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                />
              </div>

              <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
                {name}
              </h1>

              {education ? (
                <p className="mt-2 text-sm text-slate-500">{education}</p>
              ) : null}

              {designation ? (
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  {designation}
                </p>
              ) : null}

              {workplace ? (
                <p className="mt-1 text-sm text-slate-600">{workplace}</p>
              ) : null}

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {experienceYears ? (
                  <span className="rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-bold text-indigo-700">
                    ⭐ {experienceYears} Years Experience
                  </span>
                ) : null}

                {courtLevel ? (
                  <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    {courtLevel}
                  </span>
                ) : null}

                {status === "Active" ? (
                  <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-bold text-yellow-700">
                    Inactive
                  </span>
                )}
              </div>
            </div>

            {practiceAreas.length > 0 ? (
              <div className="px-5 pb-4">
                <h2 className="mb-2 text-sm font-bold text-slate-800">
                  Practice Areas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {practiceAreas.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {languages.length > 0 ? (
              <div className="px-5 pb-4">
                <h2 className="mb-2 text-sm font-bold text-slate-800">Languages</h2>
                <div className="flex flex-wrap gap-2">
                  {languages.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-sm text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="px-5 pb-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                <h2 className="text-base font-bold text-slate-900">
                  Chamber Information
                </h2>

                {chamberName ? (
                  <div>
                    <p className="text-xs text-slate-500">Chamber Name</p>
                    <p className="text-sm font-medium text-slate-800">
                      {chamberName}
                    </p>
                  </div>
                ) : null}

                {chamberAddress ? (
                  <div>
                    <p className="text-xs text-slate-500">Address</p>
                    <p className="text-sm font-medium text-slate-800">
                      {chamberAddress}
                    </p>
                  </div>
                ) : null}

                {visitingTime ? (
                  <div>
                    <p className="text-xs text-slate-500">Visiting Time</p>
                    <p className="text-sm font-medium text-slate-800">
                      {visitingTime}
                    </p>
                  </div>
                ) : null}

                {status === "Active" && phone ? (
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <a
                      href={`tel:${phone}`}
                      className="text-sm font-semibold text-emerald-700"
                    >
                      {phone}
                    </a>
                  </div>
                ) : null}

                {email ? (
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="break-all text-sm font-medium text-blue-700"
                    >
                      {email}
                    </a>
                  </div>
                ) : null}

                {consultationFee ? (
                  <div className="border-t border-slate-200 pt-3">
                    <p className="text-xs text-slate-500">Consultation Fee</p>
                    <p className="text-base font-extrabold text-slate-900">
                      ৳{consultationFee}
                      {onlineConsultation ? (
                        <span className="ml-2 text-sm font-medium text-emerald-600">
                          (Online Available)
                        </span>
                      ) : null}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            {description ? (
              <div className="px-5 pb-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <h2 className="mb-2 text-base font-bold text-slate-900">About</h2>
                  <p className="text-sm leading-7 text-slate-700">{shortDescription}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {status === "Active" && phone ? (
          <div className="fixed bottom-4 left-4 right-4 z-50">
            <a
              href={`tel:${phone}`}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-4 text-lg font-bold text-white shadow-lg transition active:scale-[0.99]"
            >
              📞 Call Now
            </a>
          </div>
        ) : (
          <div className="fixed bottom-4 left-4 right-4 z-50">
            <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-4 text-center text-yellow-800 shadow-lg">
              <p className="text-sm font-medium">
                এই মুহূর্তে চেম্বারটি সক্রিয় নেই। অনুগ্রহ করে সমন্বয়কের সাথে যোগাযোগ করুন।
              </p>

              {coordinatorPhone ? (
                <a
                  href={`tel:${coordinatorPhone}`}
                  className="mt-3 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white"
                >
                  📞 Call Coordinator
                </a>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {/* ================= DESKTOP + PRINT VIEW ================= */}
      <div className="hidden sm:block bg-slate-200 py-4 print:bg-white print:py-0">
        <div
          className="mx-auto bg-white text-black shadow-xl print:shadow-none"
          style={{ width: "210mm", minHeight: "297mm", overflow: "hidden" }}
        >
          <div className="p-[10mm] print:p-[8mm]">
            <div className="border-b border-slate-300 pb-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-indigo-500 shadow-sm">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-extrabold leading-tight text-slate-900">
                    {name}
                  </h1>

                  {education ? (
                    <p className="mt-1 text-base text-slate-600">{education}</p>
                  ) : null}

                  {designation ? (
                    <p className="mt-1 text-lg font-semibold text-slate-800">
                      {designation}
                    </p>
                  ) : null}

                  {workplace ? (
                    <p className="mt-1 text-sm text-slate-600">{workplace}</p>
                  ) : null}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {experienceYears ? (
                      <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Experience: {experienceYears} years
                      </span>
                    ) : null}

                    {courtLevel ? (
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {courtLevel}
                      </span>
                    ) : null}

                    {status === "Active" ? (
                      <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        Active Chamber
                      </span>
                    ) : (
                      <span className="rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                        Inactive Chamber
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-3">
                <h2 className="text-lg font-bold text-slate-900 border-b pb-1">
                  Professional Information
                </h2>

                <div className="mt-3 space-y-2 text-[13px] leading-5">
                  {practiceAreas.length > 0 ? (
                    <div>
                      <p className="font-semibold text-slate-800">Practice Areas</p>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {practiceAreas.map((item, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {languages.length > 0 ? (
                    <div>
                      <p className="font-semibold text-slate-800">Languages</p>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {languages.map((item, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs text-blue-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-3">
                <h2 className="text-lg font-bold text-slate-900 border-b pb-1">
                  Contact & Consultation
                </h2>

                <div className="mt-3 space-y-2 text-[13px] leading-5">
                  {status === "Active" && phone ? (
                    <div>
                      <p className="font-semibold text-slate-800">Phone</p>
                      <p className="text-slate-700">{phone}</p>
                    </div>
                  ) : null}

                  {email ? (
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <p className="text-slate-700 break-all">{email}</p>
                    </div>
                  ) : null}

                  {consultationFee ? (
                    <div>
                      <p className="font-semibold text-slate-800">Consultation Fee</p>
                      <p className="text-slate-700">
                        ৳{consultationFee} {onlineConsultation ? "(Online Available)" : ""}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {status === "Active" ? (
              <div className="mt-4 rounded-xl border border-slate-200 p-3">
                <h2 className="text-lg font-bold text-slate-900 border-b pb-1">
                  Chamber Information
                </h2>

                <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
                  <table className="w-full border-collapse text-[13px]">
                    <tbody>
                      <tr className="border-b">
                        <td className="w-1/3 bg-slate-50 p-2 font-semibold">Chamber Name</td>
                        <td className="p-2">{chamberName || "Not provided"}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-slate-50 p-2 font-semibold">Chamber Address</td>
                        <td className="p-2">{chamberAddress || "Not provided"}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-slate-50 p-2 font-semibold">Visiting Time</td>
                        <td className="p-2">{visitingTime || "Not provided"}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-slate-50 p-2 font-semibold">Phone</td>
                        <td className="p-2">{phone || "Not provided"}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-slate-50 p-2 font-semibold">Email</td>
                        <td className="p-2">{email || "Not provided"}</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-50 p-2 font-semibold">Consultation Fee</td>
                        <td className="p-2">
                          {consultationFee
                            ? `৳${consultationFee} ${onlineConsultation ? "(Online Available)" : ""}`
                            : "Not provided"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="mt-4 rounded-xl border border-yellow-300 bg-yellow-50 p-3">
                <h2 className="text-lg font-bold text-yellow-800">
                  Chamber Status Notice
                </h2>
                <p className="mt-2 text-[13px] leading-5 text-yellow-800">
                  এই মুহূর্তে চেম্বারটি সক্রিয় নেই। অনুগ্রহ করে সমন্বয়কের সাথে যোগাযোগ করুন।
                </p>

                {coordinatorPhone ? (
                  <p className="mt-2 text-[13px]">
                    <span className="font-semibold">Coordinator Phone:</span>{" "}
                    <span className="font-bold">{coordinatorPhone}</span>
                  </p>
                ) : null}
              </div>
            )}

            {description ? (
              <div className="mt-4 rounded-xl border border-slate-200 p-3">
                <h2 className="text-lg font-bold text-slate-900 border-b pb-1">
                  About the {name}
                </h2>
                <p className="mt-3 text-[13px] leading-6 text-slate-700 text-justify">
                  {shortDescription}
                </p>
              </div>
            ) : null}

            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-500">
                  Printed Profile – Advocate & Chamber Details
                </p>
              </div>

              <div className="text-center">
                <div className="w-44 border-b border-slate-400"></div>
                <p className="mt-1 font-semibold text-sm text-slate-800">{name}</p>
                <p className="text-xs text-slate-500">Advocate Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}