# Dynamic Form Renderer

- This React app was built with Vite that dynamically renders a form based on the provided JSON schema.
- It supports multiple field types such as text, number, checkbox, textarea. select and validates required fields


---

## Features

- Dynamically renders form from provided schema
- Validates required field
- Displays form data as formatted JSON on submit below the form
- Included a Clear Form button to rest inputs
- Built with Reaact using useState and prop based field communication
- The form was designed to be responsive


---

## Notes and Assumptions

- All state is managed locally in the FormRenderer component and passed to inputs via props.
- The schema is easily extendable to include more field types
- Validation implemented currently handles basic required field logic only.

---

## Installation

Please make sure you have Node.js and npm installed in other to run the app

- npm install
- npm run dev