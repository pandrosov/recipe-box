import React from 'react';
import { useSelector } from 'react-redux'
import Recipe from '../components/Recipe/Recipe'

const Home = () => {
    const recipes = useSelector(state => state.recipes.recipes)

    return (
        <div className="">
            {recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id}/>)}
        </div>
    );
}

export default Home;
