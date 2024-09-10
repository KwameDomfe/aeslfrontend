import React from 'react'
import { Link } from 'react-router-dom'

const AESL_PrinciplesNav = () => {
    return (
        <div id="pageNav"
            class="grid gtc12 ggap1-00 gc1s12
                pa1-00 mb2-00 w-100
                white-90 bg-blue0"
        >
            <nav id="principles_nav1" 
                class="gr1s1 gc1s1
                    h10-00 w10-00 br0-50
                    f1-00 shadow-red ba br0-50"
            >
                <ul id=""
                    class="
                        w-100 h-100 
                        pa0-50
                        bg-blue0 br0-50"
                >
                    <li class="mb0-50">
                        <Link to ="/principles"
                            class="white-90 hover-black:hover hover-black:focus" 
                        >Principles
                        </Link>
                    </li>   
                </ul> 
            </nav>
            <nav id="principles_nav1" 
                class="gr1s1 gc2s1
                    h10-00 w10-00 br0-50
                    f1-00 shadow-red ba br0-50"
            >
                <ul id=""
                    class="
                        w-100 h-100 
                        pa0-50
                        bg-blue0 br0-50"
                >
                    <li class="mb0-50">
                        <Link to ="civic"
                            class="white-90 hover-black:hover hover-black:focus" 
                        >Civic</Link>
                    </li>   
                    <li class="mb0-50">
                        <Link to ="professionalism"
                            class="white-90" 
                        >Professionalism</Link> 
                    </li>     
                    <li class="mb0-50">
                        <Link to ="excellence"
                            class="white-90"    
                        >Excellence</Link>
                    </li>     
                    <li class=" mb0-50">
                        <Link to ="integrity-and-honesty"
                            class="white-90" 
                        >Integrity and Honesty</Link>
                    </li>     
                
                </ul> 
            </nav>

            <nav id="practice_nav2" 
                class="gr1s1 gc3s1
                h10-00 w10-00 shadow-red
                ba br0-50
                ">
                <ul class=" 
                        w-100 h-100
                        pa0-50 
                        bg-blue0 br0-50"
                >
                <li class="mb0-50">
                    <Link to ="timeliness-and-cost-effectiveness"
                        class="white-90" 
                    >Timeliness and Cost Effectiveness</Link> 
                </li>                       
                <li class="mb0-50">
                    <Link to ="sustainability"
                        class="white-90" 
                    >Sustainability</Link> 
                </li>                       
                <li class="mb0-50">
                    <Link to ="empowerment"
                        class="white-90" 
                    >Empowerment</Link> 
                </li>                       
                                
                </ul> 
            </nav>

            <nav id="practice_list" 
                class="gr1s1 gc12s1
                    h10-00 w10-00 shadow-red br0-50
                    "
            >
                <ul class="
                    w-100 h-100
                    pa0-50
                    blue0
                    ba
                    bg-white br0-50"
                >
                    
                </ul> 
            </nav>
        </div>
    )
}

export default AESL_PrinciplesNav