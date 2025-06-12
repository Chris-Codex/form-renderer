const TextAreaField = ({ name, value, label, placeholder, error, onChange}) => {
    return (
        <div className="text-area-wrapper">
            <label>{label}</label><br /><br />
            <textarea
                id={name}
                name={name}
                value={value || ""}
                onChange={(e) => onChange(name, e.target.value)}
                placeholder={placeholder}
            />
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default TextAreaField