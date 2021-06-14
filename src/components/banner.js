import React from 'react'
import myimg from "../img/heritierprofile.jpg"
export default function Banner() {
    return (
        <div className="our-banner">
            <div className="banner-left">
                <h1>Hi I Am Heritier Akilimali, A  <span style={{color:"orange"}}>Front-End</span> <span style={{color:"purple"}}>Developer</span> For <span style={{color:"blue"}}>ReactJS</span></h1>
                <img className="banner-img" src={myimg} alt="profile-pic" />
            </div>
            <a href="#" className="banner-right"><span className="cv-link">my CV</span></a>
        </div>
    )
}
