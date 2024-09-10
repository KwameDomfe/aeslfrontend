
import mandate from '../../../images/practice/mandate/00.jpg'
import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import { Link } from 'react-router-dom'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'

const Mandate = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {mandate}
                    title = 'Mandate'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main id="" 
                class="ph1-00"
            >
                <div id="l__3:1"
                    class="grid gtc4"
                >
                    <div id="pageMain"
                        class="gc1s3
                            mb1-00 min-vh-100"
                    >   
                        <article id="pageDetails"
                            class="gc1s3
                                mb1-00 min-vh-100"
                        >   
                            {/* Practice Mandate */}
                            <div id="p--mandate"
                                class="grid gtc12 ggap1-00"
                            >
                                <article id="Project_Overview_1" 
                                    class="gr2s1 gc1s12"
                                >   
                                    <div class="ggap1-00 
                                        pv4-00 mh4-00
                                        tj blue0 lh-copy f1-25"
                                    >
                                        <p>
                                            The Mandate of AESL established by the British was used for all state works over decades post-colonial.
                                        </p>
                                        <p>
                                            The institutions like State Construction Corporation (SCC), State Housing Corporation (SHC), Highways.
                                        </p>
                                        <p>
                                            No privates businesses were allowed to handle state/ public works except the PWD.
                                        </p>
                                    </div>
                                </article>
                            </div>
                            
                            {/* Practice */}
                            <div id="p--mandateGallery"
                                class="gr3s1 gc1s12
                                    grid gtc12 ggap1-00
                                    white-90"
                            >
                                <article id="" 
                                    class="gr1s1 gc1s3
                                    flex items-center justify-center
                                    relative"
                                >
                                     <hgroup 
                                        class="flex flex-column items-center justify-center
                                            pa0-50 bg-blue0 
                                            absolute
                                                ">
                                        <h3>
                                            practice_2
                                        </h3>    
                                        <span>
                                            - Techiman, Ghana.
                                        </span>    
                                    </hgroup>  
                                    <figure 
                                    >
                                        <img src={mandate}
                                            alt=""
                                            class="
                                                w-100 h-100
                                                cover"
                                        /> 
                                    </figure>
                                </article>
                                
                                <article id="passport_office" 
                                    class="gr1s1 gc6s4
                                        flex items-center justify-center
                                        relative"
                                >
                                    <figure class="shadow-5"
                                    >
                                        <img src={mandate}
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
                                        Refeurbished Passport Office
                                        </h3>    
                                        <span>
                                        - Accra , Ghana.
                                        </span>    
                                    </hgroup>  
                                </article>
                            
                                <article id="proposed_apartment_2" 
                                    class="gr2s2 gc1s3
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
                                    <figure class="shadow-5"
                                    >
                                        <img src={mandate}            
                                            alt=""
                                            class="w-100
                                            
                                                ba b--gold 
                                                "
                                        /> 
                                    </figure>
                                </article>
                            
                                <article id="Office_Techiman" 
                                    class="gr4s1 gc8s5
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
                                    <figure 
                                    >
                                        <img src={mandate}
                                            alt=""
                                            class="
                                                ba b--gold 
                                                "
                                        /> 
                                    </figure>
                                </article>
                            
                                <article id="misc_gold" 
                                    class="gr3s1 gc6s1
                                        flex items-center justify-center
                                        bg-gray"
                                >
                                </article>
                            
                                <article id="misc_blue" 
                                    class="gr2s1 gc6s3
                                        flex items-center justify-center
                                        bg-black-90"
                                >
                                        
                                </article>
                                {/* Practice */}
                            </div>
                            {/* Practice */}
                        </article>
                        <SectionFooter
                            sectionTitle = 'Mandate'
                        />
                    </div>
                    {/* Practice Mandate */}

                    <div id="pageAside" 
                        class="gc4s1 
                            w-100 blue0 relative"
                    >
                        <div 
                            class="flex flex-column justify-between
                                min-vh-100 
                                ph2-00 pb1-00
                                pt5-00
                                sticky top-0"
                        >
                            <div
                            >
                                <a href= "/practice"
                                    class="dib mb1-00 
                                        f1-25 blue0 ttu fw6"
                                >
                                    Back to Practice
                                </a>
                                <ul class="mb1-00 bl bw4 pa1-00 b--gray gray f0-75">
                                    <h3 >Mandate</h3>
                                    <li class="mb1-00 i">
                                        <a href="#p--mandate"
                                            class="gray"
                                        >
                                            AESL Mandate
                                        </a>
                                    </li>
                                    <li class="mb1-00 i">
                                        <a href="#p--mandateGallery"
                                            class="gray"
                                        >
                                            AESL Mandate Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div> 

                            <div class="h6-00 gray">
                                <small>Previous</small><br/>
                                <Link to="/practice/history" 
                                    class="mb1-00 f0-75 gray b"
                                >
                                    AESL History
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to="/practice/functions" 
                                    class="mb1-00 f0-75 gray b"
                                >
                                    AESL Functions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageName="Mandate"/>
             {/* Page Footer End */}
        </div>
    )
}

export default Mandate