import { Link } from 'react-router-dom'
import {projects, projectCategories} from '../../../data/projectsInfo'
const AESL_ProjectsNav = () => {
    return (
        <nav id="projectsNav"
            className="grid gtc12 gc1s12 ggap1-00
                items-center justify-between
                pa1-00
                bg-blue0
                white-90 f1-00 tracked-tight"
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
                    pa0-50 "
                >
                        {projectCategories.map(
                                (project) => {
                                    return (
                                        <li className="mb0-50"
                                        >
                                            <Link to = {`/projects/${project.url}`}
                                                className="white-90"
                                            >
                                                {project.name}
                                            </Link>
                                        </li>
                                    )
                                }
                            ).splice(0,5)
                        }
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
                    {projectCategories.map(
                                (project) => {
                                    return (
                                        <li className="mb0-50"
                                        >
                                            <Link to = {`/projects/${project.url}`}
                                                className="white-90"
                                            >
                                                {project.name}
                                            </Link>
                                        </li>
                                    )
                                }
                            ).splice(5,10)
                        }
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

        </nav>
    )
}

export default AESL_ProjectsNav