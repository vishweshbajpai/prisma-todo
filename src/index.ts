import express from "express";
import cors from "cors";
import rootRouter from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

//  Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? "Something broke!";

  res.status(statusCode).json({ message });
  console.log(err);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
