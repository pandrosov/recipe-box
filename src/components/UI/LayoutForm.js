import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Modal from './Modal'

const LayoutForm = (props) => {
    const [visible, setVisible] = useState(false)

    const routeChange = () => {
        setVisible(true)
    }

    return (
        <>
            <Modal visible={visible} title={"changes will not be saved"} >
                <Button href={'/'}>OK</Button>
                <Button onClick={() => setVisible(false)}>Cancel</Button>
            </Modal>
            <form onSubmit={props.onSubmit}>
                <Input
                    type="text"
                    name="title"
                    onChange={props.onChange}
                    value={props.title}
                    label={"title"}
                />
                <Input
                    type="textarea"
                    name="ingredients"
                    onChange={props.onChange}
                    value={props.ingredients}
                    label={"ingridients"}
                />
                <div>
                    <Button
                        type="submit"
                    >
                        Submit
                </Button>
                    <Button
                        type="button"
                        onClick={routeChange}
                        primary
                    >
                        Cancel
                </Button>
                </div>

            </form>
        </>
    );
}

export default LayoutForm;
