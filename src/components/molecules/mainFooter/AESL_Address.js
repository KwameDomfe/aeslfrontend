import React from 'react'
import aesl_logo from '../../../images/_partials/logos/aesl_logo.png'
import { Link } from 'react-router-dom'
const AESL_Address = () => {
  return (
    <div id="aesl_address"
    className=" w-100 
        flex flex-column justify-start items-center
        f1-00 tl" 
    itemtype=""
>
    <figure id="aesl_address--LogoAndName" 
        className="flex flex-column justify-center items-center
            w-100 mb1-00"
    >
        <img src={aesl_logo} 
                alt=""
                className="br4-00 w3-00 mb1-00 "
        />
        <div itemprop="name" class ="tc ttu b">
            AESL <br /> Head Office

        </div>
    </figure>

    <address id="aesl_address--Locational_address"
        className="f0-75 w-100 tc"
        itemprop="address" 
        itemscope="" 
        itemtype="http://schema.org/PostalAddress"
    >
        <span className="dib" 
            itemprop="streetAddress"
        >
            <div className="mb0-25">
                The Hall of Technology
            </div> 
            <div className="mb0-25">
                Opposite The Ministry of Roads and Highways
            </div> 
            <div className="mb0-25">
                Ministries, Accra.
            </div> 
            <div className="mb0-25">
                Ghana
            </div> 
        </span>
    </address>
    <div id="aesl_address--email"
        className="flex flex-column justify-center 
            w-80 items-center
            f0-75"
    >
        <Link  to="/" 
            title="Get In Touch on WhatsApp" 
            target="_blank" 
            className="tc"
            rel="noopener noreferrer"
        >
            <p className="flex items-center justify-between 
                w-100
                pv0-25 ph1-00
                ba br5-00 
                b b--white-90"
            > 
                <img src={aesl_logo}
                    alt="WhatsApp" 
                    className="w1-25 mr0-50" 
                />info@aesl.com 
            </p>
        </Link>
    </div>
    <p className="lh-copy tj i">
        The Architectural & Engineering Services Limited (AES Ltd) is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sit iste reprehenderit est sed perferendis dolorem quisquam incidunt. In tenetur ducimus ratione quidem consequatur quisquam facilis atque aliquam vero fugit..
    </p>
</div>
  )
}

export default AESL_Address