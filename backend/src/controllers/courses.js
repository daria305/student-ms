import CourseModel from "../models/course.js";

export async function getCourses(req, res, next) {
    const courses = await CourseModel.find({});
    res.status(200).json({
        data: courses,
    });
}

export async function getCourse(req, res, next) {
    try {
        const courseId = req.params.courseId;
        const courses = await CourseModel.findById(courseId);
        if (!courses) return next(new Error("Course does not exist"));
        res.status(200).json({
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteCourse(req, res, next) {
    try {
        const courseId = req.params.courseId;
        await CourseModel.findByIdAndDelete(courseId);
        res.status(200).json({
            data: null,
            message: "Course has been deleted",
        });
    } catch (error) {
        next(error);
    }
}

export async function addCourse(req, res, next) {
    try {
        const { title, lecturer, timeStart, timeEnd } = req.body;

        const objTimeStart = JSON.parse(timeStart);
        const startDate = new Date(objTimeStart.date_added);

        const objTimeEnd = JSON.parse(timeEnd);
        const endDate = new Date(objTimeEnd.date_added);

        const newCourse = new CourseModel({ title, lecturer, timeStart: startDate, timeEnd: endDate });
        await newCourse.save();
        res.json({
            data: newCourse,
        });
    } catch (error) {
        next(error);
    }
}

export async function getUserCourses(req, res, next) {
    try {
        const userId = req.params.userId;
        const courses = await CourseModel.find({ students: { $in: userId } }).populate("students", "_id");
        res.json({
            data: courses,
        });
    } catch (error) {
        next(error);
    }
}


export async function enrollUsers(req, res, next) {
    try {
        
        const { userIds } = req.body;

        const courseId = req.params.courseId;
        const courses = await CourseModel.findById(courseId);
        const prevStudents = courses.students
        const newCourse = await CourseModel.findOneAndUpdate(
            {_id: req.params.courseId}, {$set: {students: [...prevStudents, ...userIds]}}
        );
        await newCourse.save()
        res.status(200);
        
    } catch (error) {
        next(error);
    }
}
