import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    
    const {
        name, 
        client,
        location, 
        image,
        description,
        url,
        category,
        subCategory

    } = props
    
    return (
        <article id="" 
            className="flex flex-column justify-start items-start
                h-100 w-100
                bg-blue0 pa0-50 shadow-yellow
                br0-50 white-90"
        >
            <hgroup 
                className="w-100"
            >
                <div className="flex flex-column
                    mv1-00
                    bb"
                >
                    <span className="mb0-50 b">{name} </span> 
                    <span className="mb0-50 ">Client: {client} </span> 
                    <span className="f0-75 tr">{location} </span>  
                </div>
            </hgroup>

            <div className="flex flex-column justify-between
                    mb2-00 w-100"
            >
                <figure className="h12-00 w-100">
                    <img src={image} 
                    alt="" 
                    className="h-100 cover"
                    />
                </figure>

                <figcaption className="flex flex-column justify-between h12-0
                    w-100
                    mt1-00 
                    f1-00 lh-copy tj"
                >
                    <p className=""
                    >
                        {description}
                    </p> 
                    <div>
                        <Link to={url}
                            className="dib pv0-25 ph0-50 br0-25 bg-yellow"
                        >
                            read more
                        </Link>
                    </div>
                        
                </figcaption>
            </div>

            <footer 
                className="w-100"
            > 
                <div className="flex justify-between w-100">
                    <h5 className="pa0-50 ba br0-25"> {category}</h5>
                    <small className="pa0-50 ba br0-25"> {subCategory}</small>
                </div>
            </footer>

        </article>
    )
}

export default ProjectCard