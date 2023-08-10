import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello, World!");
});

export default app;
