import React from 'react'

import './collection-item.styles.scss'


const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`//string interpolation - `` are backticks -- template literals .. the ${expression} where expression is the placeholder ..placeholder can be a function
                //the good of template  literals is you can do multi-line strings, expression interpolation, nesting templates, tagged templates
            }}

        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>

        </div>



    </div>


);

export default CollectionItem;
