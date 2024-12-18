import React from 'react'
import { Link } from 'react-router-dom'

const AESL_PrinciplesNav = () => {
    return (
        <div id="pageNav"
            className="grid gtc12 ggap1-00 gc1s12
                pa1-00 mb2-00 w-100
                white-90 bg-blue0"
        >
            <nav id="principles_nav1" 
                className="gr1s1 gc1s1
                    h10-00 w10-00
                    f1-00 shadow-red ba br0-50"
            >
                <ul id=""
                    className="pa0-50"
                >
                    <li className="mb0-50">
                        <Link to ="/principles"
                            className="white-90"
                        >Principles
                        </Link>
                    </li>   
                </ul> 
            </nav>
            <nav id="principles_nav1" 
                className="gr1s1 gc2s1
                    h10-00 w10-00 br0-50
                    f1-00 shadow-red ba br0-50"
            >
                <ul id=""
                    className="pa0-50"
                >
                    <li className="mb0-50">
                        <a href ="#principles_Civic"
                            className="white-90"
                        >
                            Civic
                        </a>
                    </li>
                    <li className="mb0-50">
                        <a href ="#principles_Professionalism"
                            className="white-90" 
                        >
                            Professionalism
                        </a>
                    </li>
                    <li className="mb0-50">
                        <a href ="#principles_Excellence"
                            className="white-90"
                        >
                            Excellence
                        </a>
                    </li>
                    <li className=" mb0-50">
                        <a href ="#principles_IntegrityAndHonesty"
                            className="white-90" 
                        >
                            Integrity and Honesty
                        </a>
                    </li>
                
                </ul>
            </nav>

            <nav id="practice_nav2" 
                className="gr2s1 gr1s1-m gc1s1 gc3s1-m gr1s1-l gc3s1-l
                h10-00 w10-00 shadow-red
                ba br0-50"
            >
                <ul className="pa0-50"
                >
                <li className="mb0-50">
                    <a href ="#principles_TimelinessAndCostEffectiveness"
                        className="white-90" 
                    >Timeliness and Cost Effectiveness</a> 
                </li>                       
                <li className="mb0-50">
                    <a href ="#principles_Sustainability"
                        className="white-90" 
                    >Sustainability</a> 
                </li>                       
                <li className="mb0-50">
                    <a href ="#principles_Empowerment"
                        className="white-90"
                    >Empowerment</a> 
                </li>
                                
                </ul> 
            </nav>

            <nav id="practice_list" 
                className="gc2s1 gr2s1 gr1s1-m gc4s1-m gr1s1-l gc12s1-l
                    h10-00 w10-00 shadow-red br0-50
                    "
            >
                <ul className="
                    w-100 h-100
                    pa0-50
                    blue0
                    bg-white br0-50"
                >
                    
                </ul> 
            </nav>
        </div>
    )
}

export default AESL_PrinciplesNav