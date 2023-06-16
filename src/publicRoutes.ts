import { Router } from "express";
import authenticateController from "./useCases/Authenticate";
import createUserController from "./useCases/User/CreateUser";
import createRoleController from "./useCases/Role/CreateRole";
import createCostCenterController from "./useCases/CostCenter/CreateCostCenter";
import createDepartmentController from "./useCases/Department/CreateDepartment";
const router = Router();

router.post("/auth", authenticateController.handle);
router.post("/users", createUserController.handle);
router.post("/role", createRoleController.handle);
router.post("/costCenter", createCostCenterController.handle);
router.post("/department", createDepartmentController.handle);

export default router;