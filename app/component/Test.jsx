// import React from "react";

// // Single-file Next.js-ready React component for a clean, responsive landing page
// // TailwindCSS classes are used for styling. Default export is the page component.

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
//       {/* Top bar */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center gap-4">
//               <div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">ক</div>
//               <div>
//                 <h1 className="text-lg font-semibold">কাজেরমানুষ</h1>
//                 <p className="text-xs text-gray-500">বিশ্বাসযোগ্য গৃহকর্মী সরবরাহ</p>
//               </div>
//             </div>

//             <nav className="hidden md:flex items-center gap-6 text-sm">
//               <a href="#services" className="hover:text-indigo-600">সার্ভিস</a>
//               <a href="#how" className="hover:text-indigo-600">কীভাবে কাজ করে</a>
//               <a href="#pricing" className="hover:text-indigo-600">মূল্য</a>
//               <a href="#contact" className="hover:text-indigo-600">যোগাযোগ</a>
//             </nav>

//             <div className="hidden md:block">
//               <a href="#contact" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">এখনই বুক করুন</a>
//             </div>

//             <div className="md:hidden">
//               <button aria-label="open menu" className="p-2 rounded-md border border-gray-200">মেনু</button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <main>
//         <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//               <div>
//                 <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">বিশ্বাসযোগ্য গৃহকর্মী — সহজেই, দ্রুত</h2>
//                 <p className="mt-4 text-indigo-100 max-w-xl">রান্না, পরিচ্ছন্নতা, বেবি কেয়ার বা বৃদ্ধসেবা — আপনার প্রয়োজন অনুযায়ী প্রশিক্ষিত কর্মী সরবরাহ করা হবে। প্রতিটি কর্মী যাচাই-প্রমাণিত এবং চুক্তিনীত।</p>

//                 <div className="mt-6 flex gap-3">
//                   <a href="#contact" className="inline-block bg-white text-indigo-600 px-5 py-3 rounded-lg font-medium">সেবা বুক করুন</a>
//                   <a href="#services" className="inline-block border border-white px-4 py-3 rounded-lg">বিস্তারিত জানুন</a>
//                 </div>

//                 <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
//                   <div className="bg-indigo-500/20 p-3 rounded-md">
//                     <p className="text-sm">✅ যাচাই-পদ্ধতি</p>
//                     <p className="text-xs text-indigo-100">NID, লোকাল রেফারেন্স, স্কিল টেস্ট</p>
//                   </div>
//                   <div className="bg-indigo-500/20 p-3 rounded-md">
//                     <p className="text-sm">✅ ট্রেনিং</p>
//                     <p className="text-xs text-indigo-100">কমিউনিকেশন ও হাইজিন প্রশিক্ষণ</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="rounded-2xl overflow-hidden shadow-2xl">
//                   <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=60" alt="maid" className="w-full h-80 object-cover" />
//                 </div>

//                 <div className="absolute right-6 bottom-6 bg-white rounded-xl p-4 shadow-lg w-64">
//                   <p className="text-xs text-gray-500">Popular</p>
//                   <p className="font-semibold">পরিচ্ছন্নতা কর্মী - দৈনিক/মাসিক</p>
//                   <p className="text-sm text-gray-600 mt-2">দ্রুত বুকিং • যাচাই সমেত</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Services */}
//         <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <h3 className="text-2xl font-bold">আমাদের সার্ভিস সমূহ</h3>
//           <p className="text-gray-600 mt-2 max-w-2xl">আপনার প্রয়োজন অনুযায়ী বিভিন্ন ধরণের গৃহকর্মী সরবরাহ করা হয়।</p>

