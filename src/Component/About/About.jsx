import React from 'react'
import './About.css'
import About_img from '../../assests/About_img.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function About() {
    return (
        <>
        <Navbar />
        <div className='about'>
            <div className="about-left">
                <img src={About_img} alt="" className='About_img' />
            </div>
            <div className="about-right">
                <h2> ABOUT US</h2>
                <p>
                    Students seeking career guidance can connect with experienced mentors who offer personalized advice and support.
                    The mentors who are professionals in various fields, provide insights into different career paths, help students identify their strengths and interests, and offer strategies for achieving career goals.
                </p>
                <p>
                    The platform facilitates direct communication between students and mentors, allowing for one-on-one sessions, Q&A, and ongoing mentorship.
                    This interaction not only aids students in making informed career choices but also helps them build professional networks and gain confidence in their career journey.
                </p>
            </div>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default About