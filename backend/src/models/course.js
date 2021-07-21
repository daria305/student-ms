import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            trim: true,
        },

        lecturer: {
            type: String,
            require: true,
            trim: true,
        },

        timeStart: {
            type: Date,
            require: true,
        },

        timeEnd: {
            type: Date,
            require: true,
        },


        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            }
        ]
    }, 
    { timestamps: true },
)

const CourseModel = mongoose.model("course", courseSchema);
export default CourseModel;