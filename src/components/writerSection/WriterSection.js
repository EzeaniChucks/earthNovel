import React from 'react';
import './writerSection.css';
import bill from '../../images/book-img/billionaire.jpg'
const WriterSection = ({ author }) => {
    return (
        <div className='writer-container'>

            <img src={bill} alt="author-pic" />
            {author && <h3>{author.penname}</h3>}
            {!author ?
                <div className='author-info-missing'>
                    <h3>Oops!! Author information doesn't exist at this time</h3>
                </div>
                : <div className='author-info-cont'>
                    <h2>Author info</h2>
                    <h4>Rank: BestSeller</h4>
                    <h4>Country: Austria</h4>
                    <h4>Followers: {author?.followers?.length}</h4>
                </div>}
        </div>
    )
}

export default WriterSection