//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: 'পরিচ্ছন্নতা কর্মী', desc: 'ঘর, রান্নাঘর ও বাথরুম পরিষ্কার', tag: 'Daily' },
//               { title: 'রাঁধুনি', desc: 'সফল স্বাদ ও স্বাস্থ্যসম্মত রান্না', tag: 'Experienced' },
//               { title: 'বেবি কেয়ার', desc: 'শিশু যত্নে অভিজ্ঞ', tag: 'Trusted' },
//               { title: 'বৃদ্ধসেবা', desc: 'বয়স্কদের সহায়তা ও দেখাশোনা', tag: 'Companion' },
//             ].map((s) => (
//               <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center font-semibold text-indigo-600">ই</div>
//                   <div>
//                     <h4 className="font-semibold">{s.title}</h4>
//                     <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
//                     <span className="mt-3 inline-block text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">{s.tag}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* How it works */}
//         <section id="how" className="bg-white py-12">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h3 className="text-2xl font-bold">কিভাবে কাজ করে</h3>
//             <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
//               {[
//                 { step: '১', title: 'রেজিস্টার করুন', desc: 'ক্লায়েন্ট ওয়েব ফর্ম বা ফোন থেকে রেজিস্টার করবে' },
//                 { step: '২', title: 'যাচাই ও সাক্ষাৎ', desc: 'কর্মী তথ্য দেখান ও সাক্ষাৎ করান' },
//                 { step: '৩', title: 'চুক্তি ও সরবরাহ', desc: 'লিখিত চুক্তির পরে কর্মী পাঠানো হবে' },
//                 { step: '৪', title: 'সাপোর্ট', desc: 'মাসিক ম্যানেজমেন্ট ও রিপ্লেসমেন্ট' },
//               ].map((it) => (
//                 <div key={it.step} className="p-6 border rounded-lg">
//                   <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">{it.step}</div>
//                   <h4 className="mt-4 font-semibold">{it.title}</h4>
//                   <p className="text-sm text-gray-500 mt-2">{it.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Pricing */}
//         <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <h3 className="text-2xl font-bold">মূল্য নির্ধারণ</h3>
//           <p className="text-gray-600 mt-2">আপনার প্রয়োজন ও চুক্তি অনুযায়ী নমনীয় মূল্য। নিচে কিছু উদাহরণ আছে।</p>

//           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <h4 className="font-semibold">বেসিক (দৈনিক)</h4>
//               <p className="text-3xl font-bold mt-4">৳২০০/দিন</p>
//               <ul className="mt-4 text-sm text-gray-600 space-y-2">
//                 <li>ঘরের সাধারণ পরিচ্ছন্নতা</li>
//                 <li>১ সময় রান্না</li>
//                 <li>চুক্তি: একদিন</li>
//               </ul>
//               <a href="#contact" className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">বুক করুন</a>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-indigo-600">
//               <h4 className="font-semibold">স্ট্যান্ডার্ড (মাসিক)</h4>
//               <p className="text-3xl font-bold mt-4">৳১০,০০০/মাস</p>
//               <ul className="mt-4 text-sm text-gray-600 space-y-2">
//                 <li>দৈনন্দিন কাজ-কর্ম</li>
//                 <li>ফোন সাপোর্ট</li>
//                 <li>একবার রিপ্লেসমেন্ট ফ্রি</li>
//               </ul>
//               <a href="#contact" className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">বুক করুন</a>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <h4 className="font-semibold">প্রিমিয়াম (ট্রেনিং সহ)</h4>
//               <p className="text-3xl font-bold mt-4">৳১৫,০০০/মাস</p>
//               <ul className="mt-4 text-sm text-gray-600 space-y-2">
//                 <li>ট্রেনিং ও বিশেষ স্কিল</li>
//                 <li>প্রায়োরিটি সাপোর্ট</li>
//                 <li>মেডিক্যাল চেক আপ</li>
//               </ul>
//               <a href="#contact" className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">বুক করুন</a>
//             </div>
//           </div>
//         </section>

