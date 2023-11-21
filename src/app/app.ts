/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import rootRoutes from "./root.routes";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
const app: Application = express();
// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// application routes
app.use(rootRoutes);

// Global Error handle
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
