import React from 'react'
import { useState, useContext } from 'react' 

import { Button, CircularProgress, TextField, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {AppContext} from '../../AppContext'
import { Users } from '../../api/user';


function LoginForm() {
    const { setNewToken, setNewProfile } = useContext(AppContext);
    const [error, setError] = useState("");
    const [details, setDetails] = useState({name: "", surname: "", email:"", password: ""})
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
  

    const useStyles = makeStyles((theme) => ({
        smallPadding: {
            margin: "5px",
        },

        buttonMargin: {
            marginBottom: "25vh",
        }
    }));

    const classes = useStyles();

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setError("");
        const values = {
            "email": details.email,
            "password": details.password
        }
        if (!loading) setLoading(() => true);
        await onSubmit(values)
        setLoading(() => false);
        setIsSubmitting(false)
    }

    const onSubmit = async (values) => {
        const resp = await Users.login(values);

        if (!resp || resp.error) {
            if (resp?.statusCode === 401) {
                setError("Invalid credentials");
            } else {
                setError("Something went wrong");
            }
        } else {
            setNewProfile(resp.profile);
            setNewToken(resp.token);
        }
    }


    return (
        <form onSubmit={submitHandler} className="form-inner">
            <Box  p={5}>
                <Typography variant="h3" color="textSecondary">
                The Course Managment System
                </Typography>
            </Box>
            
            <Typography variant="subtitle1" color="info.main">
            To login to the system please provide your credentials.
            </Typography>
            <p></p>

            <div className="credentials">
                <div className="form-group">
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <TextField className={classes.smallPadding} variant="outlined" type="email" label="Email" id ="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <TextField  className={classes.smallPadding} variant="outlined" type="password" label="Password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
            </div>
            
            <Button variant="outlined" color="primary" type="submit" disabled={isSubmitting} className={classes.buttonMargin}> Login</Button>
            {loading && <CircularProgress size={24} />}

        </form>
    )
}

export default LoginForm
