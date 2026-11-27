import { Router } from 'express';
import { getTableware, getTablewareById, postTableware, deleteTablewareById } from '../controllers/tablewareController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', getTableware);
router.get('/:id', getTablewareById);
router.post('/', verifyToken, postTableware);
router.delete('/:id', verifyToken, deleteTablewareById);

export default router;