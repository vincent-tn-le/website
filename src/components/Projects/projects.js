import React from 'react'
import './projects.css'
import Artscraper from '../../assets/artscraper.png'
import Etch from '../../assets/etch.png'
import Stock from '../../assets/stocks.png'
import Music from '../../assets/music.png'


const Projects = () => {
    return (
        <section id='projects'>
            <h2 className="projectsTitle">Projects</h2>
            <span className="projectsDesc">Some of the projects that I have completed over the years.</span>
            <div className="projectImgs">
                <a href="https://vincent-tn-le.github.io/art-supply-scraper/"><div className="projectImg">
                    <img src={Artscraper} alt="Artscraper" className="projectBarImg"/>
                        <div className="projectBarText">
                            <h2>Web Scraper</h2>
                            <p>Python (BeautifulSoup, Flask), PostgreSQL, React.js</p>
                        </div>
                </div></a>

                <a href="https://vincent-tn-le.github.io/etch-a-sketch/"><div className="projectImg">
                    <img src={Etch} alt="Etch-a-Sketch" className="projectBarImg"/>
                        <div className="projectBarText">
                            <h2>Etch-a-Sketch</h2>
                            <p>JavaScript, HTML, CSS</p>
                        </div>
                </div></a>

                <a href="https://github.com/vincent-tn-le/stock_trading"><div className="projectImg">
                    <img src={Stock} alt="Stock trading bot" className="projectBarImg"/>
                        <div className="projectBarText">
                            <h2>Forex Trading Bot</h2>
                            <p>Python, FXCM API Connection, Pandas</p>
                        </div>
                </div>
                </a>

                <a href="https://github.com/vincent-tn-le/classfying_music_genres"><div className="projectImg">
                    <img src={Music} alt="Classifying Music Genres" className="projectBarImg"/>
                        <div className="projectBarText">
                            <h2>Music Genre Classifier</h2>
                            <p>Python, Scikit-learn, Jupyter Notebook</p>
                        </div>
                </div></a>

            </div>
        </section>
    );
}

export default Projects;