import { Router } from 'express';
import { viaCepController } from "../controllers";

const router = Router();

router.post('/:id', viaCepController.getCep);

export default router;
