const CheckedField = ({label, name, value, onChange, error}) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <label>
                <input 
                    id={name} 
                    type="checkbox" 
                    name={name} 
                    checked={value}
                    onChange={(e) => onChange(name, e.target.value)}
                />
                {label}
            </label>
            {error && <div className="check-error">{error}</div>}
        </div>
        
    )
}

export default CheckedField;