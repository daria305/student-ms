import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from 'react-router-dom'

import Courses from './Pages/Course';
import Timetables from './Pages/Timetables';
import Home from './Pages/Home';
import LoginForm from './Login/LoginForm';
import { AppContext } from "../AppContext";

const useStyles = makeStyles((theme) => ({
    rootMain: {
        flexGrow: 1,
    },
}));

const AppSwitch = () => {
    const { token } = useContext(AppContext);

    const classes = useStyles();
    return (
        <main className={classes.rootMain}>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" render={()=>(token ? <Home /> : <LoginForm /> )} />
                <Route path="/courses" component={Courses} />
                <Route path="/timetables" component={Timetables} />
                <Route path="/login" component={LoginForm} />
            </Switch>
        </main>
    );
};

export default AppSwitch