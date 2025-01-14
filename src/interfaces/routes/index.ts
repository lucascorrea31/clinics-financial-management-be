import { Router } from "express";
import userRoutes from "./user-routes";

const router = Router();

// Health check route
router.get("/health", (req, res) => {
	res.send("OK");
});

// User routes
router.use(userRoutes);

export default router;
