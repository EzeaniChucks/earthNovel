import React, { useEffect } from 'react'
import { setIsNavigateAnchor } from '../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import './About.css'

const About = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setIsNavigateAnchor(null))
    }, [])

    return (
        <div className='about-container'>
            <div>
                <h3>About This Project</h3>
                <p>I was once a fiction writer for platforms like Dreame and Webnovel</p>
                <p>It was inevitable that my first programming project would be a reading/writing app, hence
                the birth of this project.</p>
                {/*<p>Alas, it's taken longer than i thought(over four months of consistent efforts now), with several roadblocks that would often take days to figure out.
                </p>*/}
                <p>In terms of the full features of reading apps, the project is roughly 70% complete</p>
                <p>Below are the features left to implement</p>
                <li>Author profile page edit</li>
                <li>Payment systems</li>
                <li>Reader e-coins after coin purchase (for reading paid books)</li>
                <li>Chapter comment and replies functionality</li>
            </div>
            <div>
                <h3>About me</h3>
                <p>I'm Ezeani Chucks, a developer from Nigeria</p>
                <p>I'm consistently brushing my skils at complex data structures and writing better, more efficient algorithms. I can handle full stack projects working within teams</p>
                <p>My current skillset is React and Vanilla Js on the frontend and Nodejs, MongoDb and MySql on the backend.</p>
                <p>Phone contact: +2348067268692</p>
                <p>E-mail: concord_chucks2@yahoo.com</p>
                <p>I look forward to working with you</p>
            </div>

        </div>
    )
}

export default About;