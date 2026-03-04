"use client";

import Link from "next/link";
import "./Division.css";
import { useEffect, useState } from "react";

const getData = async () => {
  try {
    // ✅ session set
    const s = await fetch("/api/auth/session", { credentials: "include" });
    if (!s.ok) return [];

    // ✅ data fetch
    const res = await fetch("/api", {
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) return [];
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default function DataMainPageShow() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const lawdata = await getData();
      const finalData = [...(lawdata || [])].reverse().slice(0, 9);
      setData(finalData);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="grid items-center justify-center lg-justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center animate-bounce">
              <span className="text-3xl">🔒</span>
            </div>
            <span className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></span>
          </div>

          <div className="mt-6 bg-red-50 border border-red-300 rounded-xl px-6 py-4 shadow-md animate-fadeIn">
            <p className="text-center text-red-600 font-semibold text-lg">
              ⚠️ ডাটা পাওয়া যাচ্ছে না
            </p>
            <p className="text-center text-red-500 text-sm mt-1">
              অনুগ্রহ করে পরে আবার চেষ্টা করুন
            </p>
          </div>
        </div>
      ) : (
        data.map((post, index) => (
          <div
            key={post.slug}
            className="ProfileCard bg-slate-50 border border-gray-300 rounded-xl p-3 text-center shadow-sm transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:bg-white animate-fadeIn"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="flex justify-center mb-3">
              <img
                src={post.image}
                alt={post.name}
                className="w-25 h-25 rounded-full object-cover border-4 border-indigo-500 transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-lg font-bold text-indigo-700">{post.name}</h1>
              <h5 className="text-sm text-gray-700">{post.education}</h5>
              <h6 className="text-sm text-red-600 font-semibold">{post.specialist}</h6>
              <h5 className="text-sm text-gray-800">{post.designation}</h5>
              <h2 className="text-sm text-md font-bold text-red-700">{post.court_level}</h2>
            </div>

            {post.status === "Active" ? (
              <a href={`/lawyers/${post.id}/${post.slug}`}>
                <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  See Chamber
                </button>
              </a>
            ) : (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-center">
                <p className="text-sm font-semibold text-yellow-700">
                  ⚠️ এই মুহূর্তে চেম্বারটি সক্রিয় নেই
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  অনুগ্রহ করে সমন্বয়কের সাথে যোগাযোগ করুন
                </p>

                {post.coordinator_phone ? (
                  <a href={`tel:${post.coordinator_phone}`} className="mt-3 inline-block w-full">
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                      📞 Call Co-ordinator
                    </button>
                  </a>
                ) : (
                  <p className="text-xs text-red-500 mt-2">📵 ফোন নম্বর পাওয়া যায়নি</p>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}