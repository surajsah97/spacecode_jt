import { Link } from '@mui/material';
import React from 'react'
import Login from './components/Login'
import { Route,Switch } from 'react-router-dom'
import Signup from './components/signup';
import Home from './components/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Switch>
  <Route exact path="/" component={()=><Home/>} />

  <Route exact path="/login">
    <Login/>
  </Route>
  <Route exact path="/signup">
    <Signup/>
  </Route>

</Switch>

       </div>
  )
}
export default App;