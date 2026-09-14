import db from '../config/db.js';

export const RemiderModel = {
    async getAll() {
        const result = db.query('SELECT * FROM reminders ORDER BY created_at DESC');
        //return (await result).rows
        return result.rows;
    },

    async findById(id) {
      const result = db.query("SELECT * FROM reminders WHERE id = $1", [id]);
      //return (await result).rows[0]
      return result.rows[0];
    },

    async create({ reminder, notes, userId}) {
      const result = db.query(
        "INSERT INTO reminders (reminder, notes, user_id) VALUES ($1, $2, $3) RETUNINING *",
        [reminder, notes, userId],
      );
      //return (await result).rows
      return result.rows;
    }
}