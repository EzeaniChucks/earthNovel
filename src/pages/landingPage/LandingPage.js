import React from 'react';
import BrowseCategories from '../../components/browseCategories/BrowseCategories';
import Welcome from '../../components/welcome/Welcome';
import Footer from '../../components/footer/Footer';
import './landingPage.css';


const LandingPage = () => {
    return (
        <main>
            <section className='land-page'>
                <Welcome className='logo-area' />
                <div className='category-area'>
                    <BrowseCategories />
                </div>
            </section>
            <Footer />
        </main>



    )
}

export default LandingPage