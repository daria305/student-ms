import express from "express";
import { getCourses, getCourse, addCourse, deleteCourse, enrollUsers} from "../controllers/courses.js"

const router = express.Router();

router
    .get('/', getCourses)
    .get('/:courseId', getCourse)

    .post('/', addCourse)

    .patch('/:courseId', enrollUsers)

    .delete('/:courseId', deleteCourse)


export default router