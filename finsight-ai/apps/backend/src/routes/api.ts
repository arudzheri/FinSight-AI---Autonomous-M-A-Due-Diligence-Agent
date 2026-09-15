import { Router } from 'express';
import { analyzeCompany } from '../controllers/analysisController';

const router = Router();

router.post('/analyze', analyzeCompany);

export default router;
