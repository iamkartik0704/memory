import { Router } from 'express';
import { getMemories, createMemory, likeMemory, unlikeMemory, deleteMemory } from '../controllers/memory';

const router = Router();

router.route('/')
    .get(getMemories)
    .post(createMemory);

router.route('/:id')
    .delete(deleteMemory);

router.route('/:id/like')
    .patch(likeMemory);

router.route('/:id/unlike')
    .patch(unlikeMemory);

export default router;
