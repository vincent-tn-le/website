import React from 'react';
import './intro.css'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="name">Vincent Le</span>
                <span className="education">Statistics @ University of Waterloo 2020</span>
                <span className="details">Programmer, Photographer, Chef</span><br></br>
                <Link><button className="resumeButton"><img src={btnImg} className="btnImg"></img> Resume</button></Link>
            </div>
            
        </section>
    )
}

export default Intro;