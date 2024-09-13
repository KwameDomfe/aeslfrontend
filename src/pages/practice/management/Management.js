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
            <main className="ph1-00"
            >
                <div className="grid gtc4"
                >
                    <div id="pageDetails"
                        className="gc1s3
                            mb1-00 min-vh-100"
                    >   
                        {/* <!-- Practice Management --> */}
                        <div id="" 
                            className=""
                        >
                            {/* <!-- Overview --> */}
                            <div id="management--overview"
                                className="grid gtc12 ggap1-00"
                            >
                                {/* <!-- Overview Description --> */}
                                <article id="" 
                                    className="gr1s1 gc1s12 ggap1-00 flex"
                                >
                                    <div className="flex flex-column ggap1-00 
                                        pv4-00 mh4-00
                                        tj blue0 lh-copy f1-25"
                                    >
                                            <p>
                                            The management team is responsible for driving innovation, maintaining high standards of quality, and providing exceptional architectural and engineering services to clients. 
                                            </p>
                                            <p>
                                            They provide strategic direction and oversee the day-to-day activities of the company, working closely with employees to ensure projects are executed successfully, budgets and timelines are adhered to, and client satisfaction is achieved.
                                            </p>
                                    </div>
                                </article>
                                {/* <!-- Overview Description --> */}
                            </div>
                            {/* <!-- Overview --> */}

                            {/* <!--Managing Director --> */}
                            <div id="management--managingDirector"
                                className="gr4s1 gc1s12
                                    grid gtc12 ggap1-00
                                    mb3-00"
                            >
                                <header id=""
                                    className="gr1s1 gc1s12 
                                        w-100 h-100
                                        white-90
                                        bg-gray" 
                                >
                                    <hgroup id=""
                                        className=""
                                    >
                                        <h2 className="pv1-00 pl1-00
                                            f2-00 ttu mb0-00"
                                        >
                                            Managing Director
                                        </h2>     
                                    </hgroup> 
                                </header>

                                <article id="" 
                                    className="gr4s1 gc1s12
                                        flex flex-column justify-between
                                        pa2-00 
                                        bg-blue0 white-90"
                                >
                                    <h2 className= "mb1-00"
                                    >
                                        Arc. Isaac Agyei Marfo
                                    </h2>
                                    <h3 className= "mb1-00"
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
                                            className="ba br0-25 dib mt2-00 white-90 pa0-50"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </article>
                                
                                <article id="" 
                                    className="gr2s1 gc1s12
                                        flex items-end justify-center
                                        relative
                                        white-90"
                                >
                                    <figure className="shadow-5 w-100">
                                        <img src={md01}
                                            alt=""
                                            className="pa0-50 w-100"
                                        /> 
                                    </figure>
                                    <hgroup 
                                        className="flex flex-column justify-start 
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
                                    className="gr5s1 gc1s12
                                        flex items-end justify-center
                                        pa4-00
                                        white-90"
                                >
                                    <hgroup 
                                        className="flex flex-column justify-start 
                                        pa4-00
                                        bg-gray 
                                        fw4
                                        ba
                                        lh-copy"
                                    >
                                        <h2>
                                            Managing Director's Message
                                        </h2>
                                        <p className=" tts">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi aspernatur a laudantium quaerat provident neque ipsam accusamus suscipit totam. Eaque velit beatae ratione, odit dolorem dolore at vel cumque optio ea, voluptates dolores sequi voluptas eligendi labore sit impedit.
                                        </p>    
                                        <p className=" ttl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi aspernatur a laudantium quaerat provident neque ipsam accusamus suscipit totam. Eaque velit beatae ratione, odit dolorem dolore at vel cumque optio ea, voluptates dolores sequi voluptas eligendi labore sit impedit.
                                        </p>    
                                        <p className=" ttl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi aspernatur a laudantium quaerat provident neque ipsam accusamus suscipit totam. Eaque velit beatae ratione, odit dolorem dolore at vel cumque optio ea, voluptates dolores sequi voluptas eligendi labore sit impedit.
                                        </p>    
                                        <p className=" ttl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi aspernatur a laudantium quaerat provident neque ipsam accusamus suscipit totam. Eaque velit beatae ratione, odit dolorem dolore at vel cumque optio ea, voluptates dolores sequi voluptas eligendi labore sit impedit.
                                        </p>    
                                    
                                    </hgroup> 
                                </article>
            
                                <article id="" 
                                    className="gr3s1 gc1s4
                                    flex items-end justify-center
                                    relative
                                    white-90"
                                >
                                    <hgroup 
                                        className="flex flex-column justify-start 
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
                                    <figure className="shadow-5 w-100">
                                        <img src={md02}
                                            alt=""
                                            className="w-100
                                                ba b--gold"
                                            />
                                    </figure>
                                </article>

                                <article id="" 
                                    className="gr3s1 gc5s4
                                        flex items-end justify-center
                                        relative
                                        white-90"
                                >
                                    <hgroup 
                                        className="flex flex-column justify-start 
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
                                            className="w-100
                                                ba b--gold 
                                                "
                                            /> 
                                    </figure>
                                </article>

                                <article id="a" 
                                    className="gr3s1 gc9s4
                                        flex items-end justify-center
                                        bg-gold relative
                                        white-90"
                                >
                                    <hgroup id=""
                                        className="flex flex-column justify-start 
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
                                            className="w-100
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
                                    className="gr1s1 gc1s12 
                                        w-100 h-100
                                        bg-gray mb1-00
                                        white-90" 
                                >
                                    <hgroup id=""
                                        className=""
                                    >
                                        <h2 className="pv1-00 pl1-00 mb0-00
                                            f2-00 ttu"
                                        >
                                            Deputy Managing Directors
                                        </h2>     
                                        
                                    </hgroup> 
                                </header>

                                <div id="deputy-managing-director-architecture-and-planning"
                                    className="gr4s1 gc1s12
                                        grid gtc12 ggap1-00
                                        white-90 mb3-00"
                                >
                                    <header className="gc1s12 gr1s1">
                                        <h3 className="mb1-00 pl1-00 
                                            f1-50 ttu blue0"
                                        >
                                            Deputy Managing Director - Architecture and Planning
                                        </h3>   
                                    </header>

                                    <article id="" 
                                        className="gr3s1 gc1s12
                                            flex flex-column justify-between
                                            relative 
                                            w-100 h-100
                                            pa2-00 ph2-00
                                            bg-blue0"
                                    >
                                        <h2 className= "mb1-00">VACANT</h2>
                                        <h3 className= "mb1-00">Deputy Managing Director (<span className= "mb1-00"> Architecture and Planning </span>)</h3>
                                        
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis ipsa repudiandae nisi, fugit nulla corporis reprehenderit dolores dolorum vel, mollitia excepturi laborum aperiam voluptates perferendis esse quo voluptate rem.
                                        </p>
                                        <div>
                                            <Link to="/practice/management/deputy-managing-director/architecture-and-planning"
                                                className="ba br0-25 dib mt2-00 white-90 pa0-50"
                                            >
                                                    Read More
                                            </Link>
                                        </div>
                                    </article>
                                
                                    <article id="" 
                                        className="gr2s1 gc1s12
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure className="shadow-5">
                                            <img src={avatar}
                                                alt=""
                                                className="pa0-50 w-100"
                                            /> 
                                        </figure>
                                    </article>
                                </div>

                                <div id="deputy-managing-director-engineering"
                                    className="gr4s1 gc1s12
                                        grid gtc12 ggap1-00
                                        white-90 mb3-00"
                                >
                                    <header className="gc1s12 gr1s1">
                                        <h3 className="mb1-00 pl1-00 
                                            f1-50 ttu blue0"
                                        >
                                        DEPUTY MANAGING DIRECTOR - Engineering
                                        </h3>   
                                    </header>

                                    <article id="" 
                                        className="gr3s1 gc1s12
                                            flex flex-column justify-between
                                            relative 
                                            w-100 h-100
                                            pa2-00 ph2-00
                                            bg-blue0"
                                    >
                                        <h2 className= "mb1-00">VACANT</h2>
                                        <h3 className= "mb1-00">Deputy Managing Director (<span className= "mb1-00">Engineering</span>)</h3>
                                        
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem rerum nihil quidem corrupti quam. Modi magnam ipsam sunt ullam quasi, tempora voluptatibus corrupti neque odio perspiciatis fugit et enim aliquid.</p>
                                        <div>
                                        <Link to="/practice/management/deputy-managing-director/engineering"
                                            className="ba br0-25 dib mt2-00 white-90 pa0-50">
                                                Read More
                                        </Link>
                                        </div>
                                    </article>
                                    
                                    <article id="" 
                                        className="gr2s1 gc1s12
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure className="shadow-5">
                                            <img src={avatar}
                                                alt=""
                                                className="pa0-50 w-100"
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
                                    className="gr1s1 gc1s12 
                                        w-100 h-100
                                        bg-gray white-90" 
                                >
                                    <hgroup id=""
                                        className=""
                                    >
                                        <h2 className="pv1-00 pl1-00 mb0-00
                                            f2-00 ttu"
                                        >
                                        Heads of Departments
                                        </h2>       
                                    </hgroup> 
                                </header> 
                                {/* <!-- Architecture and Planning Start--> */}
                                <div id="heads--architecture-and-planning" 
                                    className="grid gtc12 
                                        mb2-00"
                                >   
                                    <header id=""
                                        className="gc1s12 gr1s1 
                                        pa1-00 
                                        bg-white"
                                    >
                                        <h2 className="ma0-00 pb1-00 bb"> 
                                            Architecture and Planning
                                        </h2>
                                    </header>   
                                    <div id="head-architecture"
                                        className="gr3s1 gc1s6
                                            grid gtc12"
                                    >
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Isaac A. Commey</h3>
                                            <p className= "mb2-00">Architecture</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 pa0-25 f0-75 blue0">Read More</a>
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                                    </div>
                
                                    <div id="head-valuation"
                                        className="gr3s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Surv. Sylvester Akuoko</h3>
                                            <p className= "mb2-0">Valuation</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                    className="mt2-00 pa0-25 
                                                        ba br0-25 
                                                        f0-75 blue0"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                        </article>
                        
                                    </div>
                                    
                                    <div id="head-quantity-surveying"
                                        className="gr4s1 gc1s6
                                            grid gtc12"
                                    >
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Surv. Paul K. Ansong</h3>
                                            <p className= "mb0-50">Quantity Surveying</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                    className="ba br0-25 mt2-00 pa0-25 f0-75 blue0">Read More</a>
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id="head-land-surveying"
                                        className="gr4s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Surv. Evans Boateng</h3>
                                            <p className= "mb0-50">Land Surveying</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 pa0-25 f0-75 blue0">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                </div>
                                {/* <!--Architecture and Planning End --> */}
                            
                                {/* <!-- Engineering Start -->    */}
                                <div id="heads--engineering" 
                                    className="grid gtc12 ggap2-00 mb2-00"
                                >
                                    <header className="bg-white gc1s12 gr1s1 pa1-00">
                                        <h2 className="ma0-00 pb1-00 bb"> Engineering</h2>
                                    </header>
                                
                                    <div id="head-civil"
                                        className="gr2s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <div id="" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                            "
                                        >
                                            <h3 className= "mb0-50">Ing. Charles Adigvom</h3>
                                            <p className= "mb0-50">Civil / Structures</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 pa0-25 blue0 f0-75">Read More</a>
                        
                                            </div>
                                        </div>
                                        
                                        <div id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </div>
                        
                                    </div>
                                    
                                    <div id="head-installations"
                                        className="gr2s1 gc7s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00"
                                        >
                                            <h3 className= "mb0-50">Ing. Mike Addo</h3>
                                            <p className= "mb0-50">Installations</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 pa0-25 blue0 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id="head-water"
                                        className="gr3s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        <article id="" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Ing. Ebenezer Buertet Mac-Tetteh</h3>
                                            <p className= "mb0-50">Water</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 pa0-25 blue0 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                        </article>
                        
                                    </div>
                                    
                                    <div id="head-geotech"
                                        className="gr3s1 gc7s6
                                            grid gtc12
                                            ">
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Ing. Joseph Kwasi Oddei</h3>
                                            <p className= "mb0-50">Geotechnical</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 pa0-25 blue0 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                </div>
                                {/* <!-- Engineering End -->  */}
                
                                {/* <!-- Admistratvie Heads - Headquarters Start -->   */}
                                <div id="heads--administrative" 
                                    className="grid gtc12 ggap2-00 mb2-00"
                                >
                                    <header className="bg-white gc1s12 gr1s1 pa1-00">
                                        <h2 className="ma0-00 pb1-00 bb">Administrative</h2>
                                    </header>
                                
                                    <div id="head-finance"
                                        className="gr3s1 gc1s6
                                            grid gtc12
                                            ">
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Mr. Robert Mbir</h3>
                                            <p className= "mb0-50">Director, Finance</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id=""
                                        className="gr3s1 gc7s6
                                            grid gtc12
                                            f1-00">
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Florence B. Kumi-Sakyi (Mrs.)</h3>
                                            <p className= "mb0-50">Director, HRMS</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id=""
                                        className="gr4s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. E. Otchere-Darko</h3>
                                            <p className= "mb0-50">Director, Information Techlology</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id=""
                                        className="gr4s1 gc7s6
                                            grid gtc12
                                            f1-00">
                                        
                                        <article id="research-and-development" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Walter Sermodzi</h3>
                                            <p className= "mb0-50">Director, Research and Development</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    {/* <!-- Head of Department End-->    */}
                                </div>
                                {/* <!-- Admistratvie Heads - Headquarters End -->  */}
                
                                {/* <!-- Admistratvie Heads - Regional Consultants Start -->   */}
                                <div id="heads--regional-consultants" 
                                    className="grid gtc12 ggap2-00"
                                >
                                    <header className="bg-white gc1s12 gr1s1 pa1-00">
                                        <h2 className="ma0-00 pb1-00 bb">Regional Consultants</h2>
                                    </header>
                                    <div id="regionalConsultant_1"
                                        className="gr2s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Naa Kwarley</h3>
                                            <p className= "mb0-50">Greater Accra</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                
                                    <div id="regionalConsultant_2"
                                        className="gr2s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        
                                        <article id="" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Betsy Owusu-Antwi (Mrs.)
                                            </h3>
                                            <p className= "mb0-50">Ashanti</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsultant_3"
                                        className="gr3s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Surv. Eric Annan</h3>
                                            <p className= "mb0-50">Western / Western North</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_6"
                                        className="gr3s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        
                                        <article id="" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Edward Agyemang-Prempeh</h3>
                                            <p className= "mb0-50">Ahafo/ Bono/ Bono-East</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                                    </div>
                
                                    <div id="regionalConsultant_4"
                                        className="gr4s1 gc7s6
                                            grid gtc12
                                            f1-00"
                                    >
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Surv. Isaac Agyei-Mensah</h3>
                                            <p className= "mb0-50">Central</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_5"
                                        className="gr4s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Richard Osei Amanfu</h3>
                                            <p className= "mb0-50">Volta / Oti</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_7"
                                        className="gr6s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Salifu Abdul-Gafaru Abdulai</h3>
                                            <p className= "mb0-50">Upper West</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_8"
                                        className="gr6s1 gc7s6
                                            grid gtc12
                                            f1-00">
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Surv. Gordon Tanga</h3>
                                            <p className= "mb0-50">Northern/Savannah/
                                                North-EastT</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                        
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_9"
                                        className="gr5s1 gc1s6
                                            grid gtc12
                                            "
                                    >
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-between
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Amen A. K. Gbeckor-Kove </h3>
                                            <p className= "mb0-50">Eastern North</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                className="ba br0-25 mt2-00 blue0 pa0-25 f0-75">Read More</a>
                        
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 w-100"
                                                /> 
                                            </figure>
                                            
                                        </article>
                        
                                    </div>
                                    
                                    <div id="regionalConsuultant_10"
                                        className="gr5s1 gc7s6
                                            grid gtc12
                                            f1-00">
                                        
                                        <article id="tr" 
                                            className="gr1s1 gc5s8
                                                flex flex-column justify-start
                                                relative 
                                                w-100 h-100
                                                pa1-00
                                                "
                                        >
                                            <h3 className= "mb0-50">Arc. Nana Kwame Amoateng Mensah</h3>
                                            <p className= "mb0-50">Upper West</p>
                                            <div>
                                                <a href="head-of-department-details"
                                                    className="ba br0-25 blue0 pa0-25 f0-75 "
                                                    >Read More
                                                </a>
                                            </div>
                                        </article>
                                        
                                        <article id="" 
                                            className="gr1s1 gc1s4
                                                flex items-center justify-center
                                                relative"
                                        >
                                            <figure className="shadow-5 w-100">
                                                <img src={md01}
                                                    alt=""
                                                    className="pa0-50 h-100"
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
                        className="gc4s1 
                            w-100 blue0 relative">
                        <div className="flex flex-column justify-between
                            min-vh-100 
                            ph2-00 pb1-00
                            pt5-00
                            sticky top-0"
                        >
                            <div>
                                <Link to = "practice"
                                    className="dib mb1-00 
                                        f1-25 blue0 ttu fw6"
                                >
                                    Back to Practice
                                </Link>
                                <ul className="mb1-00 bl bw4 pa1-00 b--gray gray f0-75">
                                    <h3 >Management</h3>
                                    <li className="mb1-00 i">
                                        <a href="#management--overview"
                                            className="gray"
                                        >
                                            Management
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#management--managingDirector"
                                            className="gray"
                                        >
                                            Managing Director
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#management--deputyManagingDirectors"
                                            className="gray"
                                        >
                                            Deputy Managing Directors
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#management--headsOfDepartments"
                                            className="gray"
                                        >
                                            Heads of Departments
                                        </a>
                                    </li>
                                </ul>
                            </div> 

                            <div className="h6-00 gray">
                                <small>Previous</small><br/>
                                <Link to ="/practice/corporate-governance" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Corporate Governance
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to ="/practice/services" 
                                    className="mb1-00 f0-75 gray b"
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
            <AESLPageFooter pageTitle="Management"/>
            {/* Page Footer End */}
        </div>
    )
}

export default Management