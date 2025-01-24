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

  static async createDay({ date, rating, comment }) {
    const [existsDay] = await pool.query(
      `SELECT *
      FROM day_ratings
      WHERE date = ?`,
      [date]
    );

    if (existsDay.length > 0) {
      const error = new Error("Already exists a rating for this day");
      error.status = 400;
      throw error;
    }

    await pool.query(
      `INSERT INTO day_ratings (date, rating, comment)
      VALUES (?, ?, ?)`,
      [date, rating, comment]
    );

    return {
      date,
      rating,
      comment,
      create_at: new Date(),
    };
  }
}
