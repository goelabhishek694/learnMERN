import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

import { NavLink } from "react-router-dom";
const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                        Do you have any comments or questions? Our team will be happy to assist you. Send us a message.
                    </p>
        
                    <h2 className="email text-large">
                        support@pepcoding.com
                    </h2>
        
                    <p className="happy-to-help">
                        We are here to answer any questions regarding our resume generator, do not hesitate to contact us for
                        any reason. We will respond in less than 24 hours from receipt of the email. Thanks for trusting us
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}   className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;