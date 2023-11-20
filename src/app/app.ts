import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
const app: Application = express();
// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// health route
app.get("/health", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Your server health is Good",
  });
});

export default app;
