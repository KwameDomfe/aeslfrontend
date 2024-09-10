import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'

import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import sectorMinistry from '../../../images/practice/sector_ministry/sm-02.jpg'
import { Link } from 'react-router-dom'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
const SectorMinistry = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {sectorMinistry}
                    title = 'Sector Ministry'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main class="ph1-00">
            <div class="grid gtc4">
                <div id="pageMain"
                    class="gc1s3 grid
                        mb1-00 min-vh-100"
                >   
                    {/* <!-- Sector Ministry Overview --> */}
                        <div id="sm--sectorMinistryOverview">
                            <article id="Project_Overview_1" 
                                class="gr2s1 gc2s10 "
                            >   
                                <div class="flex ggap1-00 
                                    pv4-00 mh4-00
                                    tj blue0 lh-copy f1-25"
                                >
                                    <div>
                                        <p>
                                            The Ministry of Works and Housing (MWH) established by the British was used for all state works over decades post-colonial.
                                        </p>
                                        <p>
                                            The institutions like State Construction Corporation (SCC), State Housing Corporation (SHC), Highways.
                                        </p>
                                        <p>
                                            No privates businesses were allowed to handle state/ public works except the PWD.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* <!-- Practice --> */}
                                <div id="practice"
                                    class="
                                        grid gtc12 ggap1-00
                                        white-90 mb2-00"
                                >
                                
                                    <article id="" 
                                        class="gr1s1 gc1s6
                                        flex items-center justify-center
                                        relative">
                                        <hgroup 
                                            class="flex flex-column items-center justify-center
                                                pa0-50 bg-blue0 
                                                absolute
                                                    ">
                                            <h3>
                                                Caption One
                                            </h3>    
                                            <span>
                                                - Techiman, Ghana.
                                            </span>    
                                        </hgroup>
                                        <figure >
                                            <img src={sectorMinistry}
                                                alt=""
                                                class="
                                                    
                                                    cover"
                                                /> 
                                        </figure>
                                    </article>
                                    
                                    <article id="passport_office" 
                                        class="gr1s1 gc7s6
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure class="shadow-5">
                                            <img src={sectorMinistry}            
                                                alt=""
                                                class="pa0-50"
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-50
                                                bg-blue0
                                                absolute
                                                    ">
                                            <h3>
                                            Caption Two
                                            </h3>    
                                            <span>
                                            - Accra , Ghana.
                                            </span>    
                                        </hgroup>
                                    </article>
                                
                                    <article id="proposed_apartment_2" 
                                        class="gr2s1 gc1s6
                                        flex items-center justify-center
                                        relative"
                                    >
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-50
                                                bg-blue0
                                                absolute
                                                    ">
                                            <h3>
                                            Proposed Apartment
                                            </h3>    
                                            <span>
                                            - Accra , Ghana.
                                            </span>    
                                        </hgroup>
                                        <figure class="shadow-5">
                                            <img src={sectorMinistry}
                                                alt=""
                                                class="w-100
                                                
                                                    ba b--gold 
                                                    "
                                                /> 
                                        </figure>
                                    </article>
                                
                                    <article id="Office_Techiman" 
                                        class="gr2s1 gc7s6
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <hgroup 
                                            class="flex items-center justify-center
                                                bg-blue0
                                                absolute
                                                    ">
                                            <h3 class="
                                                    flex items-center justify-around
                                                    pa0-50
                                                    white-90">
                                                OFFICE BLOCK
                                            </h3>    
                                            <span class="white-90 flex items-center justify-center">
                                                - Techiman, Ghana.
                                            </span>    
                                        </hgroup>
                                        <figure >
                                            <img src={sectorMinistry}            
                                                alt=""
                                                class="ba b--gold"
                                            /> 
                                        </figure>
                                    </article>
                                
                                    <article id="misc_gold" 
                                        class="gr5s1 gc6s1
                                            flex items-center justify-center h4-00
                                            bg-gray"
                                    >
                                    </article>
                                
                                    <article id="misc_black_1" 
                                        class="gr4s1 gc9s3
                                            flex items-center justify-center h6-00
                                            bg-black-90"
                                    >
                                    </article>

                                    <article id="misc_black_2" 
                                        class="gr5s1 gc9s3
                                            flex items-center justify-center h6-00
                                            bg-black-90"
                                    >
                                    </article>

                                    <article id="misc_black_3" 
                                        class="gr4s1 gc2s3
                                            flex items-center justify-center h6-00
                                            bg-black-90" 
                                    >
                                    </article>
                                    {/* <!-- Practice --> */}
                                
                                </div>
                                {/* <!-- Practice --> */}
                            </article>

                            <footer class="gr3s1 gc1s12 
                                w-100
                                pa1-00 mb2-00 
                                bg-gray white-90
                                i"
                            >
                            Practice || Sector Ministry || Overview
                            </footer> 
                        </div>
                    {/* <!-- Sector Ministry Overview --> */}
                    {/* <!-- Sector Minister --> */}
                        <div id="sm--sectorMinister"
                            class="grid gtc12 ggap1-00"    
                        >
                            <header id=""
                                class="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    class=""
                                >
                                    <h2 class="mv1-00 pl1-00
                                        white-90 f2-00 ttu"
                                    >
                                        sector minister
                                    </h2>     
                                </hgroup> 
                            </header>
                            <article id="" 
                                class="gr2s1 gc1s12 grid gtc12"
                            >   
                                <div class="gr1s1 gc7s6 ph2-00 blue0">
                                    <p>
                                        The Minister for Works and hosibb  bla bla bla.
                                    </p>
                                    <p>
                                        The institutions like State Construction Corporation (SCC),
                                    </p>
                                    <p>
                                        No privates businesses were allowed to handle state/ public works except the PWD.
                                    </p> 
                                    
                                </div>
                                
                                {/* <!-- Practice --> */}
                                <div id=""
                                    class="gr1s1 gc1s6
                                            
                                            white-90">
                                    
                                    <article id="" 
                                        class="
                                        flex items-center justify-center
                                        relative">
                                        <hgroup 
                                            class="flex flex-column items-center justify-center
                                                pa0-50 bg-blue0 
                                                absolute
                                                    ">
                                            <h3>
                                            Hon. Asenso Boakye
                                            </h3>    
                                            <span>
                                                Minister
                                            </span>    
                                        </hgroup>
                                        <figure >
                                            <img src={sectorMinistry}
                                                alt=""
                                                class="
                                                    w-100 h-100
                                                    cover"
                                                /> 
                                        </figure>
                                    </article>
                                    {/* <!-- Practice --> */}
                                
                                </div>
                                {/* <!-- Practice --> */}
                            </article>
                            <footer class="gr3s1 gc1s12 
                                w-100
                                pa1-00 
                                bg-gray white-90
                                i"
                            >
                                Practice || Sector Ministry || Sector Minister
                            </footer>
                        </div>
                    {/* <!-- Sector Minister --> */}
                </div>

                <div id="" 
                    class="gc4s1 
                        w-100 blue0 relative">
                    <div class="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pb1-00
                        pt5-00
                        sticky top-0"
                    >
                        <div>
                            <Link to= "/practice"
                                class="dib mb1-00 
                                    f1-25 blue0 ttu fw6">Back to Practice
                            </Link>
                            <ul class="mb1-00 bl bw4 pa1-00 b--gray gray f0-75">
                                <h3 >Sector Ministry</h3>
                                <li class="mb1-00 i">
                                    <a href="#sm--sectorMinistryOverview"
                                        class="gray"
                                    >
                                        Ministry of Works and Housing
                                    </a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#sm--sectorMinister"
                                        class="gray"
                                    >
                                        Sector Minister
                                    </a>
                                </li>
                            </ul>
                        </div> 

                        <div class="h6-00 gray">
                            <small>Previous</small><br/>
                            <Link to="/practice/mission-vision-and-values" 
                                class="mb1-00 f0-75 gray b"
                            >
                                AESL Mission, Vision and Values
                            </Link> <br/><br/>
                            <small>Next</small><br/>
                            <Link to="/practice/corporate-governance" 
                                class="mb1-00 f0-75 gray b"
                            >
                                AESL Corporate Governance
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageName="Sector Ministry"/>
            {/* Page Footer End */}
        </div>
    )
}

export default SectorMinistry