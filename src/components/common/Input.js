import React from 'react';

const Input = ({ type, name, onChange, onBlur, value, checked }) => {
    return (
        <input
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            checked={checked}
        />
    )
}

export default Input
