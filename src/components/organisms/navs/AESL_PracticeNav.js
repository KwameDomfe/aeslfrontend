import React from 'react'
import { Link } from 'react-router-dom'

const AESL_PracticeNav = () => {
    return (
        <div id="pageNav"
    className="grid gtc12 gc1s12 ggap1-00
        justify-between
        white-90 pv1-00 ph1-00 bg-blue0"
>
    <article id="practice_nav1" 
        className="gr1s1 gc1s1
            w10-00 h0-00 pb-100 
            f1-00
            ba br0-50 shadow-grey"
    >
        <ul id=""
            className="pa0-50"
        >
            <li className="">
                <Link  to="/practice"
                    className="white-90 hover-gold:focus hover-gold:hover" 
                >Practice</Link> 
            </li>     
        </ul> 
    </article>
    <article id="practice_nav1" 
        className="gr1s1 gc2s1
            w10-00 h0-00 pb-100 
            f1-00
            ba br0-50 shadow-grey"
    >
        <ul id=""
            className="pa0-50"
        >
            <li className="">
                <Link  to="/practice/history"
                    className="white-90 hover-gold:focus hover-gold:hover" 
                >History</Link> 
            </li>     
            <li className="">
                <Link  to="/practice/mandate"
                    className="white-90"    
                >Mandate</Link>
            </li>     
            <li className=" ">
                <Link  to="/practice/functions"
                    className="white-90" 
                >Functions</Link>
            </li>     
            <li className="">
                <Link  to="/practice/mission-vision-and-values"
                    className="white-90" 
                >Mission, Vision and Values</Link> 
            </li>                       
                    
        </ul> 
    </article>
    
    <article id="practice_nav2" 
        className="gr1s1 gc3s1
            w10-00 h0-00 pb-100
            f1-00 
            ba br0-50 shadow-grey"
    >
        <ul className="pa0-50"
        >
            <li className="mb0-50">
                <Link  to="/practice/sector-ministry"
                    className="white-90" 
                >Sector Ministry</Link> 
            </li>   
            <li className="mb0-50 ">
                <Link  to="/practice/corporate-governance"
                    className="white-90" 
                >Corporate Governance</Link>
            </li>     
            
            <li className=" mb0-50">
                <Link  to="/practice/management"
                    className="white-90" 
                >Management</Link>
            </li>     
            <li className=" mb0-50">
                <Link  to="/practice/services"
                    className="white-90" 
                >Services</Link>
            </li>     
        </ul> 
    </article>

    <article id="practice_nav3" 
        className="gr1s1-m gc1s1 gr2s1 gc12s1-m
            w10-00 h0-00 pb-100 
            bg-white blue0 br0-50 ba
            f1-00 shadow-grey"
    >
        <ul className="
            pa0-50
           "
        >
            <li className="mb0-50"> 
                <Link className="blue0" to="/practice/client-speak">
                    Client Speak 
                </Link>
            </li>
            <li className="mb0-50">
                <Link className="blue0" to="/practice/alliances">
                    Allliances
                </Link>
            </li>
            <li className="mb0-50"> 
                <Link className="blue0" to="/practice/corporate-responsibilities">
                    Corporate Responsibilities 
                </Link>
            </li>
        </ul> 
    </article>
</div>
    )
}

export default AESL_PracticeNav