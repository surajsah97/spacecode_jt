import { Link } from '@mui/material';
import React from 'react'
import Login from './components/Login'
import { Route,Switch } from 'react-router-dom'
import Signup from './components/signup';
import Home from './components/home';

const App = () => {
  return (
    <div>
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