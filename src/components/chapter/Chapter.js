import React from 'react'
import { useDispatch } from 'react-redux'
import './chapter.css'

const Chapter = ({ storybody, setChapterNumber }) => {
    const dispatch = useDispatch()

    const loadChapterFunc = (i) => {
        dispatch(setChapterNumber(i))
    }

    return (
        <div className='chapter-container'>
            <h3>Chapter List</h3>
            {storybody.map((eachChapt, i) => {
                return <p key={eachChapt._id} onClick={() => loadChapterFunc(i)}>
                    {i + 1}. {eachChapt.chapterDesc}
                </p>
            })}
        </div>
    )
}

export default Chapter