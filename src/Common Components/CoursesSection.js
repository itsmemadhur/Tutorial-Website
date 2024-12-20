import React from 'react'
import BannerSection from './BannerSection'
import YouMayAsk from './YouMayAsk'

export default function CoursesSection() {
  return (
    <>
    {/* Banner Start */}
        {/* <BannerSection/> */}
    {/* Banner End */}
        {/* <!-- Service Start --> */}
            <div className="service">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Courses</p>
                        <h2>We Provide Best Courses</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-1.jpg" alt="Image"/>
                                    <div className="service-overlay">
                                        <p>
                                            HTML is a markup language used to create static web pages and web applications.HTML is the code that is used to structure a web page and its content.CSS is a style sheet language responsible for the presentation of documents written in a markup language.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3><center>Web Page Designing</center></h3>
                                    <a className="btn" href="img/service-1.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-2.jpg" alt="Image"/>
                                    <div className="service-overlay">
                                        <p>
                                        Java is a complete technology or platform, which is used to create small scale to large scale application’s using Java Programming language, Java Development Kit and Java Frameworks.
                                        Java Technology Provide a complete platform to compile and execute the java program code using JDK and JRE.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Java Programming Language</h3>
                                    <a className="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-3.jpg" alt="Image"/>
                                    <div className="service-overlay">
                                        <p>
                                        It is most popular script based language, now javascript is in first position in IT industry based on usability.Javascript:-  It is the client-side (browser side) script-based language that is used to implement business logic, validation, animation, and dynamic design view in web applications.
                                        

                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3><center> Java Script </center></h3>
                                    <a className="btn" href="img/service-3.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-4.jpg" alt="Image"/>
                                    <div className="service-overlay">
                                        <p>Python is a high-level script-based language that contains the only interpreter to execute a python script.
                                        Script-based language means the language that will be executed by the Interpreter. The interpreter will execute the code line by line, Script-based language does not contain any separate compiler to convert the code. the compiler will be in-built under the interpreter.
                                        But now  Python is complete technology or platform which contain multiple library, framework, and support to create application software.


                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3><center>Python</center></h3>
                                    <a className="btn" href="img/service-4.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-5.jpg" alt="Image"/>
                                    <div className="service-overlay">
                                        <p>
                                        It is the library of Javascript that is used to create dynamic front-end of any web technology. it is most demanded script in modern IT developmemnt.ReactJS is a declarative, efficient, and flexible
                                        JavaScript library for building reusable UI components. 
                                        It is an open-source, component-based front-end library responsible only for the view layer of the application.

                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3><center>React</center></h3>
                                    <a className="btn" href="img/service-5.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-6.jpg" alt="Image"/>
                                    <div className="service-overlay">
                                        <p>
                                        It is the library of Javascript that is used to create dynamic front-end of any web technology. it is most demanded script in modern IT developmemnt.ReactJS is a declarative, efficient, and flexible
                                        JavaScript library for building reusable UI components. 
                                        It is an open-source, component-based front-end library responsible only for the view layer of the application.

                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3><center>AWS</center></h3>
                                    <a className="btn" href="img/service-6.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

            {/* You may ask Start */}
                {/* <YouMayAsk/> */}
            {/* You may ask End */}
    </>
  )
}
