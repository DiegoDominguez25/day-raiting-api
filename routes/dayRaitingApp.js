import express from "express";
import { DayController } from "../controllers/dayRaitingApp.js";
import { dayRatingSchema } from "../schemas/dayRaitingApp.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const router = express.Router();

router.get("/:year/:month", DayController.getDaysByMonth);
router.post("/", validateSchema(dayRatingSchema), DayController.createDay);

export default router;
