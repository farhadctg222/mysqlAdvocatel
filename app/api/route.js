// import connectDB from "../../connectdb";

// export async function GET() {
//   try {
//     const db = await connectDB()
//     const collection = db.collection("lawyerBD"); // এখানে আপনার collection নাম ঠিক আছে কিনা চেক করুন

//     const services = await collection.find({}).toArray();

//     return new Response(
//       JSON.stringify(services),{ status: 200 }
//     );
//   } catch (error) {
//     console.error("API fetch error:", error);
//     return new Response(
//       JSON.stringify({
//         message: "Data fetch failed",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// }

import connectDB from "../../connectdb"; // MySQL কানেকশন ফাইল

export async function GET() {
  
  try {
    const db = await connectDB();

    // MySQL এ SELECT কুয়েরি চালানো
    const [services] = await db.execute("SELECT * FROM `lawyers`");

    return new Response(JSON.stringify(services), { status: 200 });
  } catch (error) {
    console.error("API fetch error:", error);
    return new Response(
      JSON.stringify({
        message: "Data fetch failed",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}




// export default async function handler(req, res) {
//   const db = await connectDB();

//   try {
//     const [rows] = await db.execute('SELECT * FROM lawyers LIMIT 10');
//     res.status(200).json(rows);
//   } catch (error) {
//     res.status(500).json({ error: 'Database query failed' });
//   }
// }
