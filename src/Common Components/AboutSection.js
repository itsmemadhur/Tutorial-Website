import React from 'react'
import BannerSection from './BannerSection'
import YouMayAsk from './YouMayAsk'

export default function AboutSection() {
  return (
    <>

            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/about.jpg" alt="Image"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 ">
                            <div className="section-header text-left ">
                                <p>Welcome to Shiva Concept Solution</p>
                                <h2>15 Years Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Hi,I'm Shiva Gautam.With over 15 years of diverse experience in various IT domains,I am now an entrepreneur focusing on both training and software development.
                                </p>
                                <p>
                                    My expertise spans across multiple technologies, and I've authored numerous articles on subjects including Java, Python, REACT, NODE, ANGULAR, Cloud, software testing, Django framework, C#, Flutter, Salesforce, Ruby on Rails, .NET, AWS, DEVOPS, AI/ML and more. For additional information, please visit shivaconceptsolution.com and kangaroosoftware.net.
                                </p>
                                <p>
                                    This portal is specially to provide technical tutorial to learners in various programming languages and to solve doubt of learners online. We want to provide information of latest technologies with practical example of Java, Python, PHP, C# , Software testing , IOT, AWS, DEVOPS, etc.
                                </p>
                                
                                <a className="btn" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fact">
                <div className="container-fluid">
                    <div className="row counters">
                        <div className="col-md-6 fact-left wow slideInLeft">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-worker"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">250</h2>
                                        <p>Expert Workers</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-building"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">25000</h2>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fact-right wow slideInRight">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-address"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">1560</h2>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-crane"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">890</h2>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
  )
}
