// export const runtime = "nodejs";

// import mysql from "mysql2/promise";

// let connection = null;


// const connectDB = async () => {
//   if (connection) {
//     return connection;
//   }

//   try {
//     connection = await mysql.createConnection({
//       host: process.env.MYSQL_HOST,
//       user: process.env.MYSQL_USER,
//       password: process.env.MYSQL_PASSWORD, // XAMPP এ সাধারণত password নাই
//       database: process.env.MYSQL_DATABASE,
//       port: Number(process.env.MYSQL_PORT),
//     });

//     console.log("✅ MySQL database connected successfully");
//     return connection;

//   } catch (error) {
//     console.error("❌ MySQL connection failed:", error);
//     throw error;
//   }
// };

// export default connectDB;


export const runtime = "nodejs";

import mysql from "mysql2/promise";

let pool;

const connectDB = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || "127.0.0.1",
      user: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "",
      database: process.env.MYSQL_DATABASE,
      port: Number(process.env.MYSQL_PORT) || 3306,

      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log("✅ MySQL Pool Created");
  }

  return pool;
};

export default connectDB;