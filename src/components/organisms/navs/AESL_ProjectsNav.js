import React from 'react'
import { Link } from 'react-router-dom'

const AESL_ProjectsNav = () => {
    return (
        <div id="projectsNav"
            className="grid gtc12 gc1s12 ggap1-00
            items-center justify-between
                pa1-00
                white-90
                f1-00  tracked-tight
                bg-blue0
                "
        >
            <div id="projects" 
                className="gc1s1 gr1s1 gc1s1-m
                    w10-00 h10-00 
                    bg-blue0
                    br0-50 ba shadow-yellow"
            >
                <div id = "projects"
                    className="flex flex-column justify-start
                        w-100, h-100
                        pa0-50"
                >
                    <Link to="/projects"
                    className="white-90 ">
                        Projects
                    </Link>
                </div>  
            </div>

            <div id="projectCategories--nav1" 
                className="gr1s1 gc2s1
                    w10-00 h10-00
                    bg-blue0
                    br0-50 ba shadow-yellow"
            >
                <ul id = "projectCategories_list_1"
                    className="
                    pa0-50 ">
                        <li className="mb0-50">
                            <Link to="/projects/civic-and-culture"
                            className="white-90">
                                Civic and Culture
                            </Link>
                        </li>
                        <li className="mb0-50">
                            <Link to="/projects/education"
                            className="white-90">
                                Education
                            </Link>
                        </li>
                        <li className="mb0-50">
                            <Link to="/projects/health"
                            className="white-90">
                                Health
                            </Link>
                        </li>
                        <li className="mb0-50">
                            <Link to="/projects/office-retail-and-mixed-use"
                            className="white-90">
                                Office Retail and Mixed-Use
                            </Link>
                        </li>
                        <li className="mb0-50">
                            <Link to="/projects/sports-and-leisure"
                            className="white-90">
                                Sports and Leisure
                            </Link>
                        </li>
                </ul>   
            </div>
            
            <div id="projectCategories--nav2" 
                className="gr2s1 gr1s1-m gc1s1 gr1s1-s gc3s1-s gc3s1-m
                    w10-00 h10-00 
                    bg-blue0
                    br0-50 ba shadow-yellow"
            >
                <ul id = "projectCategories_list_2"
                    className="flex flex-column justify-start
                        w-100, h-100
                        pa0-50"
                >
                    <li className="mb0-50">
                        <Link to="/projects/residential"
                        className="white-90 ">
                            Residential
                        </Link>
                    </li>
                    <li className="mb0-50">
                        <Link to="/projects/industrial-and-infrastructure"
                        className="white-90 ">
                            Industrial and Infrastructure
                        </Link>
                    </li>
                    <li className="mb0-50">
                        <Link to="/projects/hospitality"
                        className="white-90 ">
                            Hospitality
                        </Link>
                    </li>
                    <li className="mb0-50">
                        <Link to="/projects/landscape-planning-and-survey"
                        className="white-90 ">
                            Landscape, Planning and Survey
                        </Link>
                    </li>
                </ul>  
            </div>

            <div id="project_info" 
                className="gc2s1 gc3s1-s gr2s1 gr1s1-m gc12s1-m
                    flex items-center justify-center
                    w10-00 h10-00 shadow-yellow br0-50"
            >
                <ul id = ""
                    className="w-100 h-100
                        pa0-50
                        blue0
                        bg-white br0-50
                        ba"
                >
                    <li className="">
                        <Link to="/projects/projects-list"
                            className="blue0" 
                        >Projects List</Link>
                    </li>     
                    <li className="">
                        <Link to="/projects/projects-map"
                            className="blue0" 
                        >Projects Map</Link> 
                    </li>     
                    <li className="">
                        <Link to="/projects/project-films"
                            className="blue0"    
                        >Project Films</Link>
                    </li>     
                </ul> 
            </div>
        </div>
    )
}

export default AESL_ProjectsNav