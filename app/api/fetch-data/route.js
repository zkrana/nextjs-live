import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    // Connect to the PostgreSQL database using environment variables or hardcoded connection details
    const db = await sql.connect({
      connectionString: process.env.POSTGRES_URL,
    });

    // Execute SQL query to fetch data
    const result = await db.query("SELECT * FROM Pets");

    // Close the database connection
    await db.end();

    // Return the fetched data as JSON response
    res.status(200).json({ data: result.rows });
  } catch (error) {
    // If an error occurs, return an error response
    res.status(500).json({ error: error.message });
  }
}
