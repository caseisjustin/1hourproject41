import { Router } from "express";
import userRouter from "./users.router.js"
import tasksRouter from "./tasks.router.js"
const router = Router()

router.use("/users", userRouter)
router.use("./tasks", tasksRouter)


export default router;