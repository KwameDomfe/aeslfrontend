import React from 'react'
import { Link } from 'react-router-dom'

const AESL_ProjectsNav = () => {
    return (
        <div id="projectsNav"
            class="grid gtc12 gc1s12 ggap1-00
                pa1-00
                white-90
                f1-00  tracked-tight
                bg-blue0
                "
        >
            <div id="projects" 
                class="gr1s1 gc1s1
                    w10-00 h10-00 
                    bg-blue0
                    br0-50 ba shadow-yellow"
            >
                <div id = "projects"
                    class="flex flex-column justify-start
                        w-100, h-100
                        pa0-50"
                >
                    <Link to="/projects"
                    class="white-90 ">
                        Projects
                    </Link>
                </div>  
            </div>

            <div id="projectCategories--nav1" 
                class="gr1s1 gc2s1
                    w10-00 h10-00
                    bg-blue0
                    br0-50 ba shadow-yellow"
            >
                <ul id = "projectCategories_list_1"
                    class="
                    pa0-50 ">
                        <li class="mb0-50">
                            <Link to="/projects/civic-and-culture"
                            class="white-90">
                                Civic and Culture
                            </Link>
                        </li>
                        <li class="mb0-50">
                            <Link to="/projects/education"
                            class="white-90">
                                Education
                            </Link>
                        </li>
                        <li class="mb0-50">
                            <Link to="/projects/health"
                            class="white-90">
                                Health
                            </Link>
                        </li>
                        <li class="mb0-50">
                            <Link to="/projects/office-retail-and-mixed-use"
                            class="white-90">
                                Office Retail and Mixed-Use
                            </Link>
                        </li>
                        <li class="mb0-50">
                            <Link to="/projects/sports-and-leisure"
                            class="white-90">
                                Sports and Leisure
                            </Link>
                        </li>
                </ul>   
            </div>
            
            <div id="projectCategories--nav2" 
                class="gr1s1 gc3s1
                    w10-00 h10-00 
                    bg-blue0
                    br0-50 ba shadow-yellow"
            >
                <ul id = "projectCategories_list_2"
                    class="flex flex-column justify-start
                        w-100, h-100
                        pa0-50"
                >
                    <li class="mb0-50">
                        <Link to="/projects/residential"
                        class="white-90 ">
                            Residential
                        </Link>
                    </li>
                    <li class="mb0-50">
                        <Link to="/projects/industrial-and-infrastructure"
                        class="white-90 ">
                            Industrial and Infrastructure
                        </Link>
                    </li>
                    <li class="mb0-50">
                        <Link to="/projects/hospitality"
                        class="white-90 ">
                            Hospitality
                        </Link>
                    </li>
                    <li class="mb0-50">
                        <Link to="/projects/landscape-planning-and-survey"
                        class="white-90 ">
                            Landscape, Planning and Survey
                        </Link>
                    </li>
                </ul>  
            </div>

            <div id="project_info" 
                class="gr1s1 gc12s1
                    flex items-center justify-center
                    w10-00 h10-00 shadow-yellow br0-50"
            >
                <ul id = ""
                    class="gr1s1 gc11s2
                        w-100 h-100
                        pa0-50
                        blue0
                        bg-white br0-50
                        ba"
                >
                    <li class="">
                        <Link to="/projects/projects-list"
                            class="blue0" 
                        >Projects List</Link>
                    </li>     
                    <li class="">
                        <Link to="/projects/projects-map"
                            class="blue0" 
                        >Projects Map</Link> 
                    </li>     
                    <li class="">
                        <Link to="/projects/project-films"
                            class="blue0"    
                        >Project Films</Link>
                    </li>     
                </ul> 
            </div>
        </div>
    )
}

export default AESL_ProjectsNav