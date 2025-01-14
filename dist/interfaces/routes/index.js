"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user-routes"));
const router = (0, express_1.Router)();
// Root
router.get("/", (req, res) => {
    res.send("OK");
});
// Health check route
router.get("/health", (req, res) => {
    res.send("Clinics Financial API is running.");
});
// User routes
router.use(user_routes_1.default);
exports.default = router;
