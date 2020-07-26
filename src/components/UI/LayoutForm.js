import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import Modal from './Modal'

const LayoutForm = (props) => {
    const [visible, setVisible] = useState(false)

    const routeChange = () => {
        setVisible(true)
    }

    return (
        <div>
            <Modal visible={visible} title={"changes will not be saved"} >
                <Button>OK</Button>
                <Button onClick={() => setVisible(false)}>Cancel</Button>
            </Modal>
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
                    onClick={routeChange}
                >
                    Cancel
                </Button>
            </form>
        </div>
    );
}

export default LayoutForm;
