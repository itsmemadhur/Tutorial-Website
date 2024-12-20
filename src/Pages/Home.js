import React from 'react'
import Header from '../Common Components/Header'
import Footer from '../Common Components/Footer'
import Team from '../Common Components/TeamSection'
import YouMayAsk from '../Common Components/YouMayAsk'
import CoursesSection from '../Common Components/CoursesSection'
import AboutSection from '../Common Components/AboutSection'

export default function Home() {
    const testimonials = [
        {
            name: "Student Name",
            profession: "Mern Stack Developer",
            feedback: "A MERN stack developer is a software engineer who builds and maintains web applications using the MongoDB, Express.js, React, and Node.js technologies. They are responsible for the entire software development lifecycle, from designing the user interface to building server-side code" 
            
        },
        // Repeat for other testimonials if unique, or duplicate for simplicity.
    ];

    const sliderImages = [
        "img/testimonial-1.jpg",
        "img/testimonial-2.jpg",
        "img/testimonial-3.jpg",
        "img/testimonial-4.jpg",
        "img/testimonial-1.jpg",
        "img/testimonial-2.jpg",
        "img/testimonial-3.jpg",
        "img/testimonial-4.jpg",
    ];

  return (
    <>
    {/* // Header start */}
    {/* <Header/> */}
    {/* // Header End */}

    {/* <!-- Carousel Start --> */}
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/carousel-1.jpg" alt="Carousel Image"/>
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">We Are Professional</p>
                            <h1 className="animated fadeInLeft">For Your Dream Job</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/carousel-2.jpg" alt="Carousel Image"/>
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Professional Trainers</p>
                            <h1 className="animated fadeInLeft">We Build Your Carrier</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/carousel-3.jpg" alt="Carousel Image"/>
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">We Are Trusted</p>
                            <h1 className="animated fadeInLeft">For Your Dream JOB</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* <!-- Carousel End --> */}

            {/* <!-- Feature Start--> */}
            <div className="feature wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Expert Trainers</h3>
                                    <p>An expert trainer is a person who has a high level of skill or knowledge in a specific field and teaches others what they know. They can work in schools, universities, businesses, or online. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-building"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>About us </h3>
                                    <p>This portal is specially to provide technical tutorial to learners in various programming languages and to solve doubt of learners online. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-call"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>24/7 Support</h3>
                                    <p>24/7 availability has become more common due to advances in communication technologies, such as:The Internet, Smart Phones, E-mail and Texting
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End--> */}


    {/* // About Component start */}
    <AboutSection/>
    {/* //  About Component End */}


    {/* // Courses Component start */}
    <CoursesSection/>
    {/* //  Courses Component End */}

    {/* <!-- Video Start --> */}
    <div className="video wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <button type="button" className="btn-play" data-toggle="modal" data-src="https://youtu.be/kDL1Jp4TQqM?si=JEj4ZtK9-H66Pr3E" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Video End --> */}


    {/* // Team start */}
    <Team/>
    {/* // Team End */}

    
    {/* // YouMayAsk start */}
    <YouMayAsk/>
    {/* // YouMayAsk End */}

    {/* Testimonal Start */}
    <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial-slider-nav">
                            {sliderImages.map((src, index) => (
                                <div className="slider-nav" key={index}>
                                    <img src={src} alt="Testimonial" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial-slider">
                            {testimonials.map((testimonial, index) => (
                                <div className="slider-item" key={index}>
                                    <h3>{testimonial.name}</h3>
                                    <h4>{testimonial.profession}</h4>
                                    <p>{testimonial.feedback}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* Testimonal End */}

   
            {/* <!-- Blog Start --> */}
            <div className="blog">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Latest Blog</p>
                        <h2>Latest From Our Blog</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-1.jpg" alt="Image"/>
                                </div>
                                <div className="blog-title">
                                    <h3>Complete Roadmap of Mern Stack </h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                <p>By<a href="">Shiva Gautam</a></p>
                                <p>In<a href="">https://www.shivatutorials.com/</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                     We want to provide information of latest technologies with practical example of Java, Python, PHP, C# , Software testing , IOT, AWS, DEVOPS, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-2.jpg" alt="Image"/>
                                </div>
                                <div className="blog-title">
                                    <h3>Is .Net Right for you in 2025</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                <p>By<a href="">Shiva Gautam</a></p>
                                <p>In<a href="">https://www.shivatutorials.com/</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                    We want to provide information of latest technologies with practical example of Java, Python, PHP, C# , Software testing , IOT, AWS, DEVOPS, etc.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-3.jpg" alt="Image"/>
                                </div>
                                <div className="blog-title">
                                    <h3>Learn DSA in Fast Way </h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Shiva Gautam</a></p>
                                    <p>In<a href="">https://www.shivatutorials.com/</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                    We want to provide information of latest technologies with practical example of Java, Python, PHP, C# , Software testing , IOT, AWS, DEVOPS, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}



    {/* // Footer start */}
    {/* <Footer/> */}
    {/* // Footer End */}
    </>
  )
}
