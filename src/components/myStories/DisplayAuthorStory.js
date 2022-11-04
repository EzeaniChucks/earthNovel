import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlus, FaEye, FaBook, FaTimes, FaRegTimesCircle } from 'react-icons/fa';
import { RiUserFollowFill } from 'react-icons/ri';
import './DisplayAuthorStories.css';
import { useNavigate } from 'react-router-dom';
import { setDeleteBookModal } from '../../features/modal/modalSlice';
import { setDeleteBookObj, deleteBook, getAuthorBooks, resetBook } from '../../features/book/bookSlice';
import { refreshUser } from '../../features/user/userSlice';
import { toast } from 'react-toastify';


const DisplayAuthorStory = () => {
    const { user } = useSelector((store) => store.userSlice)
    const { authorBooks, isloading, error, deleteBookObj, deleteSuccess } = useSelector((store) => store.bookSlice)
    const { deleteBookModal } = useSelector((store) => store.modalSlice)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.stories?.length > 0) {
            dispatch(getAuthorBooks(user.stories))
        }
        dispatch(resetBook())
    }, [user])

    useEffect(() => {
        if (deleteSuccess) {
            dispatch(refreshUser(user?._id))
            toast.success('Book successfully deleted')
        }
    }, [deleteSuccess])

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div>
            {authorBooks.length === 0 && !isloading && !error &&
                <div>
                    <h3>Your could earn thousands of dollars writing for us</h3>
                    <p>Click here to create your first book</p>
                    <button className='btn' onClick={() => navigate('/dashboard/my-stories/create')}>Create Book</button>
                </div>
            }
            {isloading &&
                <div>
                    <h2>Fetching books...</h2>
                </div>
            }
            {error &&
                <div>
                    <h2>Fetch Failed</h2>
                    <h3>Check your network settings and refresh page</h3>
                </div>
            }
            {authorBooks.length > 0 &&
                <div className='author-story-container'>
                    <div>
                        <h2>{authorBooks.length === 1 ?
                            `You have only one book so far.`
                            : `You've written ${authorBooks.length} books so far!`
                        }
                        </h2>
                        <div
                            onClick={() => navigate('/dashboard/my-stories/create')}
                            className='addNewStory'
                        >
                            < FaPlus />
                            <p>Add Story</p>
                        </div>
                    </div>
                    <div className='author-story-mini-container'>
                        {
                            authorBooks.map((story) => {
                                const { _id, image, reads, status, storybody, title, followers, comments, blurb } = story;
                                return (
                                    <div key={_id} className='author-story-card'>
                                        <img src={image ? serverPublic + `${image}` : serverPublic + 'default.png'} alt={title} />
                                        <div className='author-story-div'>
                                            <h3>{title}</h3>
                                            <div>
                                                <span><FaEye />{reads} reads</span>
                                                <span><RiUserFollowFill />{followers.length} follows</span>
                                            </div>
                                            <div>
                                                <FaBook />{storybody.length} chapters written
                                            </div>
                                            <div>
                                                {status && <span>BookStatus: {status}</span>}
                                            </div>
                                            <div>
                                                <button onClick={() => {
                                                    navigate(`/dashboard/my-stories/edit/${_id}`)
                                                }}>Edit book</button>
                                                <button onClick={() => {
                                                    navigate(`/dashboard/my-stories/new-chapter/${_id}`)
                                                }}>Add chapter</button>
                                                <button onClick={() => {
                                                    dispatch(setDeleteBookModal())
                                                    dispatch(setDeleteBookObj({ _id, title, userId: user._id }))
                                                }}>Delete Book?</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {deleteBookModal && <div className='delete-book-modal'>
                        <div>
                            <FaTimes onClick={() => dispatch(setDeleteBookModal())} />
                            <h3>Are you sure you want to delete "{`${deleteBookObj?.title?.toUpperCase()}`}"?</h3>
                            <p>Book's progress will be lost.</p>
                            <p>Deletion is permanent and can't be undone</p>
                            <div>
                                <button onClick={() => {
                                    dispatch(deleteBook(deleteBookObj))
                                    dispatch(setDeleteBookModal())
                                }}>Delete</button>
                                <button onClick={() => dispatch(setDeleteBookModal())}>Cancel</button>
                            </div>
                        </div>
                        <FaRegTimesCircle onClick={() => dispatch(setDeleteBookModal())} />
                    </div>}
                </div>
            }
        </div>
    )
}

export default DisplayAuthorStory