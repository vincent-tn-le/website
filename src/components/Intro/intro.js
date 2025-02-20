import React from 'react';
import './intro.css'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="nameTitle">Vincent Le</span>
                <span className="education">Statistics @ University of Waterloo 2020</span>
                <span className="details">Programmer, Photographer, Chef</span><br></br> 
                <a href="https://github.com/vincent-tn-le/website/blob/main/src/assets/vincent-le_resume.pdf" target="_blank"><button className="resumeButton"><img src={btnImg} className="btnImg"></img> Resume</button></a>
            </div>
            
        </section>
    )
}

export default Intro;