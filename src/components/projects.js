import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"


import cinemapic from "../img/cinematicketsystem.png"
import ecompic from "../img/ecom.png"
import formvalidatorpic from "../img/formvalidator.png"
import kalkulatorpic from "../img/kalkulator.png"
import landingpagepic from "../img/landingpage.png"
import librabryapppic from "../img/libraryapp.png"
import naturespic from "../img/natureslandingpage.png"
import piggamepic from "../img/piggame.png"
import realestatepic from "../img/realestatefrontpagedesign.png"
import surveyformpic from "../img/surveyform.png"
import techincalpagepic from "../img/technicalpage.png"
import tourismpic from "../img/tourismfrontpagedesign.png"
import storepic from "../img/storepic.png"
import pizzapic from "../img/pizzapic.png"


import Project from "./project";


export default function Projects() {
    const projectData = [{src:cinemapic,title:"Cinema Ticket System",codeLink:"https://github.com/heritio/website-portfolio/tree/master/cinema%20ticket%20buy%20site",live:"https://codepen.io/heritier-aki/pen/Yzwepwe"},{src:ecompic,title:"Ecommerce Design",codeLink:"https://github.com/heritio/website-portfolio/tree/master/e-commerce%20site",live:"https://inspiring-ramanujan-d9bdfe.netlify.app/"},{src:formvalidatorpic,title:"Form Validator",codeLink:"https://github.com/heritio/website-portfolio/tree/master/form%20validator",live:"https://codepen.io/heritier-aki/pen/gOPvwJz"},{src:kalkulatorpic,title:"Kalkulator",codeLink:"https://github.com/heritio/calculatorApp",live:"https://wonderful-murdock-f2d6db.netlify.app/"},{src:landingpagepic,title:"Landing page",live:"https://codepen.io/heritier-aki/pen/PoZQGrB"},{src:librabryapppic,title:"Library app",codeLink:"https://github.com/heritio/Book-library-app",live:"https://ecstatic-archimedes-86fd67.netlify.app/"},{src:naturespic,title:"Natures landing page",codeLink:"https://github.com/heritio/advanced-css-website",live:"https://pedantic-hodgkin-b3a981.netlify.app/"},{src:piggamepic,title:"Pig Game",codeLink:"https://github.com/heritio/Pig-game-app",live:"https://cranky-montalcini-61af02.netlify.app/"},{src:realestatepic,title:"Real Estate Design",codeLink:"https://github.com/heritio/real-estate-site",live:"https://determined-kirch-d67600.netlify.app/"},{src:surveyformpic,title:"Survey Form",codeLink:"https://github.com/heritio/website-portfolio/tree/master/Survey-Form",live:"https://codepen.io/heritier-aki/pen/abdqBOB"},{src:techincalpagepic,title:"Technincal Documentation page",live:"https://codepen.io/heritier-aki/pen/eYJVBpJ"},{src:tourismpic,title:"Tourism website design",codeLink:"https://github.com/heritio/Flexbox-home-page",live:"https://upbeat-jackson-c6490e.netlify.app/"},{src:pizzapic,title:"Pizzeria Delivery App",live:"https://haugesundpizzeria.herokuapp.com/?fbclid=IwAR0DN_GKeyX_aEJOQSGdEfeZhdA6fygi9OMiMfU3JgYLHWyfL-zYnuoPJtw"},{src:storepic,title:"Haugesund store",live:"https://haugesund-store.vercel.app/?fbclid=IwAR3Q02Z-RIucp_m7PKn-XZ2JhdxVNwTp9mzJPyrvV_AqyVqMRpi3-vCDQzQ"}]
  
  
  return (
    <Carousel style={{backgroundColor:"black", height: "300px"}} className="link-styling">
    <Carousel.Item>
    <img src={projectData[12].src} alt={projectData[12].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[12].title}</h3>
      <a href={projectData[12].live}>Live</a>
     
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[13].src} alt={projectData[13].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[13].title}</h3>
      <a href={projectData[13].live}>Live</a>

    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[2].src} alt={projectData[2].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[2].title}</h3>
      <a href={projectData[2].live}>Live</a>
      <a href={projectData[2].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[3].src} alt={projectData[3].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[3].title}</h3>
      <a href={projectData[3].live}>Live</a>
      <a href={projectData[3].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[4].src} alt={projectData[4].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[4].title}</h3>
      <a href={projectData[4].live}>Live</a>
      <a href={projectData[4].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[5].src} alt={projectData[5].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[5].title}</h3>
      <a href={projectData[5].live}>Live</a>
      <a href={projectData[5].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[6].src} alt={projectData[6].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[6].title}</h3>
      <a href={projectData[6].live}>Live</a>
      <a href={projectData[6].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[7].src} alt={projectData[7].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[7].title}</h3>
      <a href={projectData[7].live}>Live</a>
      <a href={projectData[7].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[8].src} alt={projectData[8].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[8].title}</h3>
      <a href={projectData[8].live}>Live</a>
      <a href={projectData[8].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[10].src} alt={projectData[10].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[10].title}</h3>
      <a href={projectData[10].live}>Live</a>
      <a href={projectData[10].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[11].src} alt={projectData[11].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[11].title}</h3>
      <a href={projectData[11].live}>Live</a>
      <a href={projectData[11].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[0].src} alt={projectData[0].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[0].title}</h3>
      <a href={projectData[0].live}>Live</a>
      <a href={projectData[0].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={projectData[1].src} alt={projectData[1].title} style={{height:"300px"}}/>
     <Carousel.Caption style={{backgroundColor:"black"}}>
      <h3>{projectData[1].title}</h3>
      <a href={projectData[1].live}>Live</a>
      <a href={projectData[1].codeLink} style={{paddingLeft:"5px"}}>Code</a>
    </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>

    
  );
}