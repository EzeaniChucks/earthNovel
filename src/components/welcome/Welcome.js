import React from 'react'
import './Welcome.css';
import {
    setIsAuthModalOpen,
    setIsReadBookModalOpen,
    setIsNavigateAnchor,
} from '../../features/modal/modalSlice';
import SOL from '../../img/sol-monochrome.svg'
import { useSelector, useDispatch } from 'react-redux';
import { FaRegWindowClose } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

const Welcome = () => {
    const { user } = useSelector((store) => store.userSlice)
    const { isReadBookModalOpen } = useSelector((store) => store.modalSlice)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='logo-area'>
            {user && <h3>{`Welcome, ${user?.penname}`}</h3>}
            <div className='the-sun'></div>
            <div><img src={SOL} alt='welcome' /></div>
            {isReadBookModalOpen && !user && <div className='announcement-modal'>
                <FaRegWindowClose onClick={() => dispatch(setIsReadBookModalOpen())} />
                <h2>Earn handsomely in dollars writing for us</h2>
                <h3>
                    <span
                        className='btn'
                        onClick={() => {
                            dispatch(setIsAuthModalOpen())
                            dispatch(setIsReadBookModalOpen())
                            dispatch(setIsNavigateAnchor('dashboard'))
                        }}>log in
                    </span>
                    to start</h3>
            </div>
            }
            <div className='welcome-logo'>
                <h1>
                    <span className='e-span'> e</span>arthNovel
                </h1>
                <div>
                    <button className='btn-read' onClick={() => navigate('/story/all')}>Read</button>
                    <button
                        className='btn-write'
                        onClick={() => {
                            user ? navigate('/dashboard/my-stories')
                                : dispatch(setIsReadBookModalOpen())
                        }}
                    > Write
                    </button>
                </div>
                {isReadBookModalOpen && !user && <div>
                    <FaRegWindowClose onClick={() => dispatch(setIsReadBookModalOpen())} />
                    <h2>Earn handsomely in dollars writing for us</h2>
                    <h3>
                        <span
                            className='btn'
                            onClick={() => {
                                dispatch(setIsAuthModalOpen())
                                dispatch(setIsReadBookModalOpen())
                                dispatch(setIsNavigateAnchor('dashboard'))
                            }}>log in
                        </span>
                        to start</h3>
                </div>
                }
            </div>
        </div>
    )
}

export default Welcome