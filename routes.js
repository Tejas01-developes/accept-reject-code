import express from 'express';
import { accept, getreq, reject, request } from './controller.js';

const router=express.Router();


router.post("/req",request);
router.get("/get",getreq);
router.post("/accept",accept)
router.post("/reject",reject)


export default router;