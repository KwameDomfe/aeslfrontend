import React from 'react'
import { Link } from 'react-router-dom'

const PracticeCardReverse = (props) => {

    const {image, description, title, url} = props

    return (

        <article id="l__management"
            class="grid gtc12 
                container white-90
                pa4-00 shadow-grey br0-50
                "
        > 
            <figure id=""
                class="gr1s1 gc1s7 grid items-center justify-center
                w-100 h-100 shadow-grey"
            >
                <img id=""
                    src={image}
                    alt=""
                    class="gc1s1 gr1s1 h-100 w-100 cover br0-50 br--left"
                />
            </figure>
            <div id="" 
                class="grid gr1s1 gc8s5 items-center justify-center
                    w-100 h-100 bg-white br0-50 br--right shadow-grey"
            >
                <hgroup id = ""
                    class="gr1s1 gc1s1 flex flex-column items-center justify-center
                        w-100 h-100
                        ph1-00
                        blue0 f0-75 tc
                            ">
                    <h2 class = " mv2-00 lh-copy">
                        {description}
                    </h2>    
                    <Link  to={url}
                        class="dib
                            pa0-50 mb1-00 
                            blue0
                            ba b br0-25
                            f1-00
                            ttu"
                    >
                        {title}
                    </Link>
                </hgroup> 
            </div>
        </article>
    
    )
}

export default PracticeCardReverse