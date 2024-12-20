import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div>
      <div className="wrapper">
            {/* <!-- Top Bar Start --> */}
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo">
                                <a href="index.html">
                                    <h2>Shiva Concept Solution</h2>
                                    {/* <img src="img/logo.jpg" alt="Logo"/> */}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-calendar"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Opening Hour</h3>
                                            <p>Mon - Fri, 8:00 - 9:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Call Us</h3>
                                            <p>078050-63968,0731-4069788
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-send-mail"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Email Us</h3>
                                            <p>www.shivatutorials.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Top Bar End --> */}

            {/* <!-- Nav Bar Start --> */}
            <div className="nav-bar">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                < Link to="/" className="nav-item nav-link ">Home</Link>
                                <Link to="/About" className="nav-link">About</Link>
                                <Link to="/Courses" className="nav-link">Courses</Link>
                                <Link to="/Team" className="nav-link">Team</Link>
                                <Link to="/Project" className="nav-link">Project</Link>

                                <div className="nav-item dropdown">
                                    {/* <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a> */}
                                    <Link to="/Pages" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>

                                    <div className="dropdown-menu">
                                        {/* <a href="blog.html" className="dropdown-item">Blog Page</a> */}
                                        {/* <a href="single.html" className="dropdown-item">Single Page</a> */}
                                        <Link to="/Blog Page" className="dropdown-item">Blog Page</Link>
                                        <Link to="/Single Page" className="dropdown-item">Single Page</Link>

                                    </div>
                                </div>
                                <Link to="/Contact" className="nav-link">Contact</Link>

                                {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                            </div>
                            <div className="ml-auto">
                                <a className="btn" href="#">Get A Quote</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Nav Bar End --> */}

        </div>
    </div>
</>
  )
}
