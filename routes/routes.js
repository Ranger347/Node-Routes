import express from 'express';
import { getIndex, getPage1, getPage2 } from '../controllers/controls.js';

const router = express.Router();

router.get('/', getIndex);
router.get('/page1', getPage1); 
router.get('/page2', getPage2); 

export default router;