import { Router } from "express";
import {getAllusers, getUserByLogin, createUser, updateUser, deleteUser} from "../controllers/user.controller.js"

const router = Router()

router.get("/", getAllusers)
router.get("/:login", getUserByLogin)
router.post("/", createUser)
router.put("/:login", updateUser)
router.delete("/:login", deleteUser)

export default router;