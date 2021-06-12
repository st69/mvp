import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/common/Input';

import ListUI from './../../components/lists/List';
import { getUsers } from './../../store/actions';

const Home = () => {
    const users = useSelector(state => state.Users.users);
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

    return (
        <Fragment>
            <Input type='file' onChange={upload} />
            <ListUI data={users} />
        </Fragment>
    )
}

export default Home
