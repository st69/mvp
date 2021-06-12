import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { editUser } from '../../store/actions';
import { setInputType } from '../../helpers/helpers';
import ListItemUI from '../../components/lists/ListItem';

const ListItem = ({ item }) => {
    const [values, setValues] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        setValues(item)
    }, [item])

    useEffect(() => {
        dispatch(editUser(values))
    }, [dispatch, values])

    const handleChange = useCallback((e) => {
        const { name, value, type } = e.target;
        setValues({
            ...values,
            [name]: type === "number" ? parseInt(value, 10) : value
        })
    }, [values])

    const handleCheckbox = useCallback(() => {
        setValues({
            ...values,
            isActive: !values.isActive
        })
    }, [values])

    const filterData = useMemo(() => Object.keys(values).filter(k => typeof values[k] !== 'object'), [values]);

    const rowItems = useMemo(() => {
        return filterData.map((key, index) => (
            <span key={index} className={`list-item ${key}`}><strong>{key}:</strong>{values[key]}</span>
        ))
    }, [filterData, values])

    const rowEditItems = useMemo(() => {
        return filterData.map((key, index) => (
            <div key={index} className={`list-edit-item  ${key}`}>{setInputType(values[key], key, handleChange, handleCheckbox)}</div>
        ))
    }, [filterData, values, handleChange, handleCheckbox])

    return (
        <ListItemUI>
            <div className='list-row-items'>
                {rowItems}
            </div>
            <div className='list-row-edit-items'>
                {rowEditItems}
            </div>
        </ListItemUI>
    )
}

export default React.memo(ListItem)
