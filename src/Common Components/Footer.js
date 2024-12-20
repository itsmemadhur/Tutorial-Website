import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="footer-contact">
                        <h2>Office Contact</h2>
                        <p><i className="fa fa-map-marker-alt"></i>M6 First Floor, Kanchan Sagar, Near Industry House, Palasia Indore</p>
                        <p><i className="fa fa-map-marker-alt"></i> 1st Floor 111, shagun tower, above apna sweets, opposite ibus stop, Vijay   Nagar, Indore

                        </p>

                        <p><i className="fa fa-phone-alt"></i>078050-63968,0731-4069788</p>
                        
                        <p><i className="fa fa-envelope"></i>shivasirtutorials@gmail.com</p>
                        <div className="footer-social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-link">
                        <h2>Courses</h2>
                        <Link to="/courses">Mern Stack Traning</Link>
                        <Link to="/courses">Python Training</Link>
                        <Link to="/courses">Java training </Link>
                        <Link to="/courses">.NET Training</Link>
                        <Link to="/courses">Data Analytics Training</Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-link">
                        <h2>Useful Pages</h2>
                        <Link to="/" className="">Home</Link>

                        <Link to="/about">About Us</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/team">Team</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/pages">Pages</Link>
                        <Link to="/contact">Contact</Link>

                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="newsletter">
                        <h2>ABOUT US
                        </h2>
                        <p>
                        This portal is specially to provide technical tutorial to learners in various programming languages and to solve doubt of learners online. We want to provide information of latest technologies with practical example of Java, Python, PHP, C# , Software testing , IOT, AWS, DEVOPS, etc.
                        </p>
                        <div className="form">
                            <input className="form-control" placeholder="Email here"/>
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container footer-menu">
            <div className="f-menu">
                <a href="">Terms of use</a>
                <a href="">Privacy policy</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
            </div>
        </div>
        <div className="container copyright">
            <div className="row">
                <div className="col-md-6">
                    {/* <!-- 2024 All Rights Reserved ©2024-2025,TechNokri.com. Developed & maintained by Kangaroo Software Pvt. Ltd. --> */}
                    <p>&copy; <a href="#"></a> 2024 All Rights Reserved ©2024-2025,TechNokri.com. Developed & maintained by Kangaroo Software Pvt. Ltd.
                    </p>
                </div>
                <div className="col-md-6">
                    <p>Designed By <a href="https://itsmemadhur.in/">iTsmeRishi</a></p>
                </div>
            </div>
        </div>
    </div>
    

  )
}
