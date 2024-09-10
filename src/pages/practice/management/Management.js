import management from '../../../images/practice/management/00.jpeg'

import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import { Link } from 'react-router-dom'
import md01 from '../../../images/practice/management/managing-director/md-01.jpg'
import md02 from '../../../images/practice/management/managing-director/md-02.JPG'
import md07 from '../../../images/practice/management/managing-director/md-07.jpeg'
import avatar from '../../../images/placeholders/regular_images/avatar-01.png'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
const Management = () => {
    
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {management}
                    title = 'Management'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main class="ph1-00"
            >
                <div class="grid gtc4"
                >
                    <div id="pageDetails"
                        class="gc1s3
                            mb1-00 min-vh-100"
                    >   
                        {/* <!-- Practice Management --> */}
                        <div id="" 
                            class=""
                        >
                            {/* <!-- Overview --> */}
                            <div id="management--overview"
                                class="grid gtc12 ggap1-00"
                            >
                                {/* <!-- Overview Description --> */}
                                <article id="" 
                                    class="gr1s1 gc1s12 ggap1-00 flex"
                                >
                                    <div class="flex flex-column ggap1-00 
                                        pv4-00 mh4-00
                                        tj blue0 lh-copy f1-25"
                                    >
                                            <p>
                                                The Management of AESL established by the British was used for all state works over decades post-colonial.
                                            </p>
                                            <p>
                                                The institutions like State Construction Corporation (SCC), State Housing Corporation (SHC), Highways.
                                            </p>
                                            <p>
                                                No privates businesses were allowed to handle state/ public works except the PWD.
                                            </p>
                                    </div>
                                </article>
                                {/* <!-- Overview Description --> */}
                            </div>
                            {/* <!-- Overview --> */}

                            {/* <!--Managing Director --> */}
                            <div id="management--managingDirector"
                                class="gr4s1 gc1s12
                                    grid gtc12 ggap1-00
                                    mb3-00"
                            >
                                <header id=""
                                    class="gr1s1 gc1s12 
                                        w-100 h-100
                                        white-90
                                        bg-gray" 
                                >
                                    <hgroup id=""
                                        class=""
                                    >
                                        <h2 class="pv1-00 pl1-00
                                            f2-00 ttu mb0-00"
                                        >
                                            Managing Director
                                        </h2>     
                                    </hgroup> 
                                </header>

                                <article id="" 
                                    class="gr4s1 gc1s12
                                        flex flex-column justify-between
                                        pa2-00 
                                        bg-blue0 white-90"
                                >
                                    <h2 class = "mb1-00"
                                    >
                                        Arc. Isaac Agyei Marfo
                                    </h2>
                                    <h3 class = "mb1-00"
                                    >
                                        Managing Director
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maiores soluta sit in suscipit quibusdam aliquid laboriosam, voluptatibus aspernatur porro molestias corrupti animi alias quo! Minus quidem itaque iusto hic?
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis repudiandae suscipit alias error. Saepe ratione nesciunt obcaecati consectetur, quae dolorem harum odio at, eos sint hic dolorum debitis corporis!
                                    </p>
                                    <div>
                                        <Link to ="/practice/management/managing-director"
                                            class="ba br0-25 dib mt2-00 white-90 pa0-50"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </article>
                                
                                <article id="" 
                                    class="gr2s1 gc1s12
                                        flex items-end justify-center
                                        relative
                                        white-90"
                                >
                                    <figure class="shadow-5 w-100">
                                        <img src={md01}
                                            alt=""
                                            class="pa0-50 w-100"
                                        /> 
                                    </figure>
                                    <hgroup 
                                        class="flex flex-column justify-start 
                                        pa0-50 ma2-00
                                        bg-gray 
                                        f0-75 ttu fw6
                                        ba
                                        absolute
                                                ">
                                        <h3>
                                            Lorem ipsum dolor sit amet consectetur.
                                        </h3>
                                        <span>
                                            Location, Date.
                                        </span>
                                    </hgroup> 
                                </article>

                                <article id="managing-director-message" 
                                    class="gr5s1 gc1s12
                                        flex items-end justify-center
                                        pa4-00
                                        white-90"
                                >
                                    <hgroup 
                                        class="flex flex-column justify-start 
                                        pa4-00
                                        bg-gray 
                                        fw4
                                        ba
                                        lh-copy"
                                    >
                                        <h2>
                                            Managing Director's Message
                                        </h2>
                                        <p class=" tts">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi aspernatur a laudantium quaerat provident neque ipsam accusamus suscipit totam. Eaque velit beatae ratione, odit dolorem dolore at vel cumque optio ea, voluptates dolores sequi voluptas eligendi labore sit impedit.
                                        </p>    
                                        <p class=" ttl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi aspernatur a laudantium quaerat provident neque ipsam accusamus suscipit totam. Eaque velit beatae ratione, odit dolorem dolore at vel cumque optio ea, voluptates dolores sequi voluptas eligendi labore sit impedit.
                                        </p>    
                                        <p class=" ttl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi aspernatur a laudantium quaerat provident neque ipsam accusamus suscipit totam. Eaque velit beatae ratione, odit dolorem dolore at vel cumque optio ea, voluptates dolores sequi voluptas eligendi labore sit impedit.
                                        </p>    
                                        <p class=" ttl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi aspernatur a laudantium quaerat provident neque ipsam accusamus suscipit totam. Eaque velit beatae ratione, odit dolorem dolore at vel cumque optio ea, voluptates dolores sequi voluptas eligendi labore sit impedit.
                                        </p>    
                                    
                                    </hgroup> 
                                </article>
            
                                <article id="" 
                                    class="gr3s1 gc1s4
                                    flex items-end justify-center
                                    relative
                                    white-90"
                                >
                                    <hgroup 
                                        class="flex flex-column justify-start 
                                            pa0-50 ma2-00
                                            bg-gray 
                                            f0-75 ttu fw6
                                            ba
                                            absolute
                                                ">
                                        <p>
                                            Md with Director General of Ghana Sports Council Prof. Twumasi
                                        </p>    
                                        <span>
                                            Accra Sports Stadium, Feb. 2022
                                        </span>
                                    </hgroup> 
                                    <figure class="shadow-5 w-100">
                                        <img src={md02}
                                            alt=""
                                            class="w-100
                                                ba b--gold"
                                            />
                                    </figure>
                                </article>

                                <article id="" 
                                    class="gr3s1 gc5s4
                                        flex items-end justify-center
                                        relative
                                        white-90"
                                >
                                    <hgroup 
                                        class="flex flex-column justify-start 
                                            pa0-50 ma2-00
                                            bg-gray 
                                            f0-75 ttu fw6
                                            ba
                                            absolute"
                                    >
                                        <h3>
                                            MD with President, Hon Minister for Local Govt,
                                        </h3>    
                                        <span>
                                            Location, Date.
                                        </span>    
                                    </hgroup> 
                                    <figure >
                                        <img src={md07}
                                            alt=""
                                            class="w-100
                                                ba b--gold 
                                                "
                                            /> 
                                    </figure>
                                </article>

                                <article id="a" 
                                    class="gr3s1 gc9s4
                                        flex items-end justify-center
                                        bg-gold relative
                                        white-90"
                                >
                                    <hgroup id=""
                                        class="flex flex-column justify-start 
                                            pa0-50 ma2-00
                                            bg-gray 
                                            f0-75 ttu fw6
                                            ba
                                            absolute"
                                    >
                                                    
                                        <h3>
                                            Lorem ipsum dolor sit amet consectetur.
                                        </h3>    
                                        <span>
                                            Location, Date.
                                        </span>
                                    </hgroup> 
                                    <figure >
                                        <img src={md01}
                                            alt=""
                                            class="w-100
                                                ba b--gold 
                                                "
                                        /> 
                                    </figure>
                                </article>
                            </div>
                            {/* <!--Managing Director --> */}
                            
                            {/* <!-- Deputy Managing Directors Start--> */}
                            <div id="management--deputyManagingDirectors"
                            >
                                <header id=""
                                    class="gr1s1 gc1s12 
                                        w-100 h-100
                                        bg-gray mb1-00
                                        white-90" 
                                >
                                    <hgroup id=""
                                        class=""
                                    >
                                        <h2 class="pv1-00 pl1-00 mb0-00
                                            f2-00 ttu"
                                        >
                                            Deputy Managing Directors
                                        </h2>     
                                        
                                    </hgroup> 
                                </header>

                                <div id="deputy-managing-director-architecture-and-planning"
                                    class="gr4s1 gc1s12
                                        grid gtc12 ggap1-00
                                        white-90 mb3-00"
                                >
                                    <header class="gc1s12 gr1s1">
                                        <h3 class="mb1-00 pl1-00 
                                            f1-50 ttu blue0"
                                        >
                                            Deputy Managing Director - Architecture and Planning
                                        </h3>   
                                    </header>

                                    <article id="" 
                                        class="gr3s1 gc1s12
                                            flex flex-column justify-between
                                            relative 
                                            w-100 h-100
                                            pa2-00 ph2-00
                                            bg-blue0"
                                    >
                                        <h2 class = "mb1-00">VACANT</h2>
                                        <h3 class = "mb1-00">Deputy Managing Director (<span class = "mb1-00"> Architecture and Planning </span>)</h3>
                                        
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis ipsa repudiandae nisi, fugit nulla corporis reprehenderit dolores dolorum vel, mollitia excepturi laborum aperiam voluptates perferendis esse quo voluptate rem.
                                        </p>
                                        <div>
                                            <Link to="/practice/management/deputy-managing-director/architecture-and-planning"
                                                class="ba br0-25 dib mt2-00 white-90 pa0-50"
                                            >
                                                    Read More
                                            </Link>
                                        </div>
                                    </article>
                                
                                    <article id="" 
                                        class="gr2s1 gc1s12
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure class="shadow-5">
                                            <img src={avatar}
                                                alt=""
                                                class="pa0-50 w-100"
                                            /> 
                                        </figure>
                                    </article>
                                </div>

                                <div id="deputy-managing-director-engineering"
                                    class="gr4s1 gc1s12
                                        grid gtc12 ggap1-00
                                        white-90 mb3-00"
                                >
                                    <header class="gc1s12 gr1s1">
                                        <h3 class="mb1-00 pl1-00 
                                            f1-50 ttu blue0"
                                        >
                                        DEPUTY MANAGING DIRECTOR - Engineering
                                        </h3>   
                                    </header>

                                    <article id="" 
                                        class="gr3s1 gc1s12
                                            flex flex-column justify-between
                                            relative 
                                            w-100 h-100
                                            pa2-00 ph2-00
                                            bg-blue0"
                                    >
                                        <h2 class = "mb1-00">VACANT</h2>
                                        <h3 class = "mb1-00">Deputy Managing Director (<span class = "mb1-00">Engineering</span>)</h3>
                                        
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem rerum nihil quidem corrupti quam. Modi magnam ipsam sunt ullam quasi, tempora voluptatibus corrupti neque odio perspiciatis fugit et enim aliquid.</p>
                                        <div>
                                        <Link to="/practice/management/deputy-managing-director/engineering"
                                            class="ba br0-25 dib mt2-00 white-90 pa0-50">
                                                Read More
                                        </Link>
                                        </div>
                                    </article>
                                    
                                    <article id="" 
                                        class="gr2s1 gc1s12
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure class="shadow-5">
                                            <img src={avatar}
                                                alt=""
                                                class="pa0-50 w-100"
                                            />
                                        </figure>
                                    </article>
                                </div>

                                <footer id="">

                                </footer>
                            </div>
                            {/* <!-- Deputy Managing Directors End-->    */}
            
                            {/* <!-- Heads of Departments -->    */}
                            <div id="management--headsOfDepartments">
                                <header id=""
                                    class="gr1s1 gc1s12 
                                        w-100 h-100
                                        bg-gray white-90" 
                                >
                                    <hgroup id=""
                                        class=""
                                    >
                                        <h2 class="pv1-00 pl1-00 mb0-00
                                            f2-00 ttu"
                                        >
                                        Heads of Departments
                                        </h2>       
                                    </hgroup> 
                                </header> 
                                {/* <!-- Architecture and Planning Start--> */}
                                <div id="heads--architecture-and-planning" 
                                    class="grid gtc12 
                                        mb2-00"
                                >   
                                    <header id=""
                                        class="gc1s12 gr1s1 
                                        pa1-00 
                                        bg-white"
                                    >
                                        <h2 class="ma0-00 pb1-00 bb"> 
                                            Architecture and Planning
                                        </h2>
                                    </header>   
                                    <div id="head-architecture"
                                        class="gr3s1 gc1s6
                                            grid gtc12"
                                    >
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Isaac A. Commey</h3>
                                            <p class = "mb2-00">Architecture</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 pa0-25 f0-75 blue0">Read More</a>
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                                    </div>
                
                                    <div id="head-valuation"
                                        class="gr3s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Surv. Sylvester Akuoko</h3>
                                            <p class = "mb2-0">Valuation</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                    class="mt2-00 pa0-25 
                                                        ba br0-25 
                                                        f0-75 blue0"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                        </article>
                        
                                    </div>
                                    
                                    <div id="head-quantity-surveying"
                                        class="gr4s1 gc1s6
                                            grid gtc12"
                                    >
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Surv. Paul K. Ansong</h3>
                                            <p class = "mb0-50">Quantity Surveying</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                    class="ba br0-25 mt2-00 pa0-25 f0-75 blue0">Read More</a>
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id="head-land-surveying"
                                        class="gr4s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Surv. Evans Boateng</h3>
                                            <p class = "mb0-50">Land Surveying</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 pa0-25 f0-75 blue0">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                </div>
                                {/* <!--Architecture and Planning End --> */}
                            
                                {/* <!-- Engineering Start -->    */}
                                <div id="heads--engineering" 
                                    class="grid gtc12 ggap2-00 mb2-00"
                                >
                                    <header class="bg-white gc1s12 gr1s1 pa1-00">
                                        <h2 class="ma0-00 pb1-00 bb"> Engineering</h2>
                                    </header>
                                
                                    <div id="head-civil"
                                        class="gr2s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <div id="" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                            "
                                        >
                                            <h3 class = "mb0-50">Ing. Charles Adigvom</h3>
                                            <p class = "mb0-50">Civil / Structures</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 pa0-25 blue0 f0-75">Read More</a>
                        
                                            </div>
                                        </div>
                                        
                                        <div id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </div>
                        
                                    </div>
                                    
                                    <div id="head-installations"
                                        class="gr2s1 gc7s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00"
                                        >
                                            <h3 class = "mb0-50">Ing. Mike Addo</h3>
                                            <p class = "mb0-50">Installations</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 pa0-25 blue0 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id="head-water"
                                        class="gr3s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        <article id="" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Ing. Ebenezer Buertet Mac-Tetteh</h3>
                                            <p class = "mb0-50">Water</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 pa0-25 blue0 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                        </article>
                        
                                    </div>
                                    
                                    <div id="head-geotech"
                                        class="gr3s1 gc7s6
                                            grid gtc12
                                            ">
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Ing. Joseph Kwasi Oddei</h3>
                                            <p class = "mb0-50">Geotechnical</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 pa0-25 blue0 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                </div>
                                {/* <!-- Engineering End -->  */}
                
                                {/* <!-- Admistratvie Heads - Headquarters Start -->   */}
                                <div id="heads--administrative" 
                                    class="grid gtc12 ggap2-00 mb2-00"
                                >
                                    <header class="bg-white gc1s12 gr1s1 pa1-00">
                                        <h2 class="ma0-00 pb1-00 bb">Administrative</h2>
                                    </header>
                                
                                    <div id="head-finance"
                                        class="gr3s1 gc1s6
                                            grid gtc12
                                            ">
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Mr. Robert Mbir</h3>
                                            <p class = "mb0-50">Director, Finance</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id=""
                                        class="gr3s1 gc7s6
                                            grid gtc12
                                            f1-00">
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Florence B. Kumi-Sakyi (Mrs.)</h3>
                                            <p class = "mb0-50">Director, HRMS</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id=""
                                        class="gr4s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. E. Otchere-Darko</h3>
                                            <p class = "mb0-50">Director, Information Techlology</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id=""
                                        class="gr4s1 gc7s6
                                            grid gtc12
                                            f1-00">
                                        
                                        <article id="research-and-development" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Walter Sermodzi</h3>
                                            <p class = "mb0-50">Director, Research and Development</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    {/* <!-- Head of Department End-->    */}
                                </div>
                                {/* <!-- Admistratvie Heads - Headquarters End -->  */}
                
                                {/* <!-- Admistratvie Heads - Regional Consultants Start -->   */}
                                <div id="heads--regional-consultants" 
                                    class="grid gtc12 ggap2-00"
                                >
                                    <header class="bg-white gc1s12 gr1s1 pa1-00">
                                        <h2 class="ma0-00 pb1-00 bb">Regional Consultants</h2>
                                    </header>
                                    <div id="regionalConsultant_1"
                                        class="gr2s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Naa Kwarley</h3>
                                            <p class = "mb0-50">Greater Accra</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id="regionalConsultant_2"
                                        class="gr2s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        
                                        <article id="" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Betsy Owusu-Antwi (Mrs.)
                                            </h3>
                                            <p class = "mb0-50">Ashanti</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsultant_3"
                                        class="gr3s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Surv. Eric Annan</h3>
                                            <p class = "mb0-50">Western / Western North</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_6"
                                        class="gr3s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        
                                        <article id="" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Edward Agyemang-Prempeh</h3>
                                            <p class = "mb0-50">Ahafo/ Bono/ Bono-East</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                                    </div>
                
                                    <div id="regionalConsultant_4"
                                        class="gr4s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Surv. Isaac Agyei-Mensah</h3>
                                            <p class = "mb0-50">Central</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_5"
                                        class="gr4s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Richard Osei Amanfu</h3>
                                            <p class = "mb0-50">Volta / Oti</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_7"
                                        class="gr6s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Salifu Abdul-Gafaru Abdulai</h3>
                                            <p class = "mb0-50">Upper West</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_8"
                                        class="gr6s1 gc7s6
                                            grid gtc12
                                            f1-00">
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Surv. Gordon Tanga</h3>
                                            <p class = "mb0-50">Northern/Savannah/
                                                North-EastT</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_9"
                                        class="gr5s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Amen A. K. Gbeckor-Kove </h3>
                                            <p class = "mb0-50">Eastern North</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                class="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_10"
                                        class="gr5s1 gc7s6
                                            grid gtc12
                                            f1-00">
                                        
                                        <article id="tr" 
                                            class="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 class = "mb0-50">Arc. Nana Kwame Amoateng Mensah</h3>
                                            <p class = "mb0-50">Upper West</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                    class="ba br0-25 blue0 pa0-25 f0-75 "
                                                    >Read More
                                                </a>
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            class="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure class="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    class="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    {/* <!-- Head of Department End-->    */}
                                </div>
                                {/* <!-- Admistratvie Heads - Regional Consultants End -->  */}
                            </div>
                            {/* <!-- Heads of Departments --> */}

                        </div>
                        {/* <!-- Practice Management --> */}
                    </div>

                    <div id="pageNav" 
                        class="gc4s1 
                            w-100 blue0 relative">
                        <div class="flex flex-column justify-between
                            min-vh-100 
                            ph2-00 pb1-00
                            pt5-00
                            sticky top-0"
                        >
                            <div>
                                <Link to = "practice"
                                    class="dib mb1-00 
                                        f1-25 blue0 ttu fw6"
                                >
                                    Back to Practice
                                </Link>
                                <ul class="mb1-00 bl bw4 pa1-00 b--gray gray f0-75">
                                    <h3 >Management</h3>
                                    <li class="mb1-00 i">
                                        <a href="#management--overview"
                                            class="gray"
                                        >
                                            Management
                                        </a>
                                    </li>
                                    <li class="mb1-00 i">
                                        <a href="#management--managingDirector"
                                            class="gray"
                                        >
                                            Managing Director
                                        </a>
                                    </li>
                                    <li class="mb1-00 i">
                                        <a href="#management--deputyManagingDirectors"
                                            class="gray"
                                        >
                                            Deputy Managing Directors
                                        </a>
                                    </li>
                                    <li class="mb1-00 i">
                                        <a href="#management--headsOfDepartments"
                                            class="gray"
                                        >
                                            Heads of Departments
                                        </a>
                                    </li>
                                </ul>
                            </div> 

                            <div class="h6-00 gray">
                                <small>Previous</small><br/>
                                <Link to ="/practice/corporate-governance" 
                                    class="mb1-00 f0-75 gray b"
                                >
                                    AESL Corporate Governance
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to ="/practice/services" 
                                    class="mb1-00 f0-75 gray b"
                                >
                                    AESL Services
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageName="Management"/>
            {/* Page Footer End */}
        </div>
    )
}

export default Management