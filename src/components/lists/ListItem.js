import React from 'react';

const ListItem = (props) => {
    return (
        <li className='list-row'>
            {props.children}
        </li>
    )
}

export default ListItem
