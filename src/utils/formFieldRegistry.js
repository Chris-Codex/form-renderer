import CheckedField from "../components/formFields/CheckedField";
import NumberField from "../components/formFields/NumberField";
import SelectField from "../components/formFields/SelectField";
import TextAreaField from "../components/formFields/TextAreaField";
import TextFields from "../components/formFields/TextFields";



export const FORM_Field_COMPONENTS = {
    text: TextFields,
    select: SelectField,
    checkbox: CheckedField,
    number: NumberField,
    textarea: TextAreaField
}