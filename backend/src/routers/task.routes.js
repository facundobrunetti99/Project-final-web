import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router= Router()

router.get('/tasks', authRequired)
router.get('/tasks/:id', authRequired)
router.post('/tasks', authRequired)
router.delete('/tasks/:id', authRequired)
router.put('/tasks/:put', authRequired)

export default router;