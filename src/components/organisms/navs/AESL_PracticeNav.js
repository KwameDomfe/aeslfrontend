import React from 'react'
import { Link } from 'react-router-dom'

const AESL_PracticeNav = () => {
    return (
        <div id="pageNav"
    class="grid gtc12 gc1s12 ggap1-00
        justify-between
        white-90 pv1-00 ph1-00 bg-blue0"
>
    <article id="practice_nav1" 
        class="gr1s1 gc1s1
            w10-00 h0-00 pb-100 
            f1-00
            ba br0-50 shadow-grey"
    >
        <ul id=""
            class="pa0-50"
        >
            <li class="">
                <Link  to="/practice"
                    class="white-90 hover-gold:focus hover-gold:hover" 
                >Practice</Link> 
            </li>     
        </ul> 
    </article>
    <article id="practice_nav1" 
        class="gr1s1 gc2s1
            w10-00 h0-00 pb-100 
            f1-00
            ba br0-50 shadow-grey"
    >
        <ul id=""
            class="pa0-50"
        >
            <li class="">
                <Link  to="/practice/history"
                    class="white-90 hover-gold:focus hover-gold:hover" 
                >History</Link> 
            </li>     
            <li class="">
                <Link  to="/practice/mandate"
                    class="white-90"    
                >Mandate</Link>
            </li>     
            <li class=" ">
                <Link  to="/practice/functions"
                    class="white-90" 
                >Functions</Link>
            </li>     
            <li class="">
                <Link  to="/practice/mission-vision-and-values"
                    class="white-90" 
                >Mission, Vision and Values</Link> 
            </li>                       
                    
        </ul> 
    </article>
    
    <article id="practice_nav2" 
        class="gr1s1 gc3s1
            w10-00 h0-00 pb-100
            f1-00 
            ba br0-50 shadow-grey"
    >
        <ul class="pa0-50"
        >
            <li class="mb0-50">
                <Link  to="/practice/sector-ministry"
                    class="white-90" 
                >Sector Ministry</Link> 
            </li>   
            <li class="mb0-50 ">
                <Link  to="/practice/corporate-governance"
                    class="white-90" 
                >Corporate Governance</Link>
            </li>     
            
            <li class=" mb0-50">
                <Link  to="/practice/management"
                    class="white-90" 
                >Management</Link>
            </li>     
            <li class=" mb0-50">
                <Link  to="/practice/services"
                    class="white-90" 
                >Services</Link>
            </li>     
        </ul> 
    </article>

    <article id="practice_nav3" 
        class="gr1s1-m gc1s1 gr2s1 gc12s1-m
            w10-00 h0-00 pb-100 
            bg-white blue0 br0-50 ba
            f1-00 shadow-grey"
    >
        <ul class="
            pa0-50
           "
        >
            <li class="mb0-50"> 
                <Link class ="blue0" to="/practice/client-speak">
                    Client Speak 
                </Link>
            </li>
            <li class="mb0-50">
                <Link class ="blue0" to="/practice/alliances">
                    Allliances
                </Link>
            </li>
            <li class="mb0-50"> 
                <Link class ="blue0" to="/practice/corporate-responsibilities">
                    Corporate Responsibilities 
                </Link>
            </li>
        </ul> 
    </article>
</div>
    )
}

export default AESL_PracticeNav