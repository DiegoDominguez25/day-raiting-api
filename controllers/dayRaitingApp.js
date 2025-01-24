import { DayRating } from "../models/mysql/dayRaitingApp.js";

export class DayController {
  static async getDaysByMonth(req, res) {
    try {
      const { year, month } = req.params;
      const days = await DayRating.getDaysByMonth(year, month);
      return res.json(days);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createDay(req, res) {
    try {
      const { date, rating, comment } = req.body;

      if (!date || !rating || !comment) {
        return res.status(400).json({
          error: "Missing required fields",
          details: [
            {
              code: "missing_field",
              message: "Date and rating are required",
            },
          ],
        });
      }

      const result = await DayRating.createDay({ date, rating, comment });

      res.status(201).json({
        message: "Day rating created",
        data: result,
      });
    } catch (error) {
      console.error("Error creating day rating, ", error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }
}
