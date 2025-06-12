import TextField from "../src/components/formFields/TextFields";
import SelectedField from "../src/components/formFields/SelectField";
import CheckField from "../src/components/formFields/CheckedField";
import NumberField from "../src/components/formFields/NumberField";
import TextAreasField from "../src/components/formFields/TextAreaField";


export const FORM_Field_COMPONENTS = {
    text: TextField,
    select: SelectedField,
    checkbox: CheckField,
    number: NumberField,
    textarea: TextAreasField
}