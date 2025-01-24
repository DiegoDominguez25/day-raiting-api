import express from "express";
import dotenv from "dotenv";
import { corsMiddleware } from "./middlewares/cors.js";
import router from "./routes/dayRaitingApp.js";
import { handleInvalidJson } from "./middlewares/handleInvalidJson.js";

const app = express();
app.disable("x-powered-by");
dotenv.config();
app.use(corsMiddleware());
app.use(express.json());
app.use(handleInvalidJson);

app.use("/days", router);

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
