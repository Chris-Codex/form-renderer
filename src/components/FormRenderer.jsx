import { useState } from "react";
import { FORM_Field_COMPONENTS } from "../utils/formFieldRegistry";

const FormRenderer = ({ schema }) => {
    const [formData, setFormData] = useState(() => {
        const initial = {};
        schema.fields.forEach((field) => {
            initial[field.name] = field.type === "checkbox" ? false : "";
        });

        return initial;
    })

    const [submittedData, setSubmittedData] = useState();
    const [errors, setErrors] = useState({});

    const handleChange = (name, value) => {
        setFormData(prev => ({...prev, [name]: value}));
    }


    const formValidation = () => {
        const currentError = {};

        schema.fields.forEach((field) => {
            const value = formData[field.name];

            const isEmpty = 
                (field.type === "text" && value.trim() === "") ||
                (field.type === "number" && value === "") ||
                (field.type === "select" && value === "") ||
                (field.type === "checkbox" && !value) ||
                (field.type === "textarea" && value.trim() === "")

                if (field.required && isEmpty) {
                    currentError[field.name] = `${field.label} is required`;
                }
        })

        setErrors(currentError);
        return Object.keys(currentError).length === 0;   
    }
      

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValidation()) {
            setSubmittedData(JSON.stringify(formData, null, 2))
        }
    }


    const handleFormReset = () => {
        const resetData = {};

        schema.fields.forEach((field) => {
            resetData[field.name] = field.type === "checkbox" ? false : "";
        })

        setFormData(resetData)
        setErrors({})
        setSubmittedData(null)
    }


    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} noValidate>
                <h2>{schema.title}</h2>
                {
                    schema.fields.map((field) => {
                    
                        const Component = FORM_Field_COMPONENTS[field.type];

                        if (!Component) return null;

                        return (
                            <Component
                                key={field.name}
                                {...field}
                                value={formData[field.name]}
                                onChange={handleChange}
                                error={errors[field.name]}
                            />
                        )
                    })
                }
                <div className="btns-wrapper">
                    <button type="submit" className="submit_btn">Submit</button>
                    <button type="button" className="clear_btn" onClick={handleFormReset}>Clear Form</button>
                </div>
            </form>
            {submittedData && (
                <div className="submitted-data-wrapper">
                    {submittedData}
                </div>
            )}
        </div>
    )
}

export default FormRenderer;