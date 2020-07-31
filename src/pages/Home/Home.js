import React from 'react';
import { useSelector } from 'react-redux'
import Recipe from '../../components/Recipe/Recipe'
import classes from './Home.module.scss'

const Home = () => {
    const recipes = useSelector(state => state.recipes.recipes)

    return (
        <div className={classes.recipes}>
            { recipes.length !== 0 ? 
                recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />) 
                                   : 
                (<div className={classes.homeMessage}>
                    <h1 className={classes.homeMessageTitle}>Welcome in our application</h1> 
                    <p>Let's go to creeate recipes</p>
                </div>)
            }
        </div>
    );
}

export default Home;
