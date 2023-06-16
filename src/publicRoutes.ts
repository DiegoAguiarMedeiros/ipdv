import { Router } from "express";
import authenticateController from "./useCases/Authenticate";
import createUserController from "./useCases/User/CreateUser";
import createRoleController from "./useCases/Role/CreateRole";
const router = Router();

router.post("/auth", authenticateController.handle);
router.post("/users", createUserController.handle);
router.post("/role", createRoleController.handle);

export default router;