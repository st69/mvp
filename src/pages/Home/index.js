import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import UploadFile from '../../containers/common/UploadFile';

import ListUI from './../../components/lists/List';
import { getUsers } from './../../store/actions';

const Home = () => {
    const users = useSelector(state => state.Users.users);

    return (
        <Fragment>
            <UploadFile getUsers={getUsers} />
            <ListUI data={users} />
        </Fragment>
    )
}

export default Home
