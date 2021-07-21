import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


function Nav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <nav className={classes.footer}>
            <Paper className={classes.root}>
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                    <Tab label="Profile" to="/profile" component={Link} />
                    <Tab label="Courses" to="/courses" component={Link} />
                    <Tab label="Timetables" to="/timetables" component={Link} />
                </Tabs>
            </Paper>
        </nav>
    );
}

export default Nav;
