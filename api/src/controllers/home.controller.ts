import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
  console.log("Welcome to veev application");
  return res.json({ message: "Welcome to veev application!" });
}

