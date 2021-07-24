export class Courses {
    // static apiUrl = "https://student-man-system.herokuapp.com/api/courses"
    static apiUrl = "http://localhost:4000/api/courses"

    static  async getCourses(token) {
        try {
            const response = await fetch(Courses.apiUrl, {
                method: "GET",
                mode: "cors",
                headers: {
                    'x-access-token': token
                },
            });
            return await response.json();
        } catch (error) {
            Courses.handleError(error);
        }
    }

    static  async addCourse(token, body) {
        try {
            const response = await fetch(Courses.apiUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    'x-access-token': token
                },
                body: body
            });
            return await response.json();
        } catch (error) {
            Courses.handleError(error);
        }
    }


    static handleError(error) {
        console.log(error);
    }


}