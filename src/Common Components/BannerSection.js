import React from 'react';
import { useLocation } from 'react-router-dom';

export default function BannerSection() {
    const location = useLocation();

    const getPageTitle = () => {
        const path = location.pathname; // Fixed: 'Location' -> 'location'
        const pageName = path.split('/').filter(Boolean).pop();
        return pageName ? pageName.charAt(0).toUpperCase() + pageName.slice(1) : 'Home';
    };

    return (
        <>
            {/* <!-- Banner Section Start --> */}
            <div className="page-header"> {/* Fixed: 'class' -> 'className' */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>{getPageTitle()}</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a>{getPageTitle()}</a>

                            {/* <a href="/about">About Us</a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner Section End --> */}
        </>
    );
}
