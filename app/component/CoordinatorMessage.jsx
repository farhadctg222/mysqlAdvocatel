"use client";

import { useState } from "react";

const CoordinatorMessage = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-6xl mx-auto my-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">

        {/* Image */}
        <div className="shrink-0 mx-auto md:mx-0">
          <img
            src="/mdfarhad.jpg"
            alt="Coordinator"
            className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover border-4 border-indigo-700 shadow-md"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            মোহাম্মদ ফরহাদ উদ্দিন
          </h2>
          
          <p className="text-gray-600 mb-4">
            সমন্বয়ক ও প্রতিষ্ঠাতা
          </p>

          {/* Short Intro */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify">
            এই ওয়েবসাইটের আনুষ্ঠানিক উদ্বোধনের মাধ্যমে আমরা শুধু একটি ডিজিটাল
            প্ল্যাটফর্ম চালু করিনি— আমরা একটি স্বপ্ন, একটি বিশ্বাস এবং একটি
            দায়বদ্ধতার আলো জ্বালিয়েছি।
          </p>

          {/* Full Text */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              open ? "max-h-1250 opacity-100 mt-5" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed text-justify">

              <p>
                এই উদ্যোগের পেছনে রয়েছে বহু রাতের না-ঘুমানো সময়, অসংখ্য ভাবনা,
                ভুল–শেখা–পুনরায় শুরু করার গল্প, এবং সর্বোপরি মানুষের উপকারে আসার
                একটি গভীর মানবিক আকাঙ্ক্ষা। একজন ডেভেলপার হিসেবে, যখন কোনো
                প্রজেক্ট অন্ধকার থেকে আলোর মুখ দেখে, তখন মনে হয়—এই পরিশ্রম
                সার্থক হয়েছে।
              </p>

              <p>
                আমরা এমন একটি সমাজে বাস করি, যেখানে অনেক মানুষ ন্যায়বিচার
                চাইতে গিয়ে দিশেহারা হয়ে পড়েন— কাকে বিশ্বাস করবেন, কোথায় যাবেন,
                কত খরচ হবে—এই প্রশ্নগুলোর উত্তর না পেয়ে অনেকেই মাঝপথে থেমে যান।
                এই ওয়েবসাইট সেই অনিশ্চয়তার অন্ধকারে একটি পথ দেখানোর প্রয়াস।
              </p>

              <p>
                এই প্ল্যাটফর্মের মাধ্যমে আমরা চাই আইনজীবী ও সাধারণ মানুষের
                মধ্যে দূরত্ব কমাতে, তথ্যকে সহজ ও স্বচ্ছ করতে, এবং প্রযুক্তিকে
                মানুষের সেবায় নিয়োজিত করতে। আমাদের লক্ষ্য কখনোই কেবল একটি
                ওয়েবসাইট তৈরি করা নয়— বরং একটি বিশ্বাসযোগ্য ব্যবস্থা গড়ে তোলা।
              </p>

              <p>
                এই মাইলফলক আমাদের যাত্রার শেষ নয়। বরং এখান থেকেই শুরু হচ্ছে
                আরও বড় দায়িত্ব, আরও গভীর দায়বদ্ধতা এবং আরও সততার সঙ্গে এগিয়ে
                যাওয়ার প্রতিজ্ঞা। ভুল হতে পারে, সীমাবদ্ধতা থাকতে পারে— কিন্তু
                নীতিতে আমরা অবিচল থাকবো।
              </p>

              <p>
                আজকের এই অর্জন সম্ভব হয়েছে সবার সহযোগিতা, অনুপ্রেরণা ও বিশ্বাসের
                কারণে। আমি কৃতজ্ঞ সেই সকল মানুষের প্রতি যারা আমাদের পাশে
                থেকেছেন, আস্থা রেখেছেন এবং এই স্বপ্নকে বাস্তবতার পথে এগিয়ে নিতে
                সহযোগিতা করেছেন।
              </p>

              <p>
                আমরা আশা করি, এই ওয়েবসাইট মানুষের জীবনে সহজতা আনবে,
                ন্যায়বিচার পাওয়ার পথে একটি নির্ভরযোগ্য সঙ্গী হয়ে উঠবে,
                এবং প্রযুক্তির মানবিক ব্যবহারের একটি উদাহরণ স্থাপন করবে।
              </p>

              <p className="font-semibold">
                এই যাত্রায় সবার দোয়া, পরামর্শ ও সহযোগিতা আমাদের সবচেয়ে বড় শক্তি।
              </p>

            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-6 inline-flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900 transition"
          >
            {open ? "সংক্ষিপ্ত করুন" : "বিস্তারিত পড়ুন"}
            <span
              className={`transform transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default CoordinatorMessage;