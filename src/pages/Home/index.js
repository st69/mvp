import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import data from './../../helpers/data.json';

import ListUI from './../../components/lists/List';
import { getUsers } from './../../store/actions';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const users = useSelector(state => state.Users.users);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(data))
    }, [dispatch])

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, [])

    return (
        <Fragment>
            {loading ?
                <div className='loader'>Loading...</div>
                :
                <ListUI data={users} />
            }
        </Fragment>
    )
}

export default Home
