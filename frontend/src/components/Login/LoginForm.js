import React from 'react'
import { useState } from 'react' 

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({name: "", surname: "", email:"", password: ""})

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }
    return (
        <form onSubmit={submitHandler} className="form-inner">
            <h2>Login to the Student Course Choice</h2>
            <p>Please provide your name and credentials</p>
            <div className="form-inner-name">
                <div className="form-group">
                    <label htmlFor="name" className="form-group">Name: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="form-group">Surname: </label>
                    <input type="text" name="surname" id="surname" onChange={e => setDetails({...details, surname: e.target.value})} value={details.surname} />
                </div>
            </div>
            <div className="credentials">
                <div className="form-group">
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id ="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
            </div>
            
            <input type="submit" value="LOGIN" />

        </form>
    )
}

export default LoginForm
