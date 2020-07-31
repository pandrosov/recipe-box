export default validateForm = (values) => {
    let errors = {}

    //title validate
    if( !values.title.value.trim() ) {
        errors.title = "Required"
    }

    //ingridients validate
    if( !values.ingridients.value.trim() ) {
        errors.ingridients = "Required"
    }

    return errors
}