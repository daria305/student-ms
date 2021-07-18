import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"

import LoginForm from './components/Login/LoginForm';
import Courses from './components/Pages/Course';
import Timetables from './components/Pages/Timetables';
import Home from './components/Pages/Home';
import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';

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
        <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/timetables" component={Timetables} />
        <Route path="/login" component={LoginForm} />
        </Switch>
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
