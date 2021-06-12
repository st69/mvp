import React from 'react';

const Textarea = ({ onChange, name, value }) => {
    return (
        <textarea
            onChange={onChange}
            name={name}
            value={value}
        ></textarea>
    )
}

export default Textarea
