import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa'
import { setIsAuthModalOpen, setClassToggle } from '../../features/modal/modalSlice';
import './nav.css';

const Nav = () => {
    const { user } = useSelector((store) => store.userSlice)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className='nav'>
            <div className='nav-earth-logo'>
                <FaGlobe />
                <h2>earthNovel</h2>
            </div>
            <div className='nav-earth-links'>
                <NavLink to='/' className={({ isActive }) => {
                return isActive ? 'nav-bar active' : 'nav-bar'
            }}>
                <span>Home</span>
            </NavLink>
            <NavLink to='/story/all' className={({ isActive }) => {
                return isActive ? 'nav-bar active' : 'nav-bar'
            }}>
                <span>Explore</span>
            </NavLink>
            <li
                onClick={() => {
                    if (user) {
                        navigate('/dashboard/library')
                        dispatch(setClassToggle('library'))
                    } else {
                        dispatch(setIsAuthModalOpen())
                    }
                }}
                className={'nav-bar'}
            >
                <span>Library</span>
            </li>
            <li
                onClick={() => {
                    if (user) {
                        navigate('/dashboard/my-stories')
                        dispatch(setClassToggle('my-stories'))
                    } else {
                        dispatch(setIsAuthModalOpen())
                    }
                }}
                className={'nav-bar'}
            >
                <span>Dashboard</span>
            </li>
            <NavLink to='/about' className={({ isActive }) => {
                return isActive ? 'nav-bar active' : 'nav-bar'
            }}>
                <span>About</span>
            </NavLink>
            </div>

        </div>

    )
}

export default Nav;