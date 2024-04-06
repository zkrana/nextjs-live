const { Pool } = require("pg");
const { customers, invoices } = require("./placeholder-data");

// PostgreSQL connection details
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false, // Needed if your PostgreSQL server uses self-signed certificates
  },
});

// Function to create tables
const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS invoices (
        id SERIAL PRIMARY KEY,
        customer_id INT,
        amount INT,
        status VARCHAR(50),
        date DATE
      )
    `);
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};

// Function to seed data into tables
const seedData = async () => {
  try {
    // Seed customers data
    for (const customer of customers) {
      await pool.query("INSERT INTO customers (name, email) VALUES ($1, $2)", [
        customer.name,
        customer.email,
      ]);
    }

    // Seed invoices data
    for (const invoice of invoices) {
      await pool.query(
        "INSERT INTO invoices (customer_id, amount, status, date) VALUES ($1, $2, $3, $4)",
        [invoice.customer_id, invoice.amount, invoice.status, invoice.date]
      );
    }

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

// Main function to run the script
const seedDatabase = async () => {
  try {
    await createTables();
    await seedData();
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    pool.end();
  }
};

// Call the main function to start seeding the database
seedDatabase();
