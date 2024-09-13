import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLPracticeNav from '../../components/organisms/navs/AESL_PracticeNav'
import PageOverview from '../../components/molecules/pages/PageOverview'

import PracticeCard from './PracticeCard'
import PracticeCardReverse from './PracticeCardReverse'

// Images

import practiceBanner from '../../images/practice/00.jpg'
import sectorMinistry from '../../images/practice/sector_ministry/sm-02.jpg'
import corporateGovernance from '../../images/practice/corporate-governance/board-meeting.jpeg'
import management from '../../images/practice/management/00.jpeg'
import history from '../../images/practice/history/History-01.JPG'
import mandate from '../../images/practice/mandate/00.jpg'
import functions from '../../images/practice/functions/00.jpg'
import mvandv from '../../images/practice/mission_vision_values/00.jpg'
import alliances from '../../images/practice/alliances/00.jpg'
import clientSpeaks from '../../images/practice/client_speak/00.jpeg'
import corporateResponsibilities from '../../images/practice/corporate_responsilities/01.jpg'
import { PiBuildingOfficeBold } from 'react-icons/pi'


const Index = () => {
    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header className="bg-gray">
                <CategoryHeaderBanner 
                    image = {practiceBanner}
                    title ='practice'
                    Icon = {<PiBuildingOfficeBold />}
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End  */}
          
            <main id = "" 
                className=""
            >
                 {/* <!-- Overview --> */}
            <div id="overview"
                className="grid gtc12 ggap1-00
                    ph1-00 mb2-00
                    blue0"
            >
                {/* <!-- Overview Description -->  */}
                <header 
                    className="gr1s1 gc2s10 
                        w-100
                        blue0 bb"
                >
                   <PageOverview overview = 'Our practice focuses on delivering excellence to clients’ requirements. We are set apart in the industry due to our comprehensive meticulous practice that focuses on delivering excellence Combining our architectural and engineering expertise, AESL consistently deliver projects that not only meet client requirements but also exceed expectations, resulting in exceptional and enduring built environments.'
                   />
                </header>
                {/* <!-- Overview Description --> */}
            </div>
            {/* <!-- Overview --> */}
            <div id="practice__content" 
                className="bg-blue0"
            >

                <PracticeCardReverse 
                    image = {sectorMinistry}
                    description = 'The Sector Ministry of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..'
                    title = 'Sector Ministry'
                    url = 'sector-ministry'
                    
                />
                <PracticeCard 
                    image = {corporateGovernance}
                    description = "AESL's corporate governance upholds ethical standards and promotes integrity and professionalism through a comprehensive code of conduct and a well-structured Board of Directors."
                    title = 'Corporate Governance'
                    url = 'corporate-governance'
                />
                <PracticeCardReverse 
                    image = {management}
                    description = 'The management team is responsible for driving innovation, maintaining high standards of quality, and providing exceptional architectural and engineering services to clients. They provide strategic direction and oversee the day-to-day activities of the company, working closely with employees to ensure projects are executed successfully, budgets and timelines are adhered to, and client satisfaction is achieved.'
                    title = 'Management'
                    url = 'management'
                    
                />
                <PracticeCard 
                    image = {history}
                    description = 'AESL initially came to be known as AESC when consultancy services were separated from the Public Works Department (PWD) under NRCD 193, 1973. As a government corporation, AESC became the sole consultant for public works. The company was later restructured by an act of parliament, ACT 461 Statutory Corporation (Conversion to Companies).'
                    title = 'History'
                    url = 'history'
                />
                <PracticeCardReverse 
                    image = {functions}
                    description = 'AESL provides an extensive variety of architectural and engineering services, including architectural design, engineering analysis and design, project management, construction documentation, construction supervision, sustainable design and energy efficiency, and client communication as well as collaboration.'
                    title = 'Functions'
                    url = 'functions'
                />
                <PracticeCard 
                    image = {mandate}
                    description = 'Our company provides comprehensive architectural and engineering services to clients, including conceptualizing, designing, and managing projects with high-quality, innovative, and sustainable solutions.'
                    title = 'Mandate'
                    url = 'mandate'
                />
                <PracticeCardReverse 
                    image = {mvandv}
                    description = 'The Mission, Vision and Values of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..'
                    title = 'Mission Vision and Values'
                    url = 'mission-vision-and-values'
                />
                <PracticeCard 
                    image = {alliances}
                    description = 'The management of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..'
                    title = 'Alliances'
                    url = 'alliances'
                />
                <PracticeCardReverse 
                    image = {clientSpeaks}
                    description = 'The management of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..'
                    title = 'Client Speaks'
                    url = 'client-speaks'
                />
                <PracticeCard 
                    image = {corporateResponsibilities}
                    description = 'The management of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..'
                    title = 'Corporate Responsibilities'
                    url = 'corporate-responsibilities'
                />
                {/* <article id="l__management"
                    className="grid gtc12 
                        container white-90
                        pa4-00 
                        "
                >   
                    
                    <div id=""
                        className="gr1s1 gc6s7 items-center justify-center
                            w-100 h-100 "
                    >
                        <figure id=""
                            className="grid items-center justify-center
                                    shadow-5"
                        >
                            <img id=""
                                src="{% static '_images/practice/management/2.jpeg' %}"                
                                alt=""
                                className="gc1s1 gr1s1 h-100 w-100 cover br0-50 br--right"
                            /> 
                           
                        </figure>
                    </div>
                    

                    
                    <div id="" 
                        className="gr1s1 gc1s5 items-center justify-center
                            w-100 h-100 bg-white br0-50 br--left">
                        <article 
                            className="grid
                                h-100"  
                        >   
                                <hgroup id = ""
                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                        w-100 h-100
                                        ph1-00
                                        blue0 f0-75 tc
                                    
                                        
                                        shadow-5
                                            ">
                                    <h2 className= " mv2-00 lh-copy">
                                        The management of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..
                                    </h2>    
                                    <a  href="{% url 'website:management' %}"
                                        className="dib 
                                            pa0-50 mb1-00 
                                            blue0 
                                            ba b br0-25
                                            f1-00
                                            ttu"
                                    >
                                        Management
                                    </a>   
                                    
                                </hgroup> 
                        </article>
                    </div>
                    
                    
                </article> */}
                   
                {/* <article id="l__history"
                    className="grid gtc12 
                        container white-90
                        pa4-00
                        bg-white"
                >   
                    
                    <div id="" 
                        className="gr1s1 gc1s7 items-center justify-center
                            w-100 h-100 "
                    >
                        <figure id =""
                            className="grid items-center justify-center
                                shadow-5  "
                        >
                            <img id=""
                                src="{% static '_images/practice/history/History-01.JPG' %}"           
                                alt="AESL Board Meeting"
                                className="gc1s1 gr1s1 h-100 cover br0-50 br--left"
                            /> 
                            
                        </figure> 
                    </div>
                    

                    
                    <div id="" 
                        className="gr1s1 gc8s5 w-100 h-100 items-center justify-center"
                    >
                        <article 
                            className="grid
                                h-100 "  
                        >   
                                <hgroup id = ""
                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                        w-100 h-100
                                        ph1-00
                                        bg-blue0 white
                                        f0-75 tc
                                        shadow-5 br0-50 br--right"
                                >
                                    <h2 className= " mv2-00 lh-copy">
                                        Initially came to be known as AESC when consultancy services were separated from the Public Works Department (PWD) under NRCD 193, 1973, and as a government corporation, AESC, became the sole consultants for public Works...
                                    </h2>    
                                    <a  href="{% url 'website:history' %}"
                                        className="dib 
                                        pa0-50 mb1-00 
                                        white
                                        ba b br0-25
                                        f1-00
                                        ttu"
                                    >
                                        History
                                    </a>   
                                    
                                </hgroup> 
                        </article>
                    </div>
                    

                </article> */}
                
                {/* <article id="l__mandate"
                    className="grid gtc12 
                        container white-90
                        pa4-00 
                        "
                >   
                    
                    <div id=""
                        className="gr1s1 gc6s7 items-center justify-center
                            w-100 h-100 "
                    >
                        <figure id=""
                            className="grid items-center justify-center
                                    shadow-5"
                        >
                            <img id=""
                                src="{% static '_images/practice/mandate/mandate-01.jpg' %}"                
                                alt=""
                                className="gc1s1 gr1s1 h-100 w-100 cover br0-50 br--right"
                            /> 
                           
                        </figure>
                    </div>
                    

                    
                    <div id="" 
                        className="gr1s1 gc1s5 items-center justify-center
                            w-100 h-100 bg-white br0-50 br--left">
                        <article 
                            className="grid
                                h-100"  
                        >   
                                <hgroup id = ""
                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                        w-100 h-100
                                        ph1-00
                                        blue0 f0-75 tc
                                    
                                        
                                        shadow-5
                                            ">
                                    <h2 className= " mv2-00 lh-copy">
                                        The mandate of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..
                                    </h2>    
                                    <a  href="{% url 'website:mandate' %}"
                                        className="dib 
                                            pa0-50 mb1-00 
                                            blue0 
                                            ba b br0-25
                                            f1-00
                                            ttu"
                                    >
                                        Mandate
                                    </a>   
                                    
                                </hgroup> 
                        </article>
                    </div>
                    
                    
                </article> */}
                   
                {/* <article id="l__functions"
                    className="grid gtc12 
                        container white-90
                        pa4-00
                        bg-white"
                >   
                    
                    <div id="" 
                        className="gr1s1 gc1s7 items-center justify-center
                            w-100 h-100 "
                    >
                        <figure id =""
                            className="grid items-center justify-center
                                shadow-5  "
                        >
                            <img id=""
                                src="{% static '_images/practice/functions/sod_cutting.jpg' %}"           
                                alt="AESL Board Meeting"
                                className="gc1s1 gr1s1 h-100 cover br0-50 br--left"
                            /> 
                            
                        </figure> 
                    </div>
                    

                    
                    <div id="" 
                        className="gr1s1 gc8s5 w-100 h-100 items-center justify-center"
                    >
                        <article 
                            className="grid
                                h-100 "  
                        >   
                                <hgroup id = ""
                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                        w-100 h-100
                                        ph1-00
                                        bg-blue0 white
                                        f0-75 tc
                                        shadow-5 br0-50 br--right"
                                >
                                    <h2 className= " mv2-00 lh-copy">
                                        The functions of the AESL is Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..
                                    </h2>    
                                    <a  href="{% url 'website:functions' %}"
                                        className="dib 
                                        pa0-50 mb1-00 
                                        white
                                        ba b br0-25
                                        f1-00
                                        ttu"
                                    >
                                        Functions
                                    </a>   
                                    
                                </hgroup> 
                        </article>
                    </div>
                    

                </article> */}
                
                {/* <article id="l__mission_vision_values"
                    className="grid gtc12 
                        container white-90
                        pa4-00 
                        "
                >   
                    
                    <div id=""
                        className="gr1s1 gc6s7 items-center justify-center
                            w-100 h-100 "
                    >
                        <figure id=""
                            className="grid items-center justify-center
                                    shadow-5"
                        >
                            <img id=""
                                src="{% static '_images/practice/mission_vision_values/01.jpg' %}"                
                                alt=""
                                className="gc1s1 gr1s1 h-100 w-100 cover br0-50 br--right"
                            /> 
                           
                        </figure>
                    </div>
                    

                    
                    <div id="" 
                        className="gr1s1 gc1s5 items-center justify-center
                            w-100 h-100 bg-white br0-50 br--left">
                        <article 
                            className="grid
                                h-100"  
                        >   
                                <hgroup id = ""
                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                        w-100 h-100
                                        ph1-00
                                        blue0 f0-75 tc
                                    
                                        
                                        shadow-5
                                            ">
                                    <h2 className= " mv2-00 lh-copy">
                                        The mission, vision, and values of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..
                                    </h2>    
                                    <a  href="{% url 'website:mission-vision-values' %}"
                                        className="dib 
                                            pa0-50 mb1-00 
                                            blue0 
                                            ba b br0-25
                                            f1-00
                                            ttu"
                                    >
                                        Mission Vision and Values
                                    </a>   
                                    
                                </hgroup> 
                        </article>
                    </div>
                    
                    
                </article> */}
                   
                {/* <article id="l__alliances"
                    className="grid gtc12 
                        container white-90
                        pa4-00
                        bg-white"
                >   
                    
                    <div id="" 
                        className="gr1s1 gc1s7 items-center justify-center
                            w-100 h-100 "
                    >
                        <figure id =""
                            className="grid items-center justify-center
                                shadow-5  "
                        >
                            <img id=""
                                src="{% static '_images/practice/alliances/practice_2.jpg' %}"           
                                alt="AESL Board Meeting"
                                className="gc1s1 gr1s1 h-100 cover br0-50 br--left"
                            /> 
                            
                        </figure> 
                    </div>
                    

                    
                    <div id="" 
                        className="gr1s1 gc8s5 w-100 h-100 items-center justify-center"
                    >
                        <article 
                            className="grid
                                h-100 "  
                         >  
                                <hgroup id = ""
                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                        w-100 h-100
                                        ph1-00
                                        bg-blue0 white
                                        f0-75 tc
                                        shadow-5 br0-50 br--right"
                                >
                                    <h2 className= " mv2-00 lh-copy">
                                        The alliances of the AESL is Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..
                                    </h2>    
                                    <a  href="{% url 'website:alliances' %}"
                                        className="dib 
                                        pa0-50 mb1-00 
                                        white
                                        ba b br0-25
                                        f1-00
                                        ttu"
                                    >
                                        Alliances
                                    </a>   
                                    
                                </hgroup> 
                        </article>
                    </div>
                    

                </article> */}
                
                {/* <article id="l__client_Speaks"
                    className="grid gtc12 
                        container white-90
                        pa4-00 
                        "
                >   
                    
                    <div id=""
                        className="gr1s1 gc6s7 items-center justify-center
                            w-100 h-100 "
                    >
                        <figure id=""
                            className="grid items-center justify-center
                                    shadow-5"
                        >
                            <img id=""
                                src="{% static '_images/practice/client_speak/01.jpeg' %}"                
                                alt=""
                                className="gc1s1 gr1s1 h-100 w-100 cover br0-50 br--right"
                            /> 
                            
                        </figure>
                    </div>
                    

                    
                    <div id="" 
                        className="gr1s1 gc1s5 items-center justify-center
                            w-100 h-100 bg-white br0-50 br--left">
                        <article 
                            className="grid
                                h-100"  
                        >   
                                <hgroup id = ""
                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                        w-100 h-100
                                        ph1-00
                                        blue0 f0-75 tc
                                    
                                        
                                        shadow-5
                                            ">
                                    <h2 className= " mv2-00 lh-copy">
                                        The clients of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum!.
                                    </h2>    
                                    <a  href="{% url 'website:client-speak' %}"
                                        className="dib 
                                            pa0-50 mb1-00 
                                            blue0 
                                            ba b br0-25
                                            f1-00
                                            ttu"
                                    >
                                        Clients Speak
                                    </a>   
                                    
                                </hgroup> 
                        </article>
                    </div>
                    
                    
                </article> */}
                   
                {/* <article id="l__corporate_responsibilities"
                    className="grid gtc12 
                        container white-90
                        pa4-00
                        bg-white"
                >   
                    
                    <div id="" 
                        className="gr1s1 gc1s7 items-center justify-center
                            w-100 h-100 "
                    >
                        <figure id =""
                            className="grid items-center justify-center
                                shadow-5  "
                        >
                            <img id=""
                                src="{% static '_images/practice/corporate_responsilities/01.jpg' %}"           
                                alt="AESL Board Meeting"
                                className="gc1s1 gr1s1 h-100 cover br0-50 br--left"
                            /> 
                        </figure> 
                    </div>
                    

                    
                    <div id="" 
                        className="gr1s1 gc8s5 w-100 h-100 items-center justify-center"
                    >
                        <article 
                            className="grid
                                h-100 "  
                         > 
                            <hgroup id = ""
                                className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                    w-100 h-100
                                    ph1-00
                                    bg-blue0 white
                                    f0-75 tc
                                    shadow-5 br0-50 br--right"
                            >
                                <h2 className= " mv2-00 lh-copy">
                                    The corporate responsibilities of the AESL is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deleniti reprehenderit voluptas totam nemo explicabo!.
                                </h2>    
                                <a  href="{% url 'website:corporate-responsibilities' %}"
                                    className="dib 
                                    pa0-50 mb1-00 
                                    white
                                    ba b br0-25
                                    f1-00
                                    ttu"
                                >
                                    Corporate Responsibilities
                                </a>   
                                
                            </hgroup> 
                        </article>
                    </div>
                    

                </article> */}
            </div>
            </main>
          
            <footer className=""
            >
                <AESLPageFooter 
                pageTitle = 'Practice'
                />
            </footer>
      </article>
  
  )
}

export default Index