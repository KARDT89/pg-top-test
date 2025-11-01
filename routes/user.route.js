import { Router } from "express";
import { createUsernameGet, createUsernamePost, getUsernames } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get("/", getUsernames)
userRouter.get("/new", createUsernameGet)
userRouter.post("/new", createUsernamePost)

export default userRouter