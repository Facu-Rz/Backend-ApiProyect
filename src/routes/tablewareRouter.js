import { Router } from 'express';
import { getTableware, getTablewareById, postTableware } from '../controllers/tablewareController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', getTableware);
router.get('/:id', getTablewareById);
router.post('/', verifyToken, postTableware);

export default router;