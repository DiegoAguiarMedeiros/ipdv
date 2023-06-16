import { Router } from "express";
import authenticateController from "./useCases/Authenticate";

import createUserController from "./useCases/User/CreateUser";
import updateUserController from "./useCases/User/UpdateUser";
import getAllUserController from "./useCases/User/GetAllUser";
import getUserController from "./useCases/User/GetUser";

import createRoleController from "./useCases/Role/CreateRole";
import updateRoleController from "./useCases/Role/UpdateRole";
import getAllRoleController from "./useCases/Role/GetAllRole";
import getRoleController from "./useCases/Role/GetRole";

import createCostCenterController from "./useCases/CostCenter/CreateCostCenter";
import updateCostCenterController from "./useCases/CostCenter/UpdateCostCenter";
import getAllCostCenterController from "./useCases/CostCenter/GetAllCostCenter";
import getCostCenterController from "./useCases/CostCenter/GetCostCenter";

import createDepartmentController from "./useCases/Department/CreateDepartment";
import updateDepartmentController from "./useCases/Department/UpdateDepartment";
import getAllDepartmentController from "./useCases/Department/GetAllDepartment";
import getDepartmentController from "./useCases/Department/GetDepartment";

const router = Router();

router.post("/auth", authenticateController.handle);

router.post("/users", createUserController.handle);
router.put("/users/:id", updateUserController.handle);
router.get("/users", getAllUserController.handle);
router.get("/users/:id", getUserController.handle);

router.post("/role", createRoleController.handle);
router.put("/role/:id", updateRoleController.handle);
router.get("/role", getAllRoleController.handle);
router.get("/role/:id", getRoleController.handle);

router.post("/costCenter", createCostCenterController.handle);
router.put("/costCenter/:id", updateCostCenterController.handle);
router.get("/costCenter", getAllCostCenterController.handle);
router.get("/costCenter/:id", getCostCenterController.handle);

router.post("/department", createDepartmentController.handle);
router.put("/department/:id", updateDepartmentController.handle);
router.get("/department", getAllDepartmentController.handle);
router.get("/department/:id", getDepartmentController.handle);

export default router;