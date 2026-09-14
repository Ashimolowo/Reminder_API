import db from "../config/db.js";

export async function up() {
  try {
    await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

    console.log("Users table created successfully");
  } catch (error) {
    console.error("Migration failed:", error);
  }
}

export async function down() {
  try {
    await db.query("DROP TABLE IF EXISTS users");
    console.log("Users table dropped successfully");
  } catch (error) {
    console.error("Rollback failed:", error);
  }
}

up();
