import mongoose from 'mongoose';
import Course from '../models/Course.js';

async function listCourses(req, res, next) {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    return res.json(courses);
  } catch (error) {
    return next(error);
  }
}

async function getCourse(req, res, next) {
  try {
    const courseId = req.params.id || req.query.id || req.query.courseId;

    if (!courseId) {
      return res.status(400).json({ message: 'Course id is required' });
    }

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: 'Invalid course id' });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    return res.json(course);
  } catch (error) {
    return next(error);
  }
}

async function createCourse(req, res, next) {
  try {
    const { title, details, semester, enrollStatus } = req.body;

    if (!title || !details || !semester) {
      return res.status(400).json({ message: 'Title, details, and semester are required' });
    }

    const course = await Course.create({
      title,
      details,
      semester,
      enrollStatus: enrollStatus || 'Open',
    });

    return res.status(201).json(course);
  } catch (error) {
    return next(error);
  }
}

async function updateCourse(req, res, next) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid course id' });
    }

    const updatedCourse = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    return res.json(updatedCourse);
  } catch (error) {
    return next(error);
  }
}

async function deleteCourse(req, res, next) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid course id' });
    }

    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    return res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

export {
  listCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
