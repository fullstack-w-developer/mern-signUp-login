import React from 'react';
import "../App.css"
type propsTyps = {
    nameLabel: String
    type: string
    name: string
    value: string | number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

}
const Input = ({ nameLabel, name, type, value, onChange }: propsTyps) => {
    return (
        <div className="container_input">
            <p className="text_label">{nameLabel}</p>
            <input value={value} name={name} onChange={onChange} type={type} className="input" />
        </div>
    );
}

export default Input;
