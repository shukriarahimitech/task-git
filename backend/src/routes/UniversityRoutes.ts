import { Router } from "express";
import controller from "";
const router = Router();
router.get("/", controller.getStudents);

module.exports = router;
