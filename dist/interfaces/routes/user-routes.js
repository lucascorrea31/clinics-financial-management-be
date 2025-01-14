"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const router = (0, express_1.Router)();
const userController = new user_controller_1.UserController();
// POST /api/users
router.post("/users", (req, res) => {
    userController.create(req, res);
});
exports.default = router;
