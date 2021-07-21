export class Users {
    static apiUrl = "https://student-man-system.herokuapp.com/api/users"

    static  async getUsers(token) {
        try {
            const response = await fetch(Users.apiUrl, {
                method: "GET",
                mode: "cors",
                headers: {
                    'x-access-token': token
                },
            });
            return await response.json();
        } catch (error) {
            Users.handleError(error);
        }
    }

    static async login(body) {
        try {
            const response = await fetch(Users.apiUrl + "/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const loginBody = await response.json();

            if (!response.ok) return { error: loginBody.error || "Unauthorized", statusCode: response.status };
            return { token: loginBody.accessToken, profile: loginBody.data };
        } catch (error) {
            Users.handleError(error);
        }
    }


    static handleError(error) {
        console.log(error);
    }


}