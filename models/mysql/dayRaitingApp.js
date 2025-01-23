import pool from "../../config/database.js";

export class DayRating {
  static async getDaysByMonth(year, month) {
    const [rows] = await pool.query(
      `SELECT * 
      FROM day_ratings 
      WHERE YEAR(date) = ? 
        AND MONTH(date) = ?
      ORDER BY date ASC`,
      [year, month]
    );
    return rows;
  }
}
