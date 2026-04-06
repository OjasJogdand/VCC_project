import express from 'express';
import { authenticate } from '../middleware/auth.js';
import {
  listCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController.js';

const router = express.Router();

router.use(authenticate);
router.get('/courses', listCourses);
router.get('/course/:id?', getCourse);
router.post('/course', createCourse);
router.put('/course/:id', updateCourse);
router.delete('/course/:id', deleteCourse);

export default router;
