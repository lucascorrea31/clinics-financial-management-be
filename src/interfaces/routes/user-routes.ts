import { Router } from "express";
import { UserController } from "../../infrastructure/controllers/user-controller";

const router = Router();
const userController = new UserController();

// POST /api/users
router.post("/users", (req, res) => {
  userController.create(req, res);
});

export default router;
