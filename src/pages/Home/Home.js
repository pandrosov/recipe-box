import React from 'react';
import { useSelector } from 'react-redux'
import Recipe from '../../components/Recipe/Recipe'

const Home = () => {
    const recipes = useSelector(state => state.recipes)

    return (
        <div className="recipes">
            {recipes.map((item, index) => <Recipe recipe={item} key={item.id}/>)}
        </div>
    );
}

export default Home;
