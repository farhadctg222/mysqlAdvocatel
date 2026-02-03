const getServices = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/service`,
      { next: { revalidate: 60 } } // SEO + cache
    );

    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
};
export async function generateMetadata() {
  const title =
    "Sponsor Legal Services in Bangladesh | Stamp Vendor, Notary, Deed Writer";

  const description =
    "Government licensed stamp vendor, notary public, deed writer and legal sponsor services in Bangladesh. Call directly for affidavit, stamp & court services.";

  const url = "https://lawyerbangladesh.com";
  const image = "https://lawyerbangladesh.com/seo/service-ads.jpg";

  return {
    title,
    description,

    keywords: [
      "Stamp Vendor Bangladesh",
      "Notary Public Bangladesh",
      "Deed Writer Service",
      "Court Stamp Buy",
      "Affidavit Service Bangladesh",
      "Legal Sponsor Services",
      "Lawyer Bangladesh Services",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Lawyer Bangladesh",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Sponsor Legal Services in Bangladesh",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}



const ServiceAds = async () => {
  const services = await getServices();

  if (services.length === 0) return null;

  return (
    <section className="bg-linear-to-br from-slate-100 to-emerald-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-10">
          Our Sponsor Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* IMAGE */}
              <div className="w-full h-44 bg-white flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-xs text-emerald-600 mb-2">
                  {item.subtitle}
                </p>

                <p className="text-sm text-slate-600 mb-4">
                  {item.description}
                </p>

                <a
                  href={`tel:${item.phone}`}
                  className="block w-full bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ServiceAds;
