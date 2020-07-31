import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import classes from './App.module.scss'

import Layout from './components/hoc/Layout';
import Home from './pages/Home/Home';
import UpdateRecipe from './pages/UpdateRecipe/UpdateRecipe';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import Navbar from './components/Navbar/Navbar'
import Alert from './components/UI/Alert'


function App() {
  return (
    <div className={classes.main}>
      <Navbar />
      <Layout className={classes.mainContainer}>
        <Alert alert={{text:"Test"}} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Layout className={"forForm"}>
            <Route exact path="/add" component={AddRecipe} />
            <Route exact path="/edit/:id" component={UpdateRecipe}/>
          </Layout>
          <Redirect to='/' />
        </Switch>
      </Layout>

    </div>


  );
}

export default App;
