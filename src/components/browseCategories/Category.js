import React from 'react'
import './BrowseCategories.css'

const Category = ({ catName, img }) => {
    return (
        <div className='category'>
            <p style={{ width: '50%' }}>{catName}</p>
            <img src={img} alt={catName} />
        </div>

    )
}

export default Category