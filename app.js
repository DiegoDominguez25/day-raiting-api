import express from "express";
import dotenv from "dotenv";
import { corsMiddleware } from "./middlewares/cors.js";
import router from "./routes/dayRaitingApp.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(corsMiddleware());

app.use("/api/days", router);

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
