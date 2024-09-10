import mvv from '../../../images/practice/mission_vision_values/00.jpg'
import mission from '../../../images/practice/mission_vision_values/Mission.PNG'
import vision from '../../../images/practice/mission_vision_values/vision.PNG'
import values from '../../../images/practice/mission_vision_values/values.PNG'

import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import { Link } from 'react-router-dom'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'

const MVV = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {mvv}
                    title = 'Mission Vision and Values'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main class="ph1-00">
                <div class="grid gtc4">

                    <div id="pageDetails"
                        class="gc1s3
                            mb1-00 min-vh-100"
                    >
                        <div id="mvv" 
                            class="grid gtc12 ggap1-00"
                        >
                            <article id="mvv--overview" 
                                class="gr2s1 gc1s12"
                            >
                                <div class="flex ggap1-00 
                                    pv4-00 mh4-00
                                    tj blue0 lh-copy f1-25"
                                >
                                    <div>
                                        <p>
                                            The Mission Vision and Values of AESL established by the British was used for all state works over decades post-colonial.
                                        </p>
                                        <p>
                                            The institutions like State Construction Corporation (SCC), State Housing Corporation (SHC), Highways.
                                        </p>
                                        <p>
                                            No privates businesses were allowed to handle state/ public works except the PWD.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* <!-- Mission Start --> */}
                        <div id="mvv--mission"
                            class="grid gtc12 ggap1-00
                                
                                mb3-00"
                        >
                            <header id="mission_header"
                                class="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    class=""
                                >
                                    <h2 class="mv1-00 pl1-00
                                        white-90 f2-00 ttu"
                                    >
                                        Mission
                                    </h2>     
                                </hgroup> 
                            </header>
                            <article id="" 
                                class="gr2s1 gc1s12 grid gtc12 blue0 "
                            >   
                                <div id ="mission_text" 
                                    class="gc1s5 gr1s1 f1-25 grid items-center justify-center"
                                >
                                    <p>
                                        “The Architectural and Engineering Services Limited, a firm of Consulting Engineers, Architects and Surveyors, exists to provide innovative and high quality services/ solutions in the design and supervision of projects in an efficient, timely and cost effective manner to delight its Clients within and outside Ghana, using the talents of highly developed, motivated, dedicated and well-managed workforce”.
                                    </p>
                                </div>
                            
                                <div id="mission_gallery"
                                    class="gr1s1 gc6s7
                                            ggap1-00
                                            ">
                                    
                                    <article id="" 
                                        class="gr1s1 gc1s12
                                        flex flex-column items-center justify-center"
                                    >
                                        <figure >
                                            <img src={mission}
                                                alt=""
                                                class="
                                                    w-100 h-100
                                                    cover"
                                                /> 
                                        </figure>
                                        <figcaption>AESL Mission</figcaption>
                                    </article>
                                </div>
                            
                            </article>
                            <footer id="mission_footer" class="gr3s1 gc1s12 pa1-00 bg-gray w-100">
                                Practice || Mission Vision and Values 
                            </footer> 
                        </div>
                        {/* <!-- Mission End --> */}

                        {/* <!-- Vision Start --> */}
                        <div id="mvv--vision"
                            class="grid gtc12 ggap1-00
                                
                                mb3-00"
                        >
                            <header class="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    class=""
                                >
                                    <h2 class="mv1-00 pl1-00
                                        white-90 f2-00 ttu"
                                    >
                                    Vision
                                    </h2>     
                                </hgroup> 
                            </header>
                            <article id="Project_Overview_1" 
                                class="gr2s1 gc1s12 grid gtc12 blue0"
                            >   
                                <div class="gc8s5 gr1s1 f1-25 grid items-center justify-center">
                                    <p>
                                        “The Corporate vision is to attain and sustain leadership in the Construction Consultancy Service industry in Ghana as a world class company”.

                                    </p>
                                </div>
                                
                                {/* <!-- Practice --> */}
                                <div id="practice"
                                    class="gr1s1 gc1s7
                                    ggap1-00">
                                    
                                    <article id="" 
                                        class="gr1s1 gc1s12
                                        flex items-center justify-center
                                        relative">
                                        <figure >
                                            <img src={vision}
                                                alt=""
                                                class="
                                                    w-100 h-100
                                                    cover"
                                                /> 
                                        </figure>
                                    </article>
                                
                                    <article id="misc_gold" 
                                        class="gr3s1 gc6s1
                                            flex items-center justify-center
                                            bg-gold
                                            ">
                                    </article>
                                
                                    <article id="misc_blue" 
                                        class="gr2s1 gc6s3
                                            flex items-center justify-center
                                            bg-black-90
                                            ">
                                    </article>
                                    {/* <!-- Practice --> */}
                                
                                </div>
                                {/* <!-- Practice --> */}
                            </article>
                            <footer class="gr3s1 gc1s12 pa1-00 bg-gray w-100">
                                Practice || Mission Vision and Values 
                            </footer>
                        </div>
                        {/* <!-- Vision End --> */}

                        {/* <!-- Values Start --> */}
                        <div id="mvv--values"
                            class="grid gtc12 ggap1-00
                                
                                "
                        >
                            <header id="values_header"
                                class="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    class=""
                                >
                                    <h2 class="mv1-00 pl1-00
                                        white-90 f2-00 ttu"
                                    >
                                        Values
                                    </h2>     
                                </hgroup> 
                            </header>
                            <article id="values_main" 
                                class="gr2s1 gc1s12 grid gtc12 blue0"
                            >   
                                <div class="gc1s5 gr1s1 f1-25 grid items-center justify-center">
                                    <p>
                                        Professionalism
                                        Excellence
                                        Integrity and Honesty
                                        Timely and Cost effectiveness in service delivery to create value for money.
                                    </p>
                                </div>
                                
                                {/* <!-- Practice --> */}
                                <div id="practice"
                                    class="gr1s1 gc6s7
                                    ggap1-00">
                                    <article id="proposed_apartment_2" 
                                        class="gr2s2 gc2s10
                                        flex items-center justify-center
                                        relative">
                                        <figure class="shadow-5">
                                            <img src={values}
                                                alt=""
                                                class="w-100
                                                
                                                    ba b--gold 
                                                    "
                                                /> 
                                        </figure>
                                    </article>
                                    <article id="misc_gold" 
                                        class="gr3s1 gc6s1
                                            flex items-center justify-center
                                            bg-gold
                                            ">
                                    </article>
                                    <article id="misc_blue" 
                                        class="gr2s1 gc6s3
                                            flex items-center justify-center
                                            bg-black-90
                                            ">
                                    </article>
                                    {/* <!-- Practice --> */}
                                </div>
                                {/* <!-- Practice --> */}
                            </article>
                            <footer id="page_footer"
                                class="gr3s1 gc1s12 pa1-00 white-90 bg-gray w-100">
                                Practice || Mission Vision and Values 
                            </footer>
                        </div>
                        {/* <!-- Values End --> */}
                    </div>

                    <div id="pageNav" 
                        class="gc4s1 
                            w-100 blue0 relative"
                    >
                        <div class="flex flex-column justify-between
                            min-vh-100 
                            ph2-00 pb1-00
                            pt5-00
                            sticky top-0"
                        >
                            <div>
                                <Link to = "/practice"
                                    class="dib mb1-00 
                                        f1-25 blue0 ttu fw6">Back to Practice
                                </Link>
                                <ul class="mb1-00 bl bw4 pa1-00 b--gray gray f0-75">
                                    <h3 >Mission vision Values</h3>
                                    <li class="mb1-00 i">
                                        <a href="#mvv--overview"
                                            class="gray"
                                        >
                                        Overview</a> 
                                    </li>
                                    <li class="mb1-00 i">
                                        <a href="#mvv--mission"
                                            class="gray"
                                        >
                                        Mission</a> 
                                    </li>
                                    <li class="mb1-00 i">
                                        <a href="#mvv--vision"
                                            class="gray"
                                        >
                                        Vision</a> 
                                    </li>
                                    <li class="mb1-00 i">
                                        <a href="#mvv--values"
                                            class="gray"
                                        >
                                        Values</a> 
                                    </li>
                                </ul>
                            </div> 

                            <div class="h6-00 gray">
                                <small>Previous</small><br/>
                                <Link to ="/practice/functions" 
                                    class="mb1-00 f0-75 gray b"
                                >
                                    AESL Functions
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to ="/practice/sector-ministry" 
                                    class="mb1-00 f0-75 gray b"
                                >
                                    AESL Sector Ministry
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageName="Mission Vision and Values"/>
            {/* Page Footer End */}
        </div>
    )
}

export default MVV