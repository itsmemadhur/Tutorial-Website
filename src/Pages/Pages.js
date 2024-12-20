import React from 'react'
import Header from '../Common Components/Header'
import Footer from '../Common Components/Footer'

export default function Pages() {
  return (
    <>
      {/* <Header/> */}
      {/* <!-- Blog Start --> */}
            <div className="blog">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Latest Blog</p>
                        <h2>Latest From Our Blog</h2>
                    </div>
                    <div className="row blog-page">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-1.jpg" alt="Image"/>
                                </div>
                                <div className="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
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
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-3.jpg" alt="Image"/>
                                </div>
                                <div className="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-1.jpg" alt="Image"/>
                                </div>
                                <div className="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
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
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-3.jpg" alt="Image"/>
                                </div>
                                <div className="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}
            {/* <Footer/> */}
    </>
  )
}
