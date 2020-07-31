import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'

const Form = ({
    controls,
    callback,
    children, 
    modalVisible,
    validateFunc,
    onChange
}) => {
    const [values, setValues] = useState(controls)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting) {
            if(Object.keys(errors).length === 0) {
                callback()  
                setIsSubmitting(false)
            } else {
                setIsSubmitting(false)
            }
        }
    }, [errors, isSubmitting])

    const onSubmitHandler = e => {
        e.preventDefault()
        setIsSubmitting(true)
        const validationErros = validateFunc(values)
        setErrors(validationErros)
    }

    const onChangeHandler = e => {
        const controlName = e.target.name;
        const value = e.target.value;

        const formControls = { ...values };
        const control = { ...formControls[controlName] };
        control.value = value
        formControls[controlName] = control

        setValues(formControls)
    }

    const onBlurHandler = e => {

    }

    const renderControls = () => {
        return Object.keys(values).map((controlName, index) => {
            const control = { ...values[controlName] }
            return (
                <Input
                    type={control.type}
                    value={control.value}
                />
            )
        })
    }

    const regularButtons = (children || (
        <>
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
        </>
    )
    )

    const renderForm = (
        <FormStyle onSubmit={onSubmitHandler}>
            {renderControls}
        </FormStyle>
    )

    return renderForm
}