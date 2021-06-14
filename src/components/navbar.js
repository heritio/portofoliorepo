import React from 'react'


export default function Navbar() {
    return (
        <header className="our-nav" style={{width:"100%", position:"fixed", zIndex:"999"}}>
       <nav className="our-links">
         <a href="#About">About</a>
         <a href="#Projects">Projects</a>
         <a href="#Contact">Contact</a>
       </nav>
      </header>
    )
}
