import express from "express";

import {
    createUser,
    getUsers,
    updateUser,
    deleteUser
} from "../controllers/user.controllers.js";

import { checkAuth, validateUserId } from "../middlewares/auth.js";

import {
    validateCreateUserDTO,
    updateUserDTO
} from "../dtos/user.dto.js";

const router = express.Router();

// GET all users (protected)
router.get("/", checkAuth, getUsers);

// CREATE user
router.post(
    "/",
    validateCreateUserDTO,
    createUser
);

// UPDATE user
router.put(
    "/:id",
    validateUserId,
    updateUserDTO,
    updateUser
);

// DELETE user
router.delete(
    "/:id",
    validateUserId,
    deleteUser
);

export default router;
