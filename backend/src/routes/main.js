import users from "./users.js";
import courses from "./courses.js";

export default (app) => {
    app.use("/api/users", users);
    app.use("/api/courses", courses);
}