import React, { useEffect, useRef, useState } from 'react'
import defaultCover from '../../img/dafault-cover2.png'
import { tagsPlotSetting, tagsBackground, tagsCharacter, tagsIdentity } from '../../data';
import { useSelector } from 'react-redux'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { createBook, fileUpload } from '../../features/book/bookSlice';
import { getUserAfterBookCreation } from '../../features/user/userSlice';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const CreateStory = () => {
    const [tagHeading, setTagHeading] = useState('background');
    const [superTagArray, setSuperTagsArray] = useState([])
    const { user } = useSelector((store) => store.userSlice);
    const { book, isloading } = useSelector((store) => store.bookSlice)

    const picUpload = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialData = {
        language: '',
        title: '',
        mainCharacters: [],
        targetAudience: [],
        genre: [],
        rating: '',
        blurb: [],
        tags: [],
        image: '',
        username: user?.penname,
        userId: user?._id
    }

    const [data, setdata] = useState(initialData);
    const [image, setimage] = useState(null);

    const handleFormChange = (e) => {
        const { name, value, checked } = e.target;

        setdata({ ...data, [name]: value });

        if (checked && name === 'targetAudience') {
            setdata({ ...data, targetAudience: [...data.targetAudience, value] })
        } else if (!checked && name === 'targetAudience') {
            setdata({
                ...data,
                targetAudience: data.targetAudience.filter((item) => item !== value)
            })
        }
        if (checked && name === 'genre') {
            setdata({ ...data, genre: [...data.genre, value] })
        } else if (!checked && name === 'genre') {
            setdata({
                ...data,
                genre: data.genre.filter((item) => item !== value)
            })
        }
        if (name === 'mainCharacters') {
            const array = value.split(',')
            setdata({ ...data, mainCharacters: array })
        }
        if (name === 'blurb') {
            const array = value.split('\n')
            setdata({ ...data, blurb: array })
        }
    }

    const handleTags = (e) => {
        if (e.target.classList.contains('display-active')) {
            const result = superTagArray.filter((supertag) => {
                return supertag !== e.target.textContent
            });
            setSuperTagsArray([...result])
            return e.target.classList.remove('display-active')
        } else {
            if (superTagArray.length >= 15) {
                toast.error('Maximum number of tags has been selected')
                return
            } else {
                superTagArray.push(e.target.innerHTML)
                setSuperTagsArray([...superTagArray])
                return e.target.classList.add('display-active')
            }
        }
    }

    const handleImageChange = (e) => {
        const { type, size, } = e.target.files[0]
        if (type !== 'image/jpg' && type !== 'image/jpeg' && type !== 'image/png') {
            return toast.error(`file chosen isn't the right format`)
        }
        if (size > 4 * 1024 * 1024) {
            return toast.error('file size is too big. Upload image size Less than 4mb')
        }
        const imgPath = URL.createObjectURL(e.target.files[0])
        const img = e.target.files[0]
        const imgName = Date.now() + img.name
        setimage({ imgPath, img, imgName })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //book formdata upload functionality
        const { genre, targetAudience, tags, rating } = data
        if (!rating) {
            return toast.error('Rating field cannot be empty')
        }
        if (genre.length === 0) {
            return toast.error('Genre must be chosen')
        }
        if (targetAudience.length === 0) {
            return toast.error('Target Audience must be specified')
        }
        if (tags.length === 0) {
            return toast.error('At least One Book Tag must be clicked')
        }

        //book imagedata upload functionality
        if (image) {
            const { img, imgName } = image;
            const imagedata = new FormData();
            imagedata.append('image', img, imgName)
            dispatch(fileUpload({ imagedata, prevImageName: 'non-existent' }))
        }

        // console.log(data, image, e.target.checked);
        dispatch(createBook(data));
    }


    useEffect(() => {
        const elements = document.querySelectorAll('.display-nonactive')
        elements.forEach((element) => {
            if (superTagArray.includes(element.textContent)) {
                return element.classList.add('display-active')
            } else {
                return element.classList.remove('display-active')
            }
        })
        setdata((prevData) => { return { ...prevData, tags: [...superTagArray] } })
    }, [tagHeading, superTagArray])

    useEffect(() => {
        setdata((prevData) => { return { ...prevData, image: image?.imgName } })
    }, [image])

    useEffect(() => {
        dispatch(getUserAfterBookCreation(user?._id))
        setdata(initialData);
        setimage(null)
        setSuperTagsArray([])
        if (Object.entries(book).length > 0) {
            setTimeout(() => {
                navigate('/dashboard/my-stories')
            }, 1000);
        }
    }, [book])

    return (
        <div className='myStories-container'>
            <div className='book-cover-area'>
                {/* Your MyStories will appear here Or */}
                <h4>Upload your Book Cover</h4>
                <img src={image ? image.imgPath : defaultCover} alt='book cover' />
                <p
                    onClick={() => picUpload.current.click()}>
                    {image ? 'change image' : 'upload image'}</p>
                <p
                    onClick={() => {
                        setimage(null)
                        picUpload.current.value = '';
                    }}>
                    remove image</p>
                <input type='file' onChange={handleImageChange} ref={picUpload} />
            </div>
            <div className='create-form'>
                <h2>Create the next bestseller</h2>
                <form onSubmit={handleSubmit}>
                    <div className='main-form-body'>
                        <label> <p><span>* </span>Language:</p>
                            <input
                                onChange={handleFormChange}
                                type='text'
                                value={data.language}
                                placeholder='Language your story will be written in'
                                name='language'
                                required />
                        </label>
                        <label> <p><span>* </span>Book Title:</p>
                            <input
                                onChange={handleFormChange}
                                name='title'
                                type='text'
                                value={data.title}
                                placeholder='Your Book Title'
                                required />
                        </label>
                        <label> <p><span>* </span>Main Characters:</p>
                            <input
                                onChange={handleFormChange}
                                name='mainCharacters'
                                type='text'
                                value={data.mainCharacters}
                                placeholder={`Main characters' names (SEPARATED BY COMMAS`}
                                required />
                        </label>
                        <fieldset>
                            <legend><p><span>* </span>Target Audience</p></legend>
                            <label> Male:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    value='male'
                                    name='targetAudience' />
                            </label>
                            <label> Female:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    value='female'
                                    name='targetAudience' />
                            </label>
                            <label> Non-binary:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    value='non-binary'
                                    name='targetAudience' />
                            </label>
                            <label> Teens:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    value='teens'
                                    name='targetAudience' />
                            </label>
                            <label> Young Adult:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    value='young adult'
                                    name='targetAudience' />
                            </label>
                        </fieldset>
                        <fieldset required>
                            <legend><p><span>* </span>Genre</p></legend>
                            <label>
                                Werewolf:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='werewolf' />
                            </label>
                            <label>
                                Magic
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='magic' />
                            </label>
                            <label>
                                Horror
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='horror' />
                            </label>
                            <label>
                                Romance:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='romance' />
                            </label>
                            <label>
                                Fan-fiction:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='fanfiction' />
                            </label>
                            <label>
                                Lgbtq:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='lgbtq' />
                            </label>
                            <label>
                                Billionaire:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='billionaire' />
                            </label>
                            <label>
                                Historical:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='historical' />
                            </label>
                            <label>
                                Contemporary:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='contemporary' />
                            </label>
                            <label>
                                Vampire:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='vampire' />
                            </label>
                            <label>
                                Editor's Pick:
                                <input
                                    onChange={handleFormChange}
                                    type='checkbox'
                                    name='genre'
                                    value='editorspick' />
                            </label>
                        </fieldset>
                        <fieldset>
                            <legend><p><span>* </span>Rating</p></legend>
                            <label>
                                13+ <input
                                    onChange={handleFormChange}
                                    type='radio'
                                    name='rating'
                                    value='13+' />
                            </label>
                            <label>
                                15+ <input
                                    onChange={handleFormChange}
                                    type='radio'
                                    name='rating'
                                    value='15+' />
                            </label>
                            <label htmlFor='18+'>
                                18+ <input
                                    onChange={handleFormChange}
                                    type='radio'
                                    name='rating'
                                    value='18+' />
                            </label>
                        </fieldset>
                        <label> <p><span>* </span>Blurb:</p>
                            <textarea
                                onChange={handleFormChange}
                                rows='5'
                                col='5'
                                maxLength='300'
                                name='blurb'
                                value={data.blurb}
                                placeholder='Write a blurb of not more than 200 words' required={true} />
                        </label>
                    </div>
                    <div className='story-tag-container'>
                        <p><span>* </span>Select up to 15 story TAGS below: </p>
                        <div className='story-tag-display-tabs'>
                            <div className='story-tag-tabs'>
                                <p
                                    className={tagHeading === 'background' ? 'tag-display-active' : ''}
                                    onClick={() => setTagHeading('background')}>
                                    Background
                                </p><hr />
                                <p
                                    className={tagHeading === 'plotsetting' ? 'tag-display-active' : ''}
                                    onClick={() => setTagHeading('plotsetting')}>
                                    Plotsetting
                                </p><hr />
                                <p
                                    className={tagHeading === 'prot-identity' ? 'tag-display-active' : ''}
                                    onClick={() => setTagHeading('prot-identity')}>
                                    Protagonist's Identity
                                </p><hr />
                                <p
                                    className={tagHeading === 'prot-xter' ? 'tag-display-active' : ''}
                                    onClick={() => setTagHeading('prot-xter')}>
                                    Protagonist's character
                                </p><hr />
                            </div>

                            <div className='story-tag-display'>
                                {tagHeading === 'background' &&
                                    (<div className='tag-display-inner'>
                                        <h3><FaLessThan />Background<FaGreaterThan /></h3>
                                        {tagsBackground.map((tag) => {
                                            return (<p
                                                className='display-nonactive'
                                                onClick={handleTags}
                                                key={tag.id}> {tag.tag}</p>)
                                        })
                                        }
                                    </div>)
                                }
                                {tagHeading === 'plotsetting' &&
                                    (<div className='tag-display-inner'>
                                        <h3><FaLessThan />Plot Setting<FaGreaterThan /></h3>
                                        {tagsPlotSetting.map((tag) => {
                                            return (
                                                <p className='display-nonactive' onClick={handleTags} key={tag.id} >
                                                    {tag.tag}
                                                </p>
                                            )
                                        })}</div>)
                                }
                                {tagHeading === 'prot-identity'
                                    && <div className='tag-display-inner' >
                                        <h3><FaLessThan />Protagonist Identity<FaGreaterThan /></h3>
                                        {tagsIdentity.map((tag) => {
                                            return (
                                                <p className='display-nonactive' onClick={handleTags} key={tag.id} >
                                                    {tag.tag}
                                                </p>
                                            )
                                        })}</div>
                                }
                                {tagHeading === 'prot-xter' &&
                                    <div className='tag-display-inner'>
                                        <h3><FaLessThan />Protagonist's Character<FaGreaterThan /></h3>
                                        {tagsCharacter.map((tag) => {
                                            return (
                                                <p className='display-nonactive' onClick={handleTags} key={tag.id} >
                                                    {tag.tag}
                                                </p>
                                            )
                                        })}</div>
                                }
                            </div>
                        </div>
                        <div className='tags-chosen'>
                            {superTagArray.length === 0 ?
                                <h3>No Story Tag Is Selected Yet</h3> :
                                <h3 style={{ color: 'green' }}>Selected Tags</h3>
                            }
                            {superTagArray.length <= 14 ?
                                superTagArray.map((arr, i) => {
                                    return <p style={{ cursor: 'default' }} key={i}>{arr}</p>;
                                })
                                : <>
                                    <h3>Maximum reached</h3>
                                    {superTagArray.map((arr, i) => {
                                        return <p style={{ cursor: 'default' }} key={i}>{arr}</p>;
                                    })}
                                </>}
                        </div>
                    </div>
                    <button type='submit' className='btn' disabled={isloading}> Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStory