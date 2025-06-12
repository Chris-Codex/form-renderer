const TextFields = ({label, name, value, onChange, placeholder, error }) => {
    
    return (
        <div className="textfield-container">
            <label>{label}</label><br /><br />
            <input 
                id={name} 
                type="text" 
                name={name} 
                value={value} 
                placeholder={placeholder}
                onChange={(e) => onChange(name, e.target.value)}
            />
             {error && <div className="error">{error}</div>}
        </div>
    )
}

export default TextFields;