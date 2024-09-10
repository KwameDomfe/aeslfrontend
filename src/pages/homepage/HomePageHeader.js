import React from 'react'
import ttt from '../../images/index/banner_images/index-01.jpg'


import client_01 from '../../images/index/clients/1.jpg'
import client_02 from '../../images/index/clients/2.jpg'
import client_03 from '../../images/index/clients/3.jpg'
import client_04 from '../../images/index/clients/4.jpg'
import client_05 from '../../images/index/clients/5.jpg'
import client_06 from '../../images/index/clients/6.jpg'
import { Link } from 'react-router-dom'
const HomePageHeader = () => {
  return (
    <header id ="HomePageHeader"
        className="" 
    >   
        <figure id="HomePageHeader--mainBanner"
            className="ma0-00"
        >
            <img src= {ttt}
                alt=""
                className="w-100 vh-60 vh-50-s vh-60-m
                    cover"
            />
            <figcaption className = "ttu blue0"
            >
                <h1 className = "ph1-00 ph4-00-m pv2-00 pv4-00-s ma0-00 f2-25 f2-75-s f3-50-m f4-00-l"
            >
                    Architectural And Engineering Services Limited 
                </h1> 
            </figcaption>
        </figure>
        
        <div id="HomepageHeader--details"
            className="grid gtc12 ggap1-00 
                ph1-00 ph4-00-m"
        >
            {/* AESL Brief Start */}
            <article id="aesl-brief" 
                className="gc1s12 gr1s1 
                    gr1s3-m gc1s11-m
                    grid justify-between
                    w-100
                    mb4-00 mb0-00-m
                    blue0 f1-25 tj"     
            >
                <hgroup className="w-100
                    pr1-00-m 
                    lh-copy"
                >
                    <p>
                        Architectural and Engineering Services Limited (AESL) offers consultancy services in the infrastructure and building construction industry offering architectural and engineering services to public and private sector clients. 
                    </p>
                    <p>
                        Its operations were restructured by an act of parliament, Act 461 Statutory Corporation (Conversion to Companies), in 1993 to transform it from a government corporation since the birth of the first republic into 100% state owned limited liability company. 
                    </p>   
                    <p>
                        With unmatched experience and long history as agency for development consultancy for the state, AESL has been the primus inter paris for the construction industry in Ghana. 
                    </p>   
                    <p>
                        The reputation of the company is wide spread beyond the shores of Ghana with successful project executions in West Africa including countries La Cote D’ivoire, Sierra Leone, Liberia etc. 
                    </p>
                    <div className="flex justify-start items-end mt4-00">
                        <Link to ="{% url 'website:practice-home' %}"
                            className="dib 
                                pa0-50 mr4-00
                                bg-blue0 white-90 f1-00
                                ba b--blue0 br0-25"
                        >Read More</Link> 
                        <Link to ="{% url 'website:practice-home' %}"
                            className="dib 
                                pa0-50 
                                blue0 white-90 f1-00
                                ba br0-25"
                        >Contact Us</Link> 
                    </div> 

                </hgroup>
            </article>
            {/* AESL Brief End */}

            {/* AESL Architecture and Planning Start */}
            <article id="architecture-and-planning" 
                className="gc1s12 gr2s1 
                    gr1s1-m gc1s6-s gc12s1-m
                    grid gtc1
                    w-100 w16-00-m
                    f1-25"
            >
                <figure id=""
                    className="gr1s1 gc1s1"
                >
                    <img src=""
                        alt=""
                        className="w-100
                            br0-50
                            cover"
                    />
                </figure>
                <hgroup id=""
                    className="gr1s1 gc1s1
                    grid justify-between
                    w-100 h0-00 pb-100
                    bg-black-70 white-90 br0-50
                    ttu"
                >
                    <h3 
                        className="pa1-00"
                    >
                        Architecture & Planning
                    </h3>
                    <ul className="grid ph1-00 lh-copy justify-between">
                        <li>
                            <Link to ="/">Architecture</Link>
                        </li>
                        <li>
                            <Link to ="/">Land Surveying</Link>
                        </li>
                        <li>
                            <Link to ="/">Quantity Surveying</Link>
                        </li>
                        <li>
                            <Link to ="/">Valuation</Link>
                        </li>
                    </ul>
                </hgroup> 
            </article>
            {/* AESL Architecture and Planning End */}

            {/* AESL Engineering Start */}
            <article id="engineering" 
                className="gc1s12 gr3s1 gr2s1-s gc7s6-s gr2s1-m gc12s1-m
                    w-100 w16-00-m
                    f1-25
                    grid gtc1"
            >
                <figure className="gc1s1 gr1s1"
                >
                    <img src=""
                        alt=""
                        className="w-100 flex
                            br0-50 ba b--gold
                            cover"
                    />
                </figure>
                <hgroup className="gc1s1 gr1s1 
                    flex flex-column justify-start
                    w-100 h0-00 pb-100 br0-50
                    white-90 
                    bg-black-70  ttu"
                >
                    <h3 className="pa1-00
                        
                        ">
                        Engineering
                    </h3> 
                    <ul className="ph1-00 w-100 lh-copy">
                        <li>
                            <Link to ="/">Civil / Structural</Link>
                        </li>
                        <li>
                            <Link to ="/">Geotech</Link>
                        </li>
                        <li>
                            <Link to ="/">Installations </Link>
                        </li>
                        <li>
                            <Link to ="/">Water</Link>
                        </li>
                    </ul>    
                </hgroup> 
            </article>
            {/* AESL Engineering End */}

            {/* Selected Clients Start */}
            <section id="HomePageMain--SelectedClients" 
                className="gc1s12 gr4s1"
            >
                <figure id=""
                    className="grid gtc6 ggap1-00 items-center justify-center
                        w-100 h-100 
                        pv4-00-s"
                >
                    <img src={client_01} 
                        alt=""
                        className="gr1s1 gc1s3 gc1s2-s gc1s1-m
                            w-100 "
                    />
                    <img src={client_02} 
                        alt=""
                        className="gr1s1 gc4s3 gc3s2-s gc2s1-m
                            w-100"
                    />
                    <img src={client_03} 
                        alt=""
                        className="gr2s1 gc1s3 gr1s1-s gc5s2-s gc3s1-m
                            w-100"
                    />
                    <img src={client_04}
                        alt=""
                        className="gr2s1 gc4s3 gc1s2-s gr1s1-m gc4s1-m
                            w-100"
                    />
                    <img src={client_05}
                        alt=""
                        className="gr3s1 gc1s3 gc3s2-s gr2s1-s gr1s1-m gc5s1-m
                            w-100"
                    />
                    <img src={client_06} 
                        alt=""
                        className="gr3s1 gc4s3 gr2s1-s gc5s2-s gr1s1-m gc6s1-m
                            w-100"
                    />
                </figure>
            </section>
            {/* Selected Clients End */}
        </div>
    </header>
  )
}

export default HomePageHeader