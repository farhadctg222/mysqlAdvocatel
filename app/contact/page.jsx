export const metadata = {
  title: "যোগাযোগ করুন | AdvocateListBD Bangladesh Lawyer Contact",
  description:
    "AdvocateListBD.com এর সাথে যোগাযোগ করুন। আইনজীবী তথ্য, সংশোধন, অভিযোগ বা সহযোগিতার জন্য ইমেইল, মোবাইল ও ঠিকানা ব্যবহার করুন।",

  keywords: [
    "Contact AdvocateListBD",
    "Bangladesh Lawyer Contact",
    "Chattogram Lawyer Contact",
    "Advocate Contact Bangladesh",
    "Lawyer Help Bangladesh",

    // Bangla keywords 🔥
    "যোগাযোগ আইনজীবী বাংলাদেশ",
    "চট্টগ্রাম আইনজীবী যোগাযোগ",
    "আইনজীবী সহায়তা",
    "লয়ার কন্টাক্ট বাংলাদেশ",
  ],

  openGraph: {
    title: "Contact AdvocateListBD",
    description:
      "Get in touch with AdvocateListBD for lawyer listings, updates and support.",
    url: "https://advocatelistbd.com/contact",
    siteName: "AdvocateListBD",
    images: [
      {
        url: "/og-lawyer.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AdvocateListBD",
      },
    ],
    type: "website",
  },
};
export default function ContactUs() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-indigo-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        
        <h1 className="text-3xl font-semibold text-indigo-900 mb-8 border-b border-indigo-200 pb-4 tracking-wide">
          যোগাযোগ করুন
        </h1>

        <p className="text-indigo-800 leading-relaxed text-lg mb-8">
          AdvocateListBD.com সম্পর্কিত যেকোনো প্রশ্ন, পরামর্শ, তথ্য সংশোধন,
          অভিযোগ বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করতে পারেন।
          আমরা যুক্তিসঙ্গত সময়ের মধ্যে উত্তর দেওয়ার চেষ্টা করি।
        </p>

        {/* Contact Info */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-10 space-y-5 border border-indigo-200">
          <p className="text-indigo-900 text-lg flex items-center gap-3">
            <span className="text-indigo-600 text-2xl">📧</span>
            <span>
              <strong>ইমেইল:</strong> <a href="mailto:farhadctg222@gmail.com" className="text-indigo-700 underline hover:text-indigo-900">farhadctg222@gmail.com</a>
            </span>
          </p>
          <p className="text-indigo-900 text-lg flex items-center gap-3">
            <span className="text-indigo-600 text-2xl">📱</span>
            <span><strong>মোবাইল:</strong> <a href="tel:+8801305573617" className="text-indigo-700 underline hover:text-indigo-900">01305573617</a></span>
          </p>
          <p className="text-indigo-900 text-lg flex items-center gap-3">
            <span className="text-indigo-600 text-2xl">📍</span>
            <span><strong>ঠিকানা:</strong> 121/বি আইজীবী দোয়েল ভবন, জজ কোর্ট সংলগ্ন, চট্টগ্রাম।</span>
          </p>
        </div>

        {/* Important Note */}
        <div className="bg-white border-l-8 border-indigo-500 p-5 rounded-lg shadow-sm">
          <p className="text-indigo-900 font-semibold mb-2 text-lg">গুরুত্বপূর্ণ নোট</p>
          <p className="text-indigo-800 leading-relaxed text-sm md:text-base">
            AdvocateListBD.com কোনো আইনগত পরামর্শ প্রদান করে না।  
            আইন সংক্রান্ত সহায়তার জন্য অনুগ্রহ করে সরাসরি সংশ্লিষ্ট আইনজীবীর সাথে যোগাযোগ করুন।
          </p>
        </div>

      </div>
    </div>
  );
}
