import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getFilteredBooks } from '../../features/book/bookSlice';
import { FaSearch } from 'react-icons/fa';
import { categoryData } from '../../data';
import './SingleCatPage.css'
import SingleCatPerPage from './SingleCatPerPage';
import { setIsAuthModalOpen, setIsNavigateAnchor, setCollapseTags } from '../../features/modal/modalSlice';

const SingleCatPage = () => {
    const { catName } = useParams();
    const dispatch = useDispatch()

    const { filteredBooks, error, isloading } = useSelector((store) => store.bookSlice)
    const { user } = useSelector((store) => store.userSlice)
    const { collapseTags } = useSelector((store) => store.modalSlice)

    const [collatedTags, setCollatedTags] = useState([]);
    const [packedData, setPackedData] = useState({
        pageTitle: catName,
        genre: '',
        queryString: '',
        clickedTag: ''
    })

    const handleGetCatBooks = (e) => {// filter books based on category
        dispatch(getFilteredBooks({ genre: e.target.textContent }))
        setPackedData({ ...packedData, pageTitle: e.target.textContent, clickedTag: '' })
    }

    const handleSearchTitle = (e) => {// filter books based on name
        setPackedData({ ...packedData, queryString: e.target.value, pageTitle: 'all', clickedTag: '' })
        dispatch(getFilteredBooks({ genre: 'all', queryString: `title=${e.target.value}` }))
    }

    const handleTagClick = (e) => {//filter backend books based on tag clicked. Add active class to clicked tag
        dispatch(getFilteredBooks({ genre: 'all', queryString: `tag=${e.target.textContent}` }))
        setPackedData({ ...packedData, clickedTag: e.target.textContent })
    }

    const elongateOrCollapseTags = () => {//display more or less taga
        collapseTags === 20 ?
            dispatch(setCollapseTags(`${collatedTags.length}`))
            : dispatch(setCollapseTags(20))
    }

    useEffect(() => {//get book category on page load, using catName from params
        dispatch(getFilteredBooks({ genre: catName.toLowerCase() }))
    }, [])

    useEffect(() => {//get all tags available within each displayed book. Array is massaged to contain unique items 
        if (filteredBooks[0]?.title) {
            const colTags = [...new Set(filteredBooks?.map((eachbook) => {
                return eachbook.tags
            }).flat())];
            setCollatedTags(colTags)
        }
    }, [filteredBooks])

    
    useEffect(() => {//Bequeaths active class to specific tag after new search result is available
        if (packedData?.clickedTag) {
            const tags = document.querySelectorAll('.sorting-tags')

            tags.forEach((tag) => {
                tag.classList.remove('active')
            })
            tags.forEach((tag) => {
                if (tag.textContent === packedData.clickedTag) {
                    return tag.classList.add('active')
                }
            });
        } else {
            const tags = document.querySelectorAll('.sorting-tags')

            tags.forEach((tag) => {
                tag.classList.remove('active')
            })
        }
    }, [collatedTags])


    if (isloading && filteredBooks.length === 0) {//page loading on first visit
        return (
            <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <h3>Page Loading ...</h3>
            </div>
        )
    }

    return (
        <>
            {/* //internet connection failure or network timeout? Then... */}
            
            {error
            && (filteredBooks === 'timeout exceeded' || filteredBooks==='Network Error')
            || (filteredBooks?.data?.msg===`Something went wrong`)
            && <div className='single-cat-container-error'>
                    <h3>Error loading page</h3>
                    <h4>Check your internet connection</h4>
                </div>
            }
            
            {/* categories/page with no books at all? then... */}
            {error && (filteredBooks[0]?.title || filteredBooks?.data?.msg === 'No book in this genre yet') &&
                <div className='single-cat-container-error'>
                    <h1 className='h1-sorry'>Oops!!!</h1>
                    <h3 className='h3-sorry'>There appears to be no books in this category yet</h3>
                    <p>New books will be available soon</p>
                    <p>Do well to check out other <Link
                        to='/' style={{ textDecoration: 'none', fontWeight: 'bold' }}
                    >categories</Link></p>
                </div>
            }
            {/* category with books? then... */}
            {(filteredBooks?.length > 0 || filteredBooks?.data?.msg === "Book doesn't exist") &&
                // top part of book showing tags
                <div className='single-cat-container'>
                    <div className='single-cat-title'>
                        <h1>{packedData?.pageTitle} category</h1>
                        <Link to='/' className='link'>
                            <p>Navigate back home?</p>
                        </Link>
                    </div>
                    <div className='tag-filter-container'>
                        <p>Search Story By Available Tags</p>
                        <div className='cat-tag-display'>
                            {collatedTags?.map((tag, i) => {
                                return (
                                    i < collapseTags && <p
                                        onClick={handleTagClick}
                                        data-name={tag}
                                        className='sorting-tags'
                                        key={i}
                                    >
                                        {tag}
                                    </p>
                                )
                            })}
                            {collatedTags.length > 20 && <button onClick={elongateOrCollapseTags}>
                                {collapseTags === 20 ? 'More Tags?' : 'Less Tags?'}
                            </button>}
                        </div>
                    </div>

                    {/* search functionality */}
                    <div className='single-cat-story-search'>
                        <div>
                            <div>
                                <h4>Search Story By Title:</h4>
                                <div>
                                    <input
                                        type='text'
                                        value={packedData?.queryString}
                                        onChange={handleSearchTitle}
                                    />
                                    <FaSearch />
                                </div>
                            </div>
                            {/* info on number of searched books available */}
                            <p>{filteredBooks?.length > 1 ? `${filteredBooks.length} stories`
                                : `${filteredBooks.length || 'No'} story`} available in {packedData.clickedTag || packedData.pageTitle.toUpperCase()} category
                            </p>
                        </div>
                        {!user && <button
                            onClick={() => {
                                dispatch(setIsAuthModalOpen())
                                dispatch(setIsNavigateAnchor('explore'));
                            }}
                        >Log in</button>}
                    </div>

                    {/* main page display */}
                    <div className='blurb-display-container-container'>
                        {/* left hand side of page showing search tabs */}
                        <div>
                            <h3>Browse by category</h3>
                            {categoryData?.map((cat) => {
                                const { id, catName } = cat
                                return (
                                    <p onClick={handleGetCatBooks} key={id}>
                                        {catName}
                                    </p>
                                )
                            })}
                        </div>

                        {/* middle part of page displaying search results */}
                        <div className='blurb-display-container'>
                            {/* search is loading */}
                            {isloading &&
                                <div className='escape-grid'>
                                    <h3>Fetching Stories...</h3>
                                </div>
                            }
                            {/* search error */}
                            {
                                error && filteredBooks?.data?.msg === "Book doesn't exist" &&
                                <div className='escape-grid'>
                                    <h3>OOPS! There Appears To Be No Book With This Name</h3>
                                    <h4>Try another searchword.</h4>
                                    <h4>Or simply click on the category/story tags <span className='alternate'>to the left</span><span className='alternate2'>above</span></h4>
                                </div>
                            }
                            {/* search success */}
                            {
                                filteredBooks[0]?.title && filteredBooks?.map((story) => {
                                    return (
                                        <SingleCatPerPage
                                            key={story._id}
                                            data={story}
                                        />
                                    )
                                })
                            }
                        </div>
                        {/* third part of page yet to be fully developed */}
                        <div className='third-div-in-display'>
                            <h1>Editor's Top Pick</h1>
                        </div>
                    </div>
                </div>}
        </>

    )

}

export default SingleCatPage