import { Router, Request, Response, NextFunction } from "express";
import { UniqueIdGenerator } from "../Models/uniqueId";

export const isAliveRoute = Router();

isAliveRoute.get("/is_alive", async (req: Request, res: Response, next: NextFunction) => {
  
  const id = new UniqueIdGenerator().createUniqueId(1, 2, 3);
  
  
  res.status(200).json({
    alive: true,
    id
  });
  next();
});