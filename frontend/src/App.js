import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'


import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';
import AppSwitch from './components/Switch';
import { Context } from './AppContext';

import Paper from "@material-ui/core/Paper";

import { Box } from '@material-ui/core';


function App() {
  return (
    <Context>
      <Router basename="course-ms">
        <Box height="100vh">
          <div className="App" >
            <Paper>
              <Nav/>
              <AppSwitch />
              <Footer />
            </Paper>
        </div>
        </Box>
      </Router>
    </Context>


  );
}

export default App;
