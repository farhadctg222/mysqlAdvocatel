"use client";

import { useMemo, useState } from "react";

export default function LoadMoreLawyers({ initialData, buildingId, pageSize }) {
  const [data, setData] = useState(initialData || []);
  const [offset, setOffset] = useState((initialData || []).length);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState((initialData || []).length === pageSize);

  // ✅ Removed hide
  const visibleData = useMemo(() => {
    return data.filter(
      (p) => String(p.status ?? "").toLowerCase() !== "removed"
    );
  }, [data]);

  async function loadMore() {
    setLoading(true);

    const res = await fetch(
      `/api/lawyers?buildingId=${buildingId}&offset=${offset}&limit=${pageSize}`,
      { cache: "no-store" }
    );

    const json = await res.json();
    const newData = json?.data || [];

    setData((prev) => [...prev, ...newData]);
    setOffset((prev) => prev + newData.length);
    setHasMore(newData.length === pageSize);
    setLoading(false);
  }

  return (
    <>
      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleData.map((post) => {
          const status = String(post.status ?? "").toLowerCase();

          const isActive = status === "active";
          const isInactive = status === "inactive";
          // removed আগেই filter করা আছে

          return (
            <div
              key={post.id}
              className="ProfileCard bg-slate-50 border rounded-xl p-4 text-center shadow-sm hover:shadow-xl transition"
            >
              <img
                src={post.image || "/lawyer-placeholder.png"}
                alt={post.name || "Lawyer"}
                className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-500 object-cover"
              />

              <h2 className="mt-3 font-bold text-indigo-700">
                {post.name ?? "Unnamed Lawyer"}
              </h2>

              <p className="text-sm text-gray-700">
                {post.education ?? "-"}
              </p>

              <p className="text-sm text-gray-800">
                {post.designation ?? "-"}
              </p>

              <p className="text-sm text-red-700 font-bold">
                {post.court_level ?? "-"}
              </p>

              {/* ================= STATUS BASED ACTION ================= */}
              {isActive ? (
                <a href={`/lawyers/${post.id}/${post.slug}`}>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                    See Chamber
                  </button>
                </a>
              ) : isInactive ? (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-center">
                  <p className="text-sm font-semibold text-yellow-700">
                    ⚠️ এই মুহূর্তে চেম্বারটি সক্রিয় নেই
                  </p>

                  <p className="text-xs text-gray-600 mt-1">
                    অনুগ্রহ করে সমন্বয়কের সাথে যোগাযোগ করুন
                  </p>

                  {post.coordinator_phone ? (
                    <a
                      href={`tel:${post.coordinator_phone}`}
                      className="mt-3 inline-block w-full"
                    >
                      <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                        📞 Call Co-ordinator
                      </button>
                    </a>
                  ) : (
                    <p className="text-xs text-red-500 mt-2">
                      📵 ফোন নম্বর পাওয়া যায়নি
                    </p>
                  )}
                </div>
              ) : (
                // status unknown হলে fallback
                <div className="mt-4 bg-gray-50 border p-3 rounded">
                  <p className="text-sm text-gray-700">
                    Status: {post.status ?? "Unknown"}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= LOAD MORE ================= */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-black disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
}
