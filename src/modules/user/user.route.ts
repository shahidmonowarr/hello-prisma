import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.insertIntoDB);
router.post("/profile", UserController.insertOrUpdateIntoDB);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
