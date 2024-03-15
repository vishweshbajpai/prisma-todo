import { Router } from "express";
import userRouter from "./User";
import todoRouter from "./Todo";

const router = Router();

router.use("/users", userRouter);
router.use("/todos", todoRouter);

export default router;
