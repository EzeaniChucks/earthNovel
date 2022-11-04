import React, { useState } from 'react'
import { FaEye, FaAddressBook } from 'react-icons/fa';
import { followBook } from '../../features/user/userSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const SingleCatPerPage = ({ data }) => {
    const { user } = useSelector((store) => store.userSlice)
    const { _id, image, reads, storybody, username, tags, title, followers, comments, blurb } = data;

    const [followed, setFollowed] = useState(user?.library?.includes(_id));
    const [followCount, setFollowCount] = useState(followers.length);

    const handleFollow = () => {
        if (user) {
            const bookId = _id;
            const userId = user._id
            dispatch(followBook({ bookId, userId }))
            setFollowed((prev) => !prev);
            if (followed) {
                setFollowCount((prev) => prev - 1)
                toast.success('Book unfollowed and removed from your library')
            } else {
                setFollowCount((prev) => prev + 1)
                toast.success('Book followed and added to your library')
            }
        } else {
            toast.error('You must be logged in to follow book')
        }
    }

    const dispatch = useDispatch();

    const imgLink = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div key={_id}>
            <div className='blurb-card'>
                <Link
                    to={`${_id}`}
                    style={{ color: 'black', textDecoration: 'none' }}
                >
                    <img src={imgLink + image} alt={title} />
                </Link>
                <div className='blurb-card-details'>
                    <div>
                        <span>
                            <Link
                                to={`${_id}`}
                                style={{ color: 'black', textDecoration: 'none' }}
                            >
                                <button className='btn-read-follow' >read</button>
                            </Link>
                            <button
                                className={user?.library?.includes(_id) ? 'following-bkg-color' : 'btn-read-follow'}
                                onClick={handleFollow}
                            >{user?.library?.includes(_id) ? 'following' : 'follow'}</button>
                        </span>
                        <h3>{title}</h3>
                    </div>
                    <span>by {username}</span>
                    <div>
                        <span><FaEye />{reads}</span>
                        <span><FaAddressBook /> {followCount}
                        </span>
                        <span>{comments?.length}</span>
                    </div>
                    <div>{storybody.length} chapters</div>
                    <div>
                        {blurb.join(' ').substring(0, 50)} . . .
                    </div>
                    <div className='cat2-tag-display'>
                        {tags.map((tag, i) => {
                            return (
                                <p key={i} className='cat2-tag'>{tag}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCatPerPage