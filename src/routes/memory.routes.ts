import { Router } from 'express';
import { getMemories, createMemory } from '../controllers/memory.controller';

const router = Router();

router.route('/')
    .get(getMemories)
    .post(createMemory);

export default router;
