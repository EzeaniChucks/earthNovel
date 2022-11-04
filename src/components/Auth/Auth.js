import React, { useState, useEffect } from 'react';
import './Auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr'
import { setIsAuthModalOpen, setIsNavigateAnchor } from '../../features/modal/modalSlice';
import { loginUser, registerUser } from '../../features/user/userSlice';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const defaultData = {
    penname: '',
    password: '',
    confirmpassword: '',
    firstname: '',
    lastname: '',
    email: '',
}

const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthModalOpen, isNavigateAnchor } = useSelector((state) => state.modalSlice)
    const { isError, user, isLoading } = useSelector((state) => state.userSlice)
    const [data, setData] = useState(defaultData);
    const [isRegister, setIsRegister] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value })
    }


    useEffect(() => {
        if (user && isNavigateAnchor) {
            if (isNavigateAnchor === 'dashboard') {
                return navigate('/dashboard/my-stories')
            } else if (isNavigateAnchor === 'explore') {
                return navigate('/story/all')
            } else if (isNavigateAnchor === 'writer-profile') {
                return navigate('dashboard/writer-profile')
            }
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            confirmpassword,
            penname,
            firstname,
            lastname,
            email,
            password
        } = data;
        if (!isRegister) {
            if (!email || !password) {
                return toast.error('fill out all fields')
            }

            const newdata = { email, password }
            dispatch(loginUser(newdata));
            setData(defaultData);
            dispatch(setIsAuthModalOpen());
        }

        if (isRegister && (confirmpassword === password)) {
            if (!email || !password || !penname || !firstname || !lastname) {
                return toast.error('fill out all fields')
            }
            const { confirmpassword, ...otherdata } = data;
            dispatch(registerUser(otherdata));
            setData(defaultData);
            dispatch(setIsAuthModalOpen());
        } else if (isRegister && (confirmpassword !== password)) {
            return toast.error(`password doesn't match`);
        }
    }

    return (
        <div className={isAuthModalOpen ? 'auth-container' : 'auth-disappear'}>
            {isAuthModalOpen &&
                <div className='auth-display-holder'>
                    <div className='auth-display'>
                        <h1>{isRegister ? 'Register' : 'Login'}</h1>
                        {isError && <p className='error-msg'>{isError.message}</p>}
                        <form className={isRegister ? 'auth-display-form' : 'auth-display-form-alt'}>
                            {isRegister && <label htmlFor='penname'>
                                PenName:
                                <input
                                    onChange={handleChange}
                                    id='penname'
                                    type='text'
                                    placeholder='penname'
                                    value={data.penname}
                                    name='penname'
                                />
                            </label>}
                            {isRegister && <label htmlFor='firstname'>
                                FirstName:
                                <input
                                    onChange={handleChange}
                                    id='firstname'
                                    type='text'
                                    placeholder='firstname'
                                    value={data.firstname}
                                    name='firstname'
                                    required
                                />
                            </label>}
                            {isRegister && <label htmlFor='lastname'>
                                LastName:
                                <input
                                    onChange={handleChange}
                                    id='penname'
                                    type='text'
                                    placeholder='lastname'
                                    value={data.lastname}
                                    name='lastname'
                                />
                            </label>}
                            <label htmlFor='email'>
                                Email:
                                <input
                                    onChange={handleChange}
                                    id='penname'
                                    type='email'
                                    placeholder='email'
                                    value={data.email}
                                    name='email'
                                />
                            </label>
                            <label htmlFor='password'>
                                Password:
                                <input
                                    onChange={handleChange}
                                    id='penname'
                                    type='password'
                                    placeholder='password'
                                    value={data.password}
                                    name='password'
                                />
                            </label>

                            {isRegister && <label htmlFor='password'>
                                Confirm Password:
                                <input
                                    onChange={handleChange}
                                    id='password'
                                    type='password'
                                    placeholder='confirm password'
                                    value={data.confirmpassword}
                                    name='confirmpassword'
                                />
                            </label>}
                            <div className='btn-container'>
                                <button className='btn submit-btn' onClick={handleSubmit} type='submit' disabled={isLoading}>
                                    {isLoading ? 'Loading...' : 'Submit'}
                                </button>
                            </div>
                        </form>

                        {!isRegister ?
                            <p>Don't have an account?
                                <span onClick={() => setIsRegister(!isRegister)}> Register</span>
                            </p>
                            : <p>Already have an account?
                                <span onClick={() => setIsRegister(!isRegister)}> Login</span>
                            </p>
                        }
                    </div>
                </div>}
            {isAuthModalOpen && <button onClick={() => dispatch(setIsAuthModalOpen())}><GrClose /></button>}
        </div>
    )
}

export default Auth