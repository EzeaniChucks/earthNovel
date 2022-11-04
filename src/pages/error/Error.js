import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css';

const Error = () => {
    return (
        <div className='err-container'>
            <p>Oops! Page Doesn't exist</p>
            <Link to='/'>
                <button className='btn'> Go Back to Home</button>
            </Link>
        </div>
    )
}

export default Error