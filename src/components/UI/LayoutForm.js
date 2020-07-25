import React from 'react';
import Input from './../Input/Input';
import Button from '../Button/Button';

const LayoutForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <Input
                    type="text"
                    name="title"
                    onChange={props.onChange}
                    value={props.title}
                />
                <Input
                    type="textarea"
                    name="ingredients"
                    onChange={props.onChange}
                    value={props.ingredients}
                />
                <Button
                    type="submit"
                >
                    Submit
                </Button>
                <Button 
                    type="button"
                >
                    Cancel
                </Button>
            </form>
        </div>
    );
}

export default LayoutForm;
