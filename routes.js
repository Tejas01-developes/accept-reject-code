import express from 'express';
import { request } from './controller.js';

const router=express.Router();


router.post("/req",request);

export default router;