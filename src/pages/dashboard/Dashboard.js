import React, { useEffect } from 'react';
import SOL from '../../img/sol-monochrome.svg'
import { useSelector, useDispatch } from 'react-redux';
import './dashboard.css';
import { setClassToggle, setLogoutModal } from '../../features/modal/modalSlice';
import bookLogo from '../../img/earthnovel.png'
import { FaStreetView } from 'react-icons/fa';
import { ImLibrary } from 'react-icons/im';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAutoStories } from 'react-icons/md';
import { AiOutlineDown, AiOutlineOrderedList } from 'react-icons/ai';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { clearUser } from '../../features/user/userSlice';
import { resetBook } from '../../features/book/bookSlice';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const { user } = useSelector((store) => store.userSlice)
    const { classToggle, logoutModal } = useSelector((store) => store.modalSlice)
    const { errorStatusCode } = useSelector((store) => store.bookSlice)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const words = ['overview', 'library', 'payment', 'profile', 'my-stories', 'messages']
        const word = words.find((word) => {
            if (location.pathname.includes(word)) {
                return word
            }
        })
        dispatch(setClassToggle(word))
    }, [])

    if (errorStatusCode === 401) {
        dispatch(resetBook())
        dispatch(clearUser())
        navigate('/')
        setTimeout(() => {
            toast.error('Session expired. Log in again')
        }, 3000)
    }

    return (
        <div className='create-container'>
            <div className='the-dashboard'>
                <img onClick={() => navigate('/')} className='dash-img' src={bookLogo} alt='book logo' />
                <div className='dashboard-tabs'>
                    <h3
                        className={classToggle === 'overview' ? 'shaded-nav main-tabs' : 'main-tabs'}
                        onClick={() => {
                            navigate('/dashboard/overview')
                            dispatch(setClassToggle('overview'))
                        }}><FaStreetView /> Overview
                    </h3>
                    <h3
                        className={classToggle === 'library' ? 'shaded-nav main-tabs' : 'main-tabs'}
                        onClick={() => {
                            navigate('/dashboard/library')
                            dispatch(setClassToggle('library'))
                        }}><ImLibrary /> Library
                    </h3>
                    <h3
                        className={classToggle === 'payment' ? 'shaded-nav main-tabs' : 'main-tabs'}
                        onClick={() => {
                            navigate('/dashboard/payment')
                            dispatch(setClassToggle('payment'))
                        }}><RiMoneyDollarBoxLine /> Revenue
                    </h3>
                    <h3
                        className={classToggle === 'profile' ? 'shaded-nav main-tabs' : 'main-tabs'}
                        onClick={() => {
                            navigate('/dashboard/profile')
                            dispatch(setClassToggle('profile'))
                        }}><CgProfile /> Profile
                    </h3>
                    <h3
                        className={classToggle === 'my-stories' ? 'shaded-nav main-tabs' : 'main-tabs'}
                        onClick={() => {
                            navigate('/dashboard/my-stories')
                            dispatch(setClassToggle('my-stories'))
                        }}><MdOutlineAutoStories /> My stories
                    </h3>
                    <h3
                        className={classToggle === 'messages' ? 'shaded-nav main-tabs' : 'main-tabs'}
                        onClick={() => {
                            navigate('/dashboard/messages')
                            dispatch(setClassToggle('messages'))
                        }}><MdOutlineAutoStories /> Messages</h3>
                </div>
            </div>
            <div className='dashboard-body'>
                <div className='dashboard-nav'>
                    {/* <h3><AiOutlineOrderedList /></h3> */}
                    <h3 onClick={() => navigate('/story/all')} className='btn-press'>Discover</h3>
                    <h3 className='btn-press'>FAQ</h3>
                    <h3 className='btn-press'>Language<AiOutlineDown /></h3>
                    <div className='dashboard-nav-profile'>
                        <button
                            onClick={() => dispatch(setLogoutModal())}
                            className='btn-press'>
                            {user?.firstname}<AiOutlineDown />
                        </button>
                        {logoutModal && <p onClick={() => {
                            dispatch(clearUser())
                            navigate('/')
                        }}>Log Out</p>}
                        <img src={SOL} alt={user?.penname} />
                    </div>
                </div>
                <div className='create-display-area'>
                    <div>
                        <h3
                            className={classToggle === 'overview' ? 'shaded-nav plain-nav' : 'plain-nav'}
                            onClick={() => {
                                navigate('/dashboard/overview')
                                dispatch(setClassToggle('overview'))
                            }}><FaStreetView /> Overview
                        </h3>
                        <h3
                            className={classToggle === 'library' ? 'shaded-nav plain-nav' : 'plain-nav'}
                            onClick={() => {
                                navigate('/dashboard/library')
                                dispatch(setClassToggle('library'))
                            }}><ImLibrary /> Library
                        </h3>
                        <h3
                            className={classToggle === 'payment' ? 'shaded-nav plain-nav' : 'plain-nav'}
                            onClick={() => {
                                navigate('/dashboard/payment')
                                dispatch(setClassToggle('payment'))
                            }}><RiMoneyDollarBoxLine /> Revenue
                        </h3>
                        <h3
                            className={classToggle === 'profile' ? 'shaded-nav plain-nav' : 'plain-nav'}
                            onClick={() => {
                                navigate('/dashboard/profile')
                                dispatch(setClassToggle('profile'))
                            }}><CgProfile /> Profile
                        </h3>
                        <h3
                            className={classToggle === 'my-stories' ? 'shaded-nav plain-nav' : 'plain-nav'}
                            onClick={() => {
                                navigate('/dashboard/my-stories')
                                dispatch(setClassToggle('my-stories'))
                            }}><MdOutlineAutoStories /> Stories
                        </h3>
                        <h3
                            className={classToggle === 'messages' ? 'shaded-nav plain-nav' : 'plain-nav'}
                            onClick={() => {
                                navigate('/dashboard/messages')
                                dispatch(setClassToggle('messages'))
                            }}><MdOutlineAutoStories /> Messages</h3>
                    </div>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default Dashboard;