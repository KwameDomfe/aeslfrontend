import React from 'react'
import { Link } from 'react-router-dom'

const PracticeCard = (props) => {

    const {image, 
        description, 
        title, 
        url
    } = props

    return (
        <article id="l__sector_ministry"
            class="grid gtc12 
                container
                pa4-00 bg-white shadow-gray"
        >
            <div id="" 
                class="grid gr1s1 gc1s5 items-center justify-center
                    w-100 h-100 bg-blue0 shadow-grey br0-50 br--left"
            >
                <hgroup id = ""
                    class="gr1s1 gc1s1 flex flex-column items-center justify-center
                        w-100 h-100
                        ph1-00
                        white-90 f0-75 tc
                            ">
                    <h2 class = " mv2-00 lh-copy">
                        {description}
                    </h2>    
                    <Link  to={url}
                        class="dib
                            pa0-50 mb1-00 
                            white-90
                            ba b br0-25
                            f1-00
                            ttu"
                    >
                        {title}
                    </Link>
                </hgroup> 
            </div>
            <figure id=""
                class="gr1s1 gc6s7 grid items-center justify-center
                w-100 h-100 shadow-grey br0-50"
            >
                <img id=""
                    src={image}
                    alt=""
                    class="gc1s1 gr1s1 h-100 w-100 cover br--right br0-50"
                />
            </figure>
        </article>
    )
}

export default PracticeCard