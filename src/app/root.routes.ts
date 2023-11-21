import { Request, Response, Router } from "express";
import studentRoute from "./modules/student/student.route";
const routes = Router();

// health route
routes.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Your server health is Good",
  });
});

// student route
routes.use("/api/v1/student", studentRoute);

export default routes;
