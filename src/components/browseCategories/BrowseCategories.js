import React from 'react';
import Category from './Category';
import { categoryData } from '../../data';
import { Link } from 'react-router-dom';
import { setIsAuthModalOpen, setIsNavigateAnchor } from '../../features/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux';
import { resetBook } from '../../features/book/bookSlice'

const BrowseCategories = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.userSlice)

  return (
    <div className='cat-container'>
      <div className='cat-intro'>
        <h1>or browse our Shelf</h1>
        {!user && <button
          onClick={() => {
            dispatch(setIsAuthModalOpen())
            dispatch(setIsNavigateAnchor('explore'));
          }}
          className='btn'
        >Log in</button>}
      </div>
      <div className='HRs'>
        <hr /><hr /><hr />
      </div>
      <div className='categories'>
        {categoryData.map((category) => {
          const { id, catName } = category;
          return (
            <div key={id}>
              <Link to={`story/${catName}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Category onClick={() => dispatch(resetBook())} {...category} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BrowseCategories