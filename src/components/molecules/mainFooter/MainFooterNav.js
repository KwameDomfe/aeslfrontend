import React from 'react'
import { BsPeople } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import { LuFootprints } from 'react-icons/lu'
import { PiBuildingOfficeBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const MainFooterNav = () => {
    return (
        <div class="grid
            items-start justify-between ggap0-50 
            w-100"
        >
            <div id="footer__projects"
                class = "gr1s1 gc1s12 gc1s6-s gc1s3-m"
                data-use-new="true" 
                role="tabpanel" 
                aria-label="projects" 
                section-index="1" 
            >
                <h2 class=""
                >
                    <span className="f1-00"><GrProjects /></span>
                    <Link class="white-90 ml0-50" 
                        to="projects"
                        role="button" 
                        aria-expanded="false"
                    >
                        PROJECTS
                    </Link>
                </h2>
                <ul class="flex flex-column items-center justify-center"
                >
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/civic-and-culture"
                            class="white-90 dib"
                        >
                            Civic and Culture
                        </Link>
                    </li>
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/education"
                            class="white-90 dib"
                        >
                            Education
                        </Link>
                    </li>
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/health"
                            class="white-90 dib"
                        >
                            Health
                        </Link>
                    </li>
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/office-retail-and-mixed-use"
                            class="white-90 dib"
                        >
                            Office Retail and Mixed-Use
                        </Link>
                    </li>
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/sports-and-leisure"
                            class="white-90 dib"
                        >
                            Sports and Leisure
                        </Link>
                    </li>
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/residential"
                            class="white-90 dib"
                        >
                            Residential
                        </Link>
                    </li>
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/industrial-and-infrastructure"
                            class="white-90 dib"
                        >
                            Industrial and Infrastructure
                        </Link>
                    </li>
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/hospitality"
                            class="white-90 dib"
                        >
                            Hospitality
                        </Link>
                    </li>
                    <li class="w-100 
                        mb1-00"
                    >
                        <Link to="projects/landscape-planning-and-survey"
                            class="white-90 dib"
                        >
                            Landscape, Planning and Survey
                        </Link>
                    </li>
                </ul>
            </div>

            <div id="footer__practice"  
                aria-label="practice"
                class="gr2s1 gr1s1-s gc1s12 gc7s6-s gc4s3-m" 
                data-use-new="true" 
                role="tabpanel"  
                section-index="2"
            >
                <h2 class=""
                >
                    <span className="f1-00"><PiBuildingOfficeBold /></span>
                    <Link class="white-90 ml0-50"  
                        to="practice"
                    >
                        PRACTICE
                    </Link>
                </h2>
                <ul class=""
                >
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/history"
                        >
                            History
                        </Link>
                    </li>
                    <li class="mb1-00 ">
                        <Link  class="white-90" 
                            to="practice/mandate"
                        >
                            Mandate
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/functions"
                        >
                            Functions
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/mission-vision-and-values"
                        >
                            Mission, Vision & Values
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/sector-ministry"
                        >
                            Sector Ministry
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/corporate-governance"
                        >
                            Corporate Governance
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/management"
                        >
                            Management
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/services"
                        >
                            Services
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/client-speak"
                        >
                            Client Speak
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/alliances"
                        >
                            Alliances
                        </Link>
                    </li>
                    <li class="mb1-00 "
                    >
                        <Link  class="white-90" 
                            to="practice/corporate-responsibilities"
                        >
                            Corporate Responsibilities
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div id="footer__principles" 
                class="gr3s1 gr2s1-s gr1s1-m gc1s12 gc1s6-s gc7s3-m
                " 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="principles" 
                section-index="3"
            >
                <header
                >
                    <h2 class=""
                    >
                        <span className="f1-00"><LuFootprints /></span>
                        <Link class="white-90 ml0-50"  
                            to="principles"
                           
                        >
                            PRINCIPLES
                        </Link>
                    </h2>
                </header>

                <nav aria-label=""
                >
                    <ul class=""
                    >
                        <li class="mb1-00 ">
                            <Link  class="white-90" 
                                to="principles/civic"
                            >
                                Civic
                            </Link>
                        </li>
                        <li class="mb1-00 ">
                            <Link  class="white-90" 
                                to="principles/professionalism"
                            >
                                Professionalism
                            </Link>
                        </li>
                        <li class="mb1-00 ">
                            <Link  class="white-90" 
                                to="principles/excellence"
                            >
                                Excellence
                            </Link>
                        </li>
                        <li class="mb1-00 ">
                            <Link  class="white-90" 
                                to="principles/integrity-and-honesty"
                            >
                                Integrity and Honesty
                            </Link>
                        </li>
                        <li class="mb1-00 ">
                            <Link  class="white-90" 
                                to="principles/timeliness-and-cost-effectiveness"
                            >
                                Timeliness and Cost Effectiveness
                            </Link>
                        </li>
                        <li class="mb1-00 ">
                            <Link  class="white-90" 
                                to="principles/sustainability"
                            >
                                Sustainability
                            </Link>
                        </li>
                        <li class="mb1-00 ">
                            <Link  class="white-90" 
                                to="principles/empowerment"
                            >
                                Empowerment
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div id="footer__people" 
                class="gr4s1 gr2s1-s gr1s1-m gc1s12 gc7s6-s gc10s3-m
                " 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="people" 
                section-index="4"
            >
                <header>
                    <h2 class="">
                    <span className="f1-00"><BsPeople /></span>
                    <Link class="white-90 ml0-50"   
                            to="people"
                            
                        >PEOPLE</Link>
                    </h2>
                </header>

                <nav aria-label="">
                    <ul class="">
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                to="people/principal-consultants">Principal Consultants</Link>
                        </li>
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                to="people/senior-consultants">Senior Consultants</Link>
                        </li>
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                to="people/consultants">Consultants</Link>
                        </li>
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                to="people/senior-professionals">Senior Professionals</Link>
                        </li>
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                to="people/professionals">Professionals</Link>
                        </li>
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                to="people/assistant-professionals">Assistant Professionals</Link>
                        </li>
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                    to="people/probationers">Probationers</Link>
                        </li>
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                    to="people/service-personnel">Service Personnels</Link>
                        </li>
                        <li class="mb1-00 "> 
                            <Link  class="white-90" 
                                    to="people/support-team">Support Team</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MainFooterNav