import { Router } from "express";
import { CreateEntrega } from "../../../application/entregas/CreateEntregas";

const router = Router();

router.post("/", CreateEntrega);

export default router;