import React from 'react'

import mowh from '../../../images/_partials/logos/mwh.jpg'

const MOWH_Address = () => {
    return (
        <div id="mwh_address"
            className="flex flex-column justify-start items-center 
                w-100
                f1-00 tc" 
            itemType=""
        >
            <figure className="flex flex-column justify-center items-center 
                w-100 mb1-00"
            >
                <img src={mowh} 
                    alt=""
                    className="br4-00 w3-00 mb1-00"
                />
                <figcaption itemProp="name" className="tc f1-00 ttu b">
                    Ministry of <br /> Works and Housing
                </figcaption>

            </figure> 

            <address id="Locational_address"
                className="tc f0-75 w-100"
                itemProp="address" 
                itemScope="" 
                itemType="http://schema.org/PostalAddress">
                <span className="dib" itemProp="streetAddress">
                    <div className="mb0-25">
                        Starlet 91 Road,
                    </div> 
                    <div className="mb0-25">
                        Starlet 91 Road,
                    </div> 
                    <div className="mb0-25">
                        Ministries, Accra.
                    </div> 
                    <div className="mb0-25">
                        Ghana
                    </div> 
                </span>
            </address>
            <div className="flex flex-column justify-center 
                w-80 items-center
                
                f0-75"
            >
                <a  href="https://www.mwh.gov.gh" 
                    title="visit Ministry of Works and Housing Website" 
                    target="_blank" 
                    className="tc f0-75 "
                    rel="noopener noreferrer"
                >
                        <p className="flex items-center justify-center ba br5-00 pv0-25 ph1-00
                        b b--white-90">
                        <img src={mowh}
                        alt="WhatsApp" 
                        className="w1-25 mr0-50" 
                        />
                        www.mwh.gov.gh
                        </p>
                </a>
            </div>
            <p className="lh-copy w-100 tj i">
                The Ministry of Works and Housing (MWH) Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex ducimus deleniti odit aperiam, repudiandae mollitia eum quibusdam voluptatum ab ad et beatae magnam facere labore tenetur officia culpa voluptatem!.
            </p>
        </div>
    )
}

export default MOWH_Address