//         {/* FAQ + Disclaimer */}
//         <section className="bg-white py-10">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="text-xl font-semibold">প্রশ্নোত্তর (FAQ)</h4>
//                 <div className="mt-4 space-y-3">
//                   <details className="p-4 bg-gray-50 rounded">
//                     <summary className="font-medium">আপনি কি আইনিভাবে দায় নেন?</summary>
//                     <p className="text-sm text-gray-600 mt-2">আমরা শুধুমাত্র গৃহকর্মী সরবরাহকারী। কর্মী বা ক্লায়েন্টের ব্যবহারে আমরা সরাসরি দায় নি - চুক্তি অনুযায়ী। বিস্তারিত জন্য সার্ভিস টার্মস দেখুন।</p>
//                   </details>

//                   <details className="p-4 bg-gray-50 rounded">
//                     <summary className="font-medium">কর্মী বদল হলে কি করবেন?</summary>
//                     <p className="text-sm text-gray-600 mt-2">প্রথম বদলি একবার ফ্রি। পরবর্তীতে ন্যূনতম সার্ভিস ফি প্রযোজ্য।</p>
//                   </details>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-xl font-semibold">Disclaimer</h4>
//                 <p className="text-sm text-gray-600 mt-3">আমরা গৃহকর্মী সরবরাহকারী প্রতিষ্ঠান মাত্র; কর্মীর ব্যক্তিগত আচরণ, সামগ্রী ক্ষতি বা অপরাধজনিত বিষয়ে সরাসরি দায় গ্রহণ করি না। ক্লায়েন্ট এবং কর্মীর মধ্যে চুক্তি ও স্থানীয় আইন প্রযোজ্য থাকবে।</p>

//                 <div className="mt-6 bg-gray-50 p-4 rounded">
//                   <p className="text-sm">Trade License • TIN • Terms & Conditions</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact / Lead form */}
//         <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <h3 className="text-2xl font-bold">যোগাযোগ করুন</h3>
//           <p className="text-gray-600 mt-2">আপনি জানতে চাইলে ফর্মটি পূরণ করুন — আমরা দ্রুত response দেব।</p>

//           <form className="mt-6 grid grid-cols-1 gap-4">
//             <input className="p-3 border rounded" placeholder="নাম" />
//             <input className="p-3 border rounded" placeholder="মোবাইল" />
//             <select className="p-3 border rounded">
//               <option>সার্ভিস প্রয়োজন?</option>
//               <option>পরিচ্ছন্নতা</option>
//               <option>রাঁধুনি</option>
//               <option>বেবি কেয়ার</option>
//             </select>
//             <textarea className="p-3 border rounded" rows={4} placeholder="প্রয়োজনীয়তা লিখুন"></textarea>
//             <div className="flex items-center gap-3">
//               <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded">ফর্ম পাঠান</button>
//               <p className="text-sm text-gray-500">অথবা কল করুন: ০১XXXXXXXXX</p>
//             </div>
//           </form>
//         </section>

//         {/* Footer */}
//         <footer className="bg-gray-900 text-gray-200 py-8">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <h5 className="font-semibold">কাজেরমানুষ</h5>
//               <p className="text-sm text-gray-400 mt-2">ভরসাযোগ্য গৃহকর্মী সরবরাহকারী — যাচাই ও ট্রেনিং সমেত।</p>
//             </div>

//             <div>
//               <h6 className="font-medium">লিংক</h6>
//               <ul className="mt-2 text-sm text-gray-400 space-y-1">
//                 <li>সার্ভিস</li>
//                 <li>প্রাইসিং</li>
//                 <li>প্রশ্নোত্তর</li>
//               </ul>
//             </div>

//             <div>
//               <h6 className="font-medium">যোগাযোগ</h6>
//               <p className="text-sm text-gray-400 mt-2">ইমেইল: contact@kajermanush.com</p>
//               <p className="text-sm text-gray-400">ঠিকানা: আপনার শহর, বাংলাদেশ</p>
//             </div>
//           </div>

//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} কাজেরমানুষ • All rights reserved</div>
//         </footer>
//       </main>
//     </div>
//   );
// }
