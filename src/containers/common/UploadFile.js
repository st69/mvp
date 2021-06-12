import React from 'react';
import { useDispatch } from 'react-redux';
import UploadFileUI from './../../components/common/UploadFile';

const UploadFile = ({ getUsers }) => {
    const dispatch = useDispatch()

    const upload = (e) => {
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            const f = JSON.parse(text)
            dispatch(getUsers(f))
        };
        reader.readAsText(e.target.files[0])
    }


    return <UploadFileUI onChange={upload} />
}

export default UploadFile
