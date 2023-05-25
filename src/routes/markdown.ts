import { Router } from 'express';
import {
  createMarkdown,
  deleteMarkdown,
  getAllMarkdown,
  updateMarkdown,
} from '../controller/markdownController';

const router = Router();

router.get('/markdown', getAllMarkdown);

router.post('/markdown', createMarkdown);
router.delete('/markdown/:id', deleteMarkdown);
router.put('/markdown/:id', updateMarkdown);

export default router;
