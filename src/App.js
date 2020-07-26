import React from 'react'
import { Route, Switch } from 'react-router-dom'
import classes from './App.module.scss'

import Navbar from './components/Navbar/Navbar';
import Layout from './components/hoc/Layout';
import RecipeList from './components/RecipeList/RecipeList'
import Home from './pages/Home';
import UpdateRecipe from './pages/UpdateRecipe';
import AddRecipe from './pages/AddRecipe';
import Alert from './components/UI/Alert'


function App() {
  return (
    <div className={classes.main}>
      <aside>
        <Navbar />
      </aside>
      <Layout className={classes.mainContainer}>
        <Alert alert={{text:"Test"}} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={AddRecipe} />
          <Route exact path="/edit/:id" component={UpdateRecipe}/>
        </Switch>
      </Layout>

    </div>


  );
}

export default App;
