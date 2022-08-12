import {Field} from "formik";
import {Component} from "react";

class SelectInput extends Component {
    render() {
        const { name, children } = this.props
        return (
            <Field name={name} as="textarea" className="textarea-input">
                { children }
            </Field>
        )
    }
}

export default SelectInput