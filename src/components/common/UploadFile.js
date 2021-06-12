import React from 'react';
import Input from './Input';

const UploadFile = ({ onChange }) => {
    return (
        <Input type='file' name='file' onChange={onChange} />
    )
}

export default UploadFile
