import { AppContext } from "../../AppContext";
import { useContext } from 'react' 
import { TextField, Typography, Box } from "@material-ui/core";
import { Users } from "../../api/user.js";

function Profile() {
    const { profile, token } = useContext(AppContext);
    // const apiUser = new Users()
    const courses = Users.getUserCourses(token, profile.userId);

    console.log(courses)
    const elemChosenCourses = []
    for (const [index, value] of courses) {
        elemChosenCourses.push(
            <li className="courseItem">{value}</li>
        )
    }
    return (
        <div>
            <Box p={5}>
                <Typography variant="h4" color="textSecondary">
                    Hello {profile.name}, {profile.surname}
                </Typography>
            </Box>

            <Typography variant="subtitle1" color="info.main">
               You are enrolled to the following courses:
            </Typography>

            <ul className="courses">
                {elemChosenCourses}
            </ul>

            
        </div>
    );
}

export default Profile;
