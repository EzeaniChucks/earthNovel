import React, { useState } from 'react'
import './myStories.css'
import { Outlet } from 'react-router-dom';

const MyStories = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default MyStories;