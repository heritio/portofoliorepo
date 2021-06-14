import React from 'react'

export default function Project(props) {
    return (
        <div >
            <img src={props.src} />
            <p>{props.title}</p>
            <div>
                {props.codeLink && <a href={ props.codeLink}>code</a>}
                <a href={ props.live}>Live</a>
            </div>
        </div>
    )
}
