import React from "react";
import { Container } from 'react-bootstrap';
import BYU from '../assets/images/Brigham_Young_University_medallion.png';
import UofU from '../assets/images/UofU.png';
import '../assets/css/resume.css';

export default function Resume() {
    return (
        <>
            <Container className="custom-container">
                <h2 className="section-header">Education</h2>
                <hr></hr>
                <div className="row education">
                    <div className="col" >
                        <img className="school-logo" src={BYU} alt="BYU School Logo" width="100px" height="100px" />
                        <h3>Brigham Young University</h3>
                        <p>Bachelors - Applied Technology</p>
                        Winter 2021 - Expected graduation Fall 2026
                    </div>
                    <div className="col">
                        <img className="school-logo" src={UofU} alt="UofU School Logo" width="100px" height="100px" />
                        <h3>University of Utah</h3>
                        <p>Certificate - Full Stack Coding Bootcamp</p>
                        <p>June 2023 - December 2023</p>
                    </div>
                </div>

                <h2 className="section-header">Skills</h2>
                <hr></hr>
                <div className="row">
                    <div className="col">
                        <h3 className="skills-column">Front End Development</h3>
                        <ul className="skills-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Python</li>
                            <li>Responsive Design</li>
                            <li>Version Control (Git)</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="skills-column">Back End Development</h3>
                        <ul className="skills-list">
                            <li>REST API's</li>
                            <li>JSON</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>Mongoose, MongoDB</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>

                <h2 className="section-header">Experience</h2>
                <hr></hr>
                <div className="experience-item">
                    <h3>Fast Fill Systems</h3>
                    <p className="faded-city">- Springville, UT</p>
                </div>
                <p className="job-title">IT Specialist | 2023 - Present</p>
                <ul className="experience-list">
                    <li>Manage the installation, configuration, and support of workstation software, network, hardware, and printers.</li>
                    <li>Execute application and software upgrades and troubleshoot any performance issues.</li>
                    <li>Responsible for training employees on software and hardware usage, offering technical support as necessary.</li>
                </ul>
                <p className="job-title">Lead QA Specialist | 2022 - Present</p>
                <ul className="experience-list">
                    <li>Manage incoming components, ensuring adherence to Fast Fill's standards, and contributed to a 500+ unit
                        annual decrease in part rejection, resulting in substantial cost savings.</li>
                    <li>Verify that products built by employees exceed satisfactory expectations in quality and functionality via a
                        strong attention to detail.</li>
                    <li>Work with engineers, production line employees, and shipping team to meet demand and exceed goals that
                        ensure growth as a company.</li>
                </ul>
                <p className="job-title">CNC Machine Operator | 2021 - 2022</p>
                <ul className="experience-list">
                    <li>Operated and maintained lathe CNC machines.</li>
                    <li>Became knowledgeable of machine programs, optimizing them for efficiency - contributing to a 48% annual
                        production growth and saving company time and resources.</li>
                    <li>Reviewed drawings, instructions, blueprints while using extreme attention to detail for taking precise
                        measurements and tolerances of all machined goods.</li>
                </ul>
                <p className="job-title">Inventory Manager | 2020 - 2021</p>
                <ul className="experience-list">
                    <li>Responsible for all inventory and incoming components utilizing QuickBooks and Google Docs.</li>
                    <li>In charge of managing workflow for production line workers by pulling inventory for orders.
                    </li>
                    <li>Collaborated with the purchasing department to optimize stock replenishment and enhance costeffectiveness.
                    </li>
                </ul>

                <div className="experience-item">
                    <h3>LuLaRoe</h3>
                    <p className="faded-city">- Corona, CA</p>
                </div>
                <p className="job-title">Finance Team Trainer | 2015 - 2017</p>
                <ul className="experience-list">
                    <li>Developed and trained the finance team on internal protocols and processes for handling customer inquiries.</li>
                    <li>Managed multiple accounts of retail patrons and their orders by helping troubleshoot and demonstrate use of
                        company software platforms.
                    </li>
                    <li>Managed multiple accounts of retail patrons and their orders by helping troubleshoot and demonstrate use of
                        company software platforms.
                    </li>
                </ul>

                <h2 className="section-header">Organizations & Service Opportunities</h2>
                <hr></hr>
                <p className="job-title">Eagle Scout - Boy Scouts of America</p>
                <p className="job-title">Missionary - The Church of Jesus Christ of Latter Day Saints - Kobe, Japan</p>
            </Container>
        </>
    )
}