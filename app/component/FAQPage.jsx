'use client'
import { useState } from "react";

export default function CaseCostFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "মামলা করতে কত টাকা লাগে?",
      answer:
        "মামলার খরচ বিভিন্ন ধরণের এবং মামলার জটিলতার উপর নির্ভর করে। সাধারণত মামলা ফাইলিং ফি, আইনজীবীর ফি, কোর্ট ফি ও অন্যান্য খরচ মিলিয়ে খরচ হতে পারে ৫,০০০ টাকা থেকে শুরু করে লক্ষাধিক টাকা পর্যন্ত। নির্দিষ্ট খরচ জানতে সংশ্লিষ্ট আইনজীবীর সাথে পরামর্শ করুন।",
    },
    {
      question: "জিডি করতে খরচ কত?",
      answer:
        "জিডি (General Diary) করার জন্য সাধারণত কোনো ফি লাগে না বা খুব কম পরিমাণ ফি হতে পারে যা থানার নিয়ম অনুযায়ী পরিবর্তিত হয়। জিডি করার জন্য থানায় গিয়ে প্রমাণ সহ আবেদন করতে হয়।",
    },
    {
      question: "ডিভোর্স মামলা খরচ?",
      answer:
        "ডিভোর্স মামলার খরচ মামলার প্রকার এবং আদালতের উপর নির্ভর করে। সাধারণত আইনজীবীর ফি, আদালত ফি ও অন্যান্য আনুষঙ্গিক খরচ মিলিয়ে খরচ হতে পারে ২০,০০০ টাকা থেকে শুরু করে প্রকারভেদে বাড়তে পারে। বিস্তারিত জানার জন্য অভিজ্ঞ আইনজীবীর পরামর্শ নিন।",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-linear-to-br from-slate-50 to-cyan-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-8">

        <h1 className="text-3xl font-semibold text-slate-800 mb-8 border-b pb-4">
          মামলার খরচ সম্পর্কিত সাধারণ প্রশ্ন
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-cyan-100 text-cyan-800 font-medium hover:bg-cyan-200 focus:outline-none flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 text-slate-700 bg-cyan-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
