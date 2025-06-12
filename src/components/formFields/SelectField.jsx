const SelectField = ({label, name, value, onChange, options, error }) => {
    return (
        <div className="select-card">
            <label className="label">{label}</label><br /><br />
                <select 
                    id={name} 
                    type="text" 
                    name={name} 
                    value={value === "" ? "" : value} 
                    onChange={(e) => onChange(name, e.target.value)}
                >
                    <option value="" className="option">-- Select --</option>
                    {options.map((opt) => {
                        return (
                            <option key={opt} value={opt}>{opt}</option>
                        )
                    })}
                </select>
                {error && <div className="error">{error}</div>}
            </div>
    )
}

export default SelectField;