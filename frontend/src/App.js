import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"


import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';
import AppSwitch from './components/Switch';


function App() {
  const student1 = {
    email: "student@mail.com",
    password: "student"
  }

  const [user, setUser] = useState({name: "", surname: "", email: ""});
  const [error, setError] = useState("");

const Login = details => {
  if (details.email === student1.email && details.password === student1.password) {
    setUser({name: details.name, surname: details.surname, email: details.email})
  } else {
    setError("Email or password incorrect")
  }
}

const Logout = () => {
  setUser({name: "", email: ""})
}

// react router
// login page
// registration page -> zostaw na koniec 
// panel (top bar)

const useStyles = makeStyles({});

  return (
    <Router basename="course-ms">
        <div className="App">
        <Nav />
        <AppSwitch />

      {/* {(user.email !== "") ? (
        <p>Hello</p>
        // <UserPage Logout={Logout} user={user}/>
      ) : (
        <LoginForm Login={Login} error={error} />
      )} */}
      <Footer />
      </div>
    </Router>

  );
}

export default App;
