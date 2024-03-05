import React from 'react'
import './skills.css';
import PythonLogo from '../../assets/python.png'
import SparkLogo from '../../assets/spark.png'
import DatabricksLogo from '../../assets/databricks.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle"> About Me </span> <br></br>
            <span className="skillDesc">A data engineer from the University of Waterloo with a proven track record of development, optimization, and management of robust data platforms. In my prior role as a data engineer, I have led the design and development of data pipelines, enhanced batch processing run times, and managed technical issues for data warehouses in Delta Lake and SQL databases. <br></br> As I seek new opportunities within software engineering focused on Data Platform, I am keen on leveraging my technical experience, problem solving skills, and novel thinking to drive value for an organization. I am eager to bring my adaptability and dedication to a mission-driven team that values forward-thinking solutions.</span>
            <div className="skillsBar">
                <div className="skillBar">
                    <img src={PythonLogo} alt="Python" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Python</h2>
                        <p>I have used Python throughout my career as my main programming language for development.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={SparkLogo} alt="Apache Spark" className="skillBarImg"/>
                        <div className="skillBarText">
                            <h2>Apache Spark</h2>
                            <p>Blurb about python, etc. etc. etc</p>
                        </div>
                </div>

                <div className="skillBar">
                    <img src={DatabricksLogo} alt="Databricks" className="skillBarImg"/>
                        <div className="skillBarText">
                            <h2>Databricks</h2>
                            <p>Databricks Certified Data Engineer Associate</p>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;