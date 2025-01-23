import { DayRating } from "../models/mysql/dayRaitingApp.js";

export class DayController {
  static async getDaysBySpecificMonth(req, res) {
    try {
      const { year, month } = req.params;
      const days = await DayRating.getDaysByMonth(year, month);
      return res.json(days);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
