import { Router } from "express";
import authenticateController from "./useCases/Authenticate";
import createUserController from "./useCases/User/CreateUser";

import createRoleController from "./useCases/Role/CreateRole";
import updateRoleController from "./useCases/Role/UpdateRole";

import createCostCenterController from "./useCases/CostCenter/CreateCostCenter";

import createDepartmentController from "./useCases/Department/CreateDepartment";
import updateDepartmentController from "./useCases/Department/UpdateDepartment";
const router = Router();

router.post("/auth", authenticateController.handle);
router.post("/users", createUserController.handle);

router.post("/role", createRoleController.handle);
router.put("/role/:id", updateRoleController.handle);

router.post("/costCenter", createCostCenterController.handle);

router.post("/department", createDepartmentController.handle);
router.put("/department/:id", updateDepartmentController.handle);

export default router;