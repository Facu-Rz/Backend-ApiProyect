import { Router } from 'express';
import { getTableware, getTablewareById } from '../controllers/tablewareController.js';

const router = Router();

router.get('/', getTableware);
router.get('/:id', getTablewareById);
router.post('/', postTableware);

export default router;