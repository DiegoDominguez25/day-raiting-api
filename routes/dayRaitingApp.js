import express from "express";
import { DayController } from "../controllers/dayRaitingApp.js";

const router = express.Router();

router.get("/:year/:month", DayController.getDaysBySpecificMonth);

export default router;
