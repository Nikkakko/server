import { Router } from 'express';
import {
  createMarkdown,
  deleteMarkdown,
  getAllMarkdown,
} from '../controller/markdownController';

const router = Router();

router.get('/markdown', getAllMarkdown);

router.post('/markdown', createMarkdown);
router.delete('/markdown/:id', deleteMarkdown);

export default router;
