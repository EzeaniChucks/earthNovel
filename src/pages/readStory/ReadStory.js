import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiSettings, FiList } from 'react-icons/fi';
import { FaComment, FaQuestionCircle, FaTimesCircle  } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
    createComment,
    fetchComments,
    commentsDefault,
    getSingleBook,
    setPagination,
    setChapterNumber,
} from '../../features/book/bookSlice';
import {
    closeModal,
    openModal,
    loadChapter,
    loadSettings,
    loadComments,
    loadFAQ,
    defaultState,
    setIsActive,
} from '../../features/modal/modalSlice';
import Comments from '../../components/comments/Comments';
import Settings from '../../components/settings/Settings';
import Chapter from '../../components/chapter/Chapter';
import FAQ from '../../components/faq/FAQ';
import WriterSection from '../../components/writerSection/WriterSection';
import { getAuthor } from '../../features/author/authorSlice';
import { setIsAuthModalOpen } from '../../features/modal/modalSlice';
import { paginate } from '../../utils/paginate';
import './readStory.css';
import { toast } from 'react-toastify';


const ReadStory = () => {
    const { isModalOpen, isChapter, isSettings, isComments, isFAQ, isActive } = useSelector((store) => store.modalSlice);
    const { comments } = useSelector((store) => store.bookSlice);
    const { author } = useSelector((store) => store.authorSlice);
    const { book, isloading, paginatedChapter, chapterNumber, success } = useSelector((store) => store.bookSlice)
    const { user } = useSelector((store) => store.userSlice)

    const { storyId } = useParams();
    const dispatch = useDispatch();

    const onCreateCmments = () => {
        dispatch(createComment({
            bookId: Number(storyId),
            text: 'This book is a really great book',
            commenterId: 43343445353,
            parentId: null,
        }));
    }

    const onFuncModalOpen = (e) => {
        e.preventDefault()
        const { name } = e.target.dataset;
        function loader() {
            if (name === 'comments') {
                dispatch(defaultState())
                dispatch(openModal())
                dispatch(loadComments())
                dispatch(fetchComments({ bookId: Number(storyId) }));
            }
            if (name === 'settings') {
                dispatch(defaultState());
                dispatch(openModal())
                dispatch(loadSettings());
            }
            if (name === 'list') {
                dispatch(defaultState());
                dispatch(openModal())
                dispatch(loadChapter());
            }
            if (name === 'faq') {
                dispatch(defaultState());
                dispatch(openModal())
                dispatch(loadFAQ());
            }
        };
        if (name === 'windowClose') {
            dispatch(closeModal())
            dispatch(defaultState())
            return dispatch(commentsDefault())
        }
        if (isModalOpen) {
            if (name === isActive) {
                dispatch(closeModal())
                dispatch(defaultState())
                dispatch(commentsDefault())
            } else {
                dispatch(setIsActive(name))
                dispatch(openModal());
                loader();
            }
        } else {
            dispatch(setIsActive(name))
            loader()
        }
    }

    const prevButton = () => {
        chapterNumber > 0 ?
            dispatch(setChapterNumber(chapterNumber - 1))
            : toast.error('Beginning of chapter reached')
    }
    const nextButton = () => {
        if (chapterNumber < book.storybody.length - 1) {
            dispatch(setChapterNumber(chapterNumber + 1))
        } else {
            toast.error('Last chapter is reached')
        }
    }

    useEffect(() => {//get book to be read, including all its chapters
        dispatch(getSingleBook(storyId))
    }, []);

    useEffect(() => {//get book author and paginate book chapters
        dispatch(getAuthor(book?.userId));
        dispatch(setPagination(paginate(book?.storybody)));
    }, [book]);

    const imgsource = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className='readStory-container'>
            {/* Left section of page */}
            <div className='writer-section-container'>
                <WriterSection author={author} />
            </div>

            {/* Right section of page */}
            <div className='story-section-container'>
                {/* while chapter is loading */}
                {paginatedChapter?.length === 0 && isloading &&
                    <div className='story-section-no-story'>
                        <h3>Loading...</h3>
                    </div>
                }
                {/* for books with no chapters */}
                {paginatedChapter?.length === 0 && !isloading &&
                    <div className='story-section-no-story'>
                        <h3>No chapters available yet</h3>
                    </div>
                }

                {/* for book with chapters. Paginated chapter loaded depending on chapterNumber */}
                {paginatedChapter[chapterNumber]?.map((storybod, chapterIndex) => {
                    const { chapterDesc, chapterContent } = storybod
                    return (
                        <div key={chapterIndex} className='story-section'>
                            {chapterNumber === 0 && <img className='section-cover-img' src={imgsource + book?.image} alt='book cover' />}
                            <div
                                className={chapterNumber === 0 ? 'parag-section' : 'parag-section small-top-pad'}
                                key={chapterIndex}
                            >
                                {isModalOpen &&
                                    <div className='modality'>
                                        <span onClick={onFuncModalOpen} data-name='windowClose'>
                                            <FaTimesCircle />
                                        </span>
                                        {/* display chapter list */}
                                        {isChapter && <Chapter
                                            storybody={book?.storybody}
                                            loadChapter={loadChapter}
                                            setChapterNumber={setChapterNumber}
                                            chapterNumber={chapterNumber} />
                                        }
                                        {isSettings && <Settings />}
                                        {isComments && <Comments />}
                                        {isFAQ && <FAQ />}
                                    </div>
                                }
                                <div className='functionality'>
                                    <span onClick={onFuncModalOpen} data-name='list'><FiList /></span>
                                    <span onClick={onFuncModalOpen} data-name='settings'><FiSettings /></span>
                                    <span onClick={onFuncModalOpen} data-name='comments'><FaComment /></span>
                                    <span onClick={onFuncModalOpen} data-name='faq'><FaQuestionCircle /></span>
                                </div>

                                <div className='title-and-author-name'>
                                    <h2>{book?.title}</h2>
                                    <h3><i>by</i></h3>
                                    <h3>{book?.username}</h3>
                                </div>
                                <hr />
                                <h1 className='chapter-title'>{chapterDesc}</h1>
                                <div className='bodyRead-container'>
                                    {chapterContent.map((eachCont, i) => {
                                        return (
                                            <span key={i}>
                                                {chapterNumber === 0 &&
                                                    < p className='bodyRead' >{eachCont.parag}</p>
                                                }
                                                {!user ? (chapterNumber > 0 && i < 4 &&
                                                    < p className='bodyRead' >{eachCont.parag}</p>)
                                                    : (chapterNumber > 0 && < p className='bodyRead' >{eachCont.parag}</p>)
                                                }
                                                {!user && chapterNumber > 0 && i === chapterContent.length - 1 &&
                                                    <p className='bodyRead-blocker'>
                                                        <span><span
                                                            onClick={() => dispatch(setIsAuthModalOpen())}
                                                            className='btn'>Login</span> to keep reading</span>
                                                    </p>
                                                }
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>)
                })}

                {/* prev and next buttons */}
                {paginatedChapter?.length > 0 && <div className='chapter-controls-div'>
                    <h3 onClick={prevButton}>Previous</h3>
                    <h3 onClick={nextButton}>Next</h3>
                </div>}
            </div>
        </div >
    )
}

export default ReadStory