import React from 'react'
import { Link } from 'react-router-dom'

const PrinciplesCard = (props) => {

    const {bgImage, title, overview, url, colour} = props

    return (
        <div className="grid items-center justify-center">
            <figure  className ={`gc1s1 gr1s1 grid items-center justify-center
                    pa0-50 bg-${colour}`}
            >
                <img src={bgImage}
                    alt=""
                    className="w-100 h-100
                        cover"
                /> 
            </figure>
            <hgroup 
                className={`gc1s1 gr1s1 grid items-center justify-center
                    ma4-00 pa1-00 bg-${colour} z1`}
            >
                <h3 className="ttu">
                    {title}
                </h3>    
                <span>
                    {overview}
                </span> 
                <Link to ={url}
                    className="pa0-25 mt2-00 ba tc white-90"
                >
                    EXPLORE
                </Link>
            </hgroup>
        </div>
    )
}

export default PrinciplesCard
