import React, { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown'
// import rehypeRaw from 'rehype-raw'
import './AddNewChapter.css'
import { useParams } from 'react-router-dom'
// import parse from 'html-react-parser'
import { toast } from 'react-toastify';
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { editBook, getSingleBook } from '../../features/book/bookSlice';

const AddNewStory = () => {
    const { id } = useParams()
    // const [chapterTitle, setChapterTitle] = useState('');
    const [dataObj, setDataObj] = useState({
        parag: '',
        chapterTitle: '',
        finalObj: {}
    })
    const [openModal, setOpenModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)

    const { book, error } = useSelector((store) => store.bookSlice)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { value } = e.target;
        setDataObj({ ...dataObj, chapterTitle: value });
    }

    //collate edited title, and chapter content for submision
    const handleEditDataPrep = () => {
        const text = document.querySelector('#story-read-textarea').innerText
        if (text.length <= 50) toast.success(`Chapter length can't be less than 50`)
        if (text.length > 50) {
            const textArray = text.split(/\n/)
                .map((paragraph) => {
                    return { parag: paragraph }
                })
            setDataObj({
                ...dataObj,
                finalObj: {
                    ...dataObj.finalObj,
                    chapterContent: textArray,
                    chapterTitle: dataObj.chapterTitle || `Chapter ${book?.storybody?.length + 1}` || 'Newest Chapter',
                }
            })
        }
        setOpenModal(true)
    }

    // prepare newchapter data before dispatch 
    const handleDataPreparation = () => {
        const text = document.querySelector('#story-read-textarea').innerText
        if (text.length <= 50) toast.success(`Chapter length can't be less than 50`)
        if (text.length > 50) {
            const textArray = text.split(/\n/)
                .map((paragraph) => {
                    return { parag: paragraph }
                })

            const bookdata = {
                storybody: [{
                    chapterDesc: dataObj.chapterTitle || `Chapter ${book?.storybody?.length + 1}` || 'Newest Chapter',
                    chapterContent: textArray
                }]
            };
            setDataObj({ ...dataObj, finalObj: { id, bookdata } });
            setOpenModal(true)
        }
    }

    // send edited data
    const handleEdit = () => {
        const bookdata = dataObj.finalObj
        dispatch(editBook({ id, bookdata }))
        setOpenModal(false)
    }

    // send already cleaned up data to database
    const handleSubmit = () => {
        dispatch(editBook(dataObj.finalObj))
        setTimeout(() => {
            setIsSubmited(!isSubmited)
        }, 2000)
        setOpenModal(false)
        toast.success('Chapter Added')
    }

    const chapterClick = (eachChapter, target) => {
        setIsEdit(true)
        const classList = document.querySelectorAll('.identifier')
        classList.forEach((pElement) => {
            return pElement.classList.remove('activated-chapter')
        })
        target.classList.add('activated-chapter')
        const arr = eachChapter.chapterContent.map((eachParag) => {
            const newArr = [];
            newArr.push(eachParag.parag);
            return newArr;
        })
        setDataObj({
            ...dataObj,
            chapterTitle: eachChapter.chapterDesc,
            parag: arr.flat().join('\r\n'),
            finalObj: {
                chapterId: eachChapter._id
            }
        })
    }

    // update book once any change is made to backend
    // isSubmited(as opposed to book) used as dependency array
    // to prevent useEffect loop
    useEffect(() => {
        dispatch(getSingleBook(id))
    }, [isSubmited])

    useEffect(() => {
        book?.storybody?.length > 0 && setIsEdit(true)
        if (Object.entries(book).length > 0 && book.storybody.length > 0) {
            const classList = document.querySelectorAll('.identifier')
            classList.forEach((pElement, index) => {
                if (index === classList.length - 1) {
                    return pElement.classList.add('activated-chapter')
                }
            })
            document.querySelector('.activated-chapter').click()
        }
    }, [book])


    return (
        <>
            <div className='story-read-parg'>
                <div className='story-chapter-outline'>
                    {<h2>{book.title}</h2>}
                    <label htmlFor='text'>
                        {isEdit ? 'Edit Chapter Title' : 'Enter Chapter Title'}
                        <input
                            id='text'
                            name='chapter-title'
                            placeholder='Type Chapter Title Here'
                            type='text'
                            value={dataObj.chapterTitle}
                            onChange={handleChange}
                        />
                    </label>
                    {error && <p>check your network settings and refresh page</p>}
                    {book && Object.entries(book).length > 0 &&
                        (<div className='chapter-list'>
                            {book?.storybody?.length > 0 &&
                                <h4 onClick={() => {
                                    setIsEdit(false)
                                    setDataObj({ ...dataObj, parag: '', chapterTitle: '' })
                                    const classList = document.querySelectorAll('.identifier')
                                    classList.forEach((pElement) => {
                                        return pElement.classList.remove('activated-chapter')
                                    })
                                }}
                                >Add New Chapter?</h4>}

                            <h3>Chapter List<span> ({book?.storybody.length} chapters available)</span></h3>
                            <div>
                                {book?.storybody?.length === 0 &&
                                    <>
                                        <h3>No chapter written yet.</h3>
                                        <h5>Chapter list will appear here</h5>
                                    </>
                                }
                                {book?.storybody.map((eachChapter, index) => {
                                    return (
                                        <span key={index}>
                                            <p
                                                className='identifier'
                                                onClick={(e) => {
                                                    const target = e.target
                                                    chapterClick(eachChapter, target)
                                                }
                                                }
                                            >{index + 1}. {eachChapter.chapterDesc}</p>
                                            <hr />
                                        </span>
                                    )
                                })}
                            </div>
                            {book?.storybody?.length > 0 &&
                                <h4 onClick={() => {
                                    setIsEdit(false)
                                    setDataObj({ ...dataObj, parag: '', chapterTitle: '' })
                                    const classList = document.querySelectorAll('.identifier')
                                    classList.forEach((pElement) => {
                                        return pElement.classList.remove('activated-chapter')
                                    })
                                }}
                                >Add New Chapter?</h4>
                            }
                        </div>)
                    }
                </div>
                <div className='story-canvass'>
                    <div className='story-canvass-div'>
                        <h2>{dataObj.chapterTitle}</h2>
                        <div
                            id='story-read-textarea'
                            contentEditable
                            suppressContentEditableWarning
                        >{dataObj.parag}</div>
                    </div>

                    {isEdit && <>
                        <button className='btn'
                            id='submit-btn'
                            type='buttom'
                            onClick={handleEditDataPrep}
                        >
                            edit chapter
                        </button>
                        <button className='btn'
                            id='submit-btn'
                            type='buttom'
                            onClick={handleEditDataPrep}
                        >
                            delete chapter
                        </button>
                    </>}
                    {!isEdit && <button className='btn'
                        id='submit-btn'
                        type='buttom'
                        onClick={handleDataPreparation}>
                        DONE
                    </button>}
                </div>
                {openModal &&
                    <div className='story-submit-modal'>
                        <div className='story-submit-modal-div'>
                            <FaTimes onClick={() => setOpenModal(false)} />
                            <p>Submit New Chapter?</p>
                            <div>
                                <button
                                    className='btn'
                                    onClick={handleSubmit}
                                >Submit</button>
                                <button className='btn-extra' onClick={() => setOpenModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }
                {openModal && isEdit &&
                    <div className='story-submit-modal'>
                        <div className='story-submit-modal-div'>
                            <FaTimes onClick={() => setOpenModal(false)} />
                            <p>Edit Chapter titled, <span>{`${dataObj.chapterTitle}`}</span>?</p>
                            <div>
                                <button
                                    className='btn'
                                    onClick={handleEdit}
                                >Edit</button>
                                <button className='btn-extra' onClick={() => setOpenModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default AddNewStory