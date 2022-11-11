import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './chapter.css'

const Chapter = ({ storybody, setChapterNumber, chapterNumber }) => {
    const dispatch = useDispatch()
    
    const loadChapterFunc = (i) => {
        dispatch(setChapterNumber(i))
    }
    
    useEffect(()=>{
        const chapterLines  = document.querySelectorAll('.chapterPicker')
        chapterLines.forEach((line)=>{
            line.style.color = 'black'
            return line.style.background = 'none'
        })
        chapterLines.forEach((line, index)=>{
            if(index === chapterNumber){
                line.style.color = 'white';
                return line.style.backgroundColor = 'grey';
            }
        })
    },[chapterNumber])
    
    return (
        <div className='chapter-container'>
            <h3>Chapter List</h3>
            {storybody.map((eachChapt, i) => {
                return <p key={eachChapt._id} className='chapterPicker' onClick={() => loadChapterFunc(i)}>
                    {i + 1}. {eachChapt.chapterDesc}
                </p>
            })}
        </div>
    )
}

export default Chapter