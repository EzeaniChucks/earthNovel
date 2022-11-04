import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLibraryBooks, resetBook } from '../../features/book/bookSlice'
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { clearUser, followBook } from '../../features/user/userSlice';
import '../myStories/DisplayAuthorStories.css';
import './library.css'
import { toast } from 'react-toastify';


const Library = () => {
    const { user } = useSelector((store) => store.userSlice)
    const { libraryBooks, isloading, error, errorStatusCode, success } = useSelector((store) => store.bookSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.library?.length > 0) {
            dispatch(getLibraryBooks(user.library))
        }
    }, [user])

    const unfollowBook = (_id, title) => {
        dispatch(followBook({ bookId: _id, userId: user._id }))
        toast.success(`${title} is successfully removed`)
    }

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    if (errorStatusCode === 401) {
        dispatch(resetBook())
        dispatch(clearUser())
        navigate('/')
        setTimeout(() => {
            toast.error('Session expired. Log in again')
        }, 3000)
    }
    // Below is the functionality for getting most popular story tag.
    //To be used in the future for getting stories similar to stories
    //in user's library
    //     const allTags = libraryBooks?.reduce((total, story) => {
    //         total.push(story.tags)
    //         return total
    //     }, []).flat()
    //     const refurb = function mode(arr) {
    //         return arr.sort((a, b) =>
    //             arr.filter(v => v === a).length
    //             - arr.filter(v => v === b).length
    //         ).pop();
    //     }
    //    const mostPopularTag = refurb(allTags);
    return (
        <div>
            {libraryBooks?.length === 0 && success && !isloading && !error &&
                <div className='library-story-container'>
                    <h3>Your library is empty</h3>
                    <p><span onClick={() => navigate('/story/all')}>Explore</span> a world of new, exciting books</p>
                    <p>Or add books from the list of books you might be interested in below</p>
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
            {libraryBooks.length > 0 &&
                <div className='library-story-container'>
                    <h4>Welcome, {user.penname}</h4>
                    <h2>{libraryBooks.length === 1 ?
                        `You have a book in your library.`
                        : `You have ${libraryBooks.length} books in your library.`
                    }
                        <span onClick={() => {
                            navigate('/story/all')
                        }}>Add More?</span>
                    </h2>
                    <div className='library-story-mini-container'>
                        {
                            libraryBooks.map((story) => {
                                const { _id, image, title } = story;
                                return (
                                    <div key={_id} className='library-story-card'>
                                        <div
                                            onClick={() => unfollowBook(_id, title)}
                                            className='library-story-remove'
                                        ><FaTimes /></div>
                                        <img
                                            onClick={() => {
                                                navigate(`/story/all/${_id}`)
                                            }}
                                            src={image ? serverPublic + `${image}` : serverPublic + 'default.png'} alt={title} />
                                        <h3>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h3>You'll also like....</h3>
                        {/* <h4>**functionality to be built later**</h4> */}
                        {/* {popularTags.map((t) => {
                            return (<p>{t}</p>)
                        })} */}
                    </div>

                </div>
            }
        </div>
    )
}

export default Library