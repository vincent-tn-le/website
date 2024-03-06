import React from 'react'
import './contact.css'
import egress from '../../assets/egress.png'
import wealthsimple from '../../assets/wealthsimple.png'
import PwC from '../../assets/pwc.png'
import londonLife from '../../assets/london_life.png'
import RBC from '../../assets/rbc.png'
import LinkedInIcon from '../../assets/linkedin.png'
import GitHubIcon from '../../assets/github.png'

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="photos">
                <h1 className="contactPageTitle">Previous Experience</h1>
                <p className="experienceDesc">I have had the opportunity to work with a diverse group of companies.
                Some of them include:</p>
                <div className="experienceImgs">
                    <img src ={egress} alt="Egress Software Technologies" className="experienceImg"></img>
                    <img src ={wealthsimple} alt="Wealthsimple" className="experienceImg"></img>
                    <img src ={PwC} alt="PwC Canada" className="experienceImg"></img>
                    <img src ={londonLife} alt="London Life Insurance" className="experienceImg"></img>
                    <img src ={RBC} alt="Royal Bank of Canada" className="experienceImg"></img>
                </div>
            </div>
            
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below if you would like to get in contact.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"></input>
                    <input type="email" className="email" placeholder="Your Email"></input>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/vincentle97/"><img src={LinkedInIcon} alt="LinkedIn" className="link"></img></a>
                        <a href="https://github.com/vincent-tn-le"><img src={GitHubIcon} alt="GitHub" className="link"></img></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;