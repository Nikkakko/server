import { Router } from 'express';
import { getAllMarkdown } from '../controller/markdownController';

const router = Router();

router.get('/markdown', getAllMarkdown);

export default router;
