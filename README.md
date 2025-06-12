# Dynamic Form Renderer

This React app dynamically renders a form based on a provided JSON schema. It supports multiple field types (text, number, checkbox, select, textarea) and validates required fields.

## Features

- Dynamically renders form from schema
- Validates required fields
- Displays form data as formatted JSON below the form on submit
- Includes `Clear Form` button to reset inputs
- Built with React, using useState and prop based field communication
- The form is responsive

# Notes & Assumptions

All state is managed locally in the FormRenderer component and passed to inputs via props.

- The schema is easily extendable to include more fields.

- Validation currently handles basic required logic.

## Getting Started

```bash
npm install
npm run dev
