import React from 'react'

import mowh from '../../../images/_partials/logos/mwh.jpg'

const MOWH_Address = () => {
    return (
        <div id="mwh_address"
            class="flex flex-column justify-start items-center 
                w-100
                f1-00 tc" 
            itemtype=""
        >
            <figure class="flex flex-column justify-center items-center 
                w-100 mb1-00"
            >
                <img src={mowh} 
                    alt=""
                    class="br4-00 w3-00 mb1-00"
                />
                <figcaption itemprop="name" class ="tc f1-00 ttu b">
                    Ministry of <br /> Works and Housing
                </figcaption>

            </figure> 

            <address id="Locational_address"
                class="tc f0-75 w-100"
                itemprop="address" 
                itemscope="" 
                itemtype="http://schema.org/PostalAddress">
                <span class="dib" itemprop="streetAddress">
                    <div class="mb0-25">
                        Starlet 91 Road,
                    </div> 
                    <div class="mb0-25">
                        Starlet 91 Road,
                    </div> 
                    <div class="mb0-25">
                        Ministries, Accra.
                    </div> 
                    <div class="mb0-25">
                        Ghana
                    </div> 
                </span>
            </address>
            <div class="flex flex-column justify-center 
                w-80 items-center
                
                f0-75"
            >
                <a  href="https://www.mwh.gov.gh" 
                    title="visit Ministry of Works and Housing Website" 
                    target="_blank" 
                    class="tc f0-75 "
                    rel="noopener noreferrer"
                >
                        <p class="flex items-center justify-center ba br5-00 pv0-25 ph1-00
                        b b--white-90">
                        <img src={mowh}
                        alt="WhatsApp" 
                        class="w1-25 mr0-50" 
                        />
                        www.mwh.gov.gh
                        </p>
                </a>
            </div>
            <p class="lh-copy w-100 tj i">
                The Ministry of Works and Housing (MWH) Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex ducimus deleniti odit aperiam, repudiandae mollitia eum quibusdam voluptatum ab ad et beatae magnam facere labore tenetur officia culpa voluptatem!.
            </p>
        </div>
    )
}

export default MOWH_Address