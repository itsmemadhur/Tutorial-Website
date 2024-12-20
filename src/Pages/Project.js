import React from 'react'
import Header from '../Common Components/Header'
import Footer from '../Common Components/Footer'

export default function Project() {
  return (
    <>
      {/* <Header/> */}
      {/* <!-- Page Header Start --> */}
            {/* <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Our Projects</h2>
                        </div>
                        <div className="col-12">
                            <a href="">Home</a>
                            <a href="">Our Projects</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Page Header End --> */}


            {/* <!-- Portfolio Start --> */}
            <div class="portfolio">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Our Projects</p>
                        <h2>Visit Our Projects</h2>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".first">Complete</li>
                                <li data-filter=".second">Running</li>
                                <li data-filter=".third">Upcoming</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row portfolio-container">
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-1.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            People use weather apps to get information about the current and future weather, which can help with planning trips, work, and other activities: 

                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Weather App</h3>
                                    <a class="btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.2s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-2.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            To use an Android app on an iOS device, you can download an Android emulator for iOS.You can also develop apps that work on both Android and iOS by using a cross-platform framework or by developing separate native apps
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Android & iOS </h3>
                                    <a class="btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.3s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-3.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            A university website can provide information about the university's academic offerings, facilities, and opportunities for students.A university website can be used to communicate with students, faculty, and staff. 
 
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>University Website</h3>
                                    <a class="btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.4s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-4.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            A university website can provide information about the university's academic offerings, facilities, and opportunities for students.A university website can be used to communicate with students, faculty, and staff. 
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Designing</h3>
                                    <a class="btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-5.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            The many specialties within ecology, such as marine, vegetation, and statistical ecology,This information also can help us improve our environment, manage our natural resources, and protect human health.                                        
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>Role of Ecology</h3>
                                    <a class="btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.6s">
                            <div class="portfolio-warp">
                                <div class="portfolio-img">
                                    <img src="img/portfolio-6.jpg" alt="Image"/>
                                    <div class="portfolio-overlay">
                                        <p>
                                            An e-commerce website is an online store that allows customers to: Browse products, Place orders, Pay for purchases, and Receive shipped items. 
                                        </p>
                                    </div>
                                </div>
                                <div class="portfolio-text">
                                    <h3>E-Commerce</h3>
                                    <a class="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 load-more">
                            <a class="btn" href="#">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Portfolio End --> */}
            {/* <Footer/> */}

    </>
  )
}
