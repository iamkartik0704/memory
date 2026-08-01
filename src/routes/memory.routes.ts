import { Router } from 'express';
import { getMemories, createMemory, likeMemory, unlikeMemory, deleteMemory } from '../controllers/memory';
import { authenticate } from '../middleware/authenticate';
import { authorize } from '../middleware/authorize';
import { AdminRole } from '../types';

const router = Router();

router.route('/')
    .get(getMemories)
    .post(createMemory);

router.route('/:id')
    .delete(authenticate, authorize(AdminRole.SuperAdmin, AdminRole.Admin), deleteMemory);

router.route('/:id/like')
    .patch(likeMemory);

router.route('/:id/unlike')
    .patch(unlikeMemory);

export default router;
