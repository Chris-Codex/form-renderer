export const schema = {
    "title": "User Registration",
    "fields": [
        { "label": "Name", "type": "text", "name": "name", "placeholder": "Enter your Fullname", "required": true },
        { "label": "Age", "type": "number", "name": "age", "placeholder": "Enter your Age", "required": true },
        { "label": "Subscribe", "type": "checkbox", "name": "subscribe", "required": true },
        {
            "label": "Gender",
            "type": "select",
            "name": "gender",
            "options": ["Male", "Female", "Other"],
            required: true
        },
        { "label": "Comments", "type": "textarea", "name": "bio", "placeholder": "Enter your comments", "required": false }
    ]
}