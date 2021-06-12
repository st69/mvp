import React from 'react';
import ListItem from '../../containers/lists/ListItem';

const List = ({ data }) => {
    return (

        <ul>
            {data.map((item, index) => (
                <ListItem
                    key={`${item.id}${index}`}
                    item={item}
                />
            ))}
        </ul>
    )
}

export default React.memo(List)
