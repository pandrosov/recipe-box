import React from 'react';

const UpdateRecipe = (props) => {
    return (
        <div>
            <h1>Welcome to updating page id = {props.match.params.id} </h1>
        </div>
    );
}

export default UpdateRecipe;
