import express from "express";
import cors from "cors";
import tablewareRouter from "./src/routes/tablewareRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API funcionando" });
});

app.use("/api/tableware", tablewareRouter);

const PORT= 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});