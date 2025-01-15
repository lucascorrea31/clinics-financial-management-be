import { Router } from "express";
import userRoutes from "./user-routes";

const router = Router();

// Root
router.get("/", (req, res) => {
  res.send("OK");
});

// Health check route
router.get("/health", (req, res) => {
  res.send("Clinics Financial API is running.");
});

// User routes
router.use(userRoutes);

export default router;
