const NumberField = ({label, name, value, onChange, placeholder, error }) => {
    return (
        <div className="number-input-wrapper">
            <label>{label}</label><br /><br />
            <input 
                id={name} 
                type="number" 
                name={name} 
                value={value || ""}
                placeholder={placeholder} 
                onChange={(e) => onChange(name, e.target.value)}
            />
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default NumberField;