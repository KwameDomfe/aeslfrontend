// Components
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLProjectsNav from '../../components/organisms/navs/AESL_ProjectsNav'
import ProjectCard from '../../components/organisms/cards/ProjectCard'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import CategoryOverview from '../../components/molecules/CategoryOverview'

// Icons
import { GrProjects } from "react-icons/gr";

// Images
import projectsBanner from '../../images/projects/00.jpeg'
import {projects} from '../../data/projectsInfo'
import { useEffect } from 'react'

// Function
const ProjectsIndex = () => {
    useEffect(() => {
      
        document.title='AESL || Projects'
        return () => {
       
        }
    }, [])
    return (
        <article id = "pageContent"
            className = ""
        >
            {/* Page Header Start */}
            <header id="pageHeader"
                className="bg-yellow"
            >
                <CategoryHeaderBanner 
                    image = {projectsBanner}
                    icon = {<GrProjects />}
                    title ='projects'
                />
                <AESLProjectsNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <main id="pageMain"
                className="bg-white mb1-00"
            >
                {/* <!-- Overview --> */}
                <div id="overview"
                    className="grid gtc12 ggap1-00"
                >
                    <CategoryOverview
                        description="Our unmatched and exceptional projects, which seamlessly blend architectural and engineering expertise, contribute to the enhancement of the built environment. Our portfolio encompasses a diverse range of ventures and projects, including residential, commercial, educational, healthcare, and infrastructure development. Our innovative professionals pay meticulous attention to details, making projects stand out and meeting the clients’ requirements."
                    />
                </div>
                {/* <!-- Overview --> */}

                {/* <!-- Projects --> */}
                <div id="projects"
                    className= "mb1-00 ph1-00 white-90"
                >
                    <ul className="grid gtc2-s gtc3-m gtc4-xl ggap1-00 
                        justify-start
                        mt2-00 mb1-00"
                    >
                        { projects && projects.map((project) => 
                                {
                                    return (
                                        <li key = {project.id}
                                            className="h-100 w-100"
                                        >
                                            <ProjectCard
                                                name        = {project.name}
                                                client      = {project.client}
                                                location    = {project.location}
                                                thumbnail   = {project.thumbnail}
                                                description    = {project.overview}
                                                url         = {project.url}
                                                category    = {project.category}
                                            />
                                        </li>
                                    )
                                }

                            )
                        }
                    </ul>

                </div>
                {/* <!-- Projects --> */}
                {/* <!-- Projects Footer --> */}
                <SectionFooter 
                    sectionTitle = "Projects"
                />
                {/* <!-- Projects Footer --> */}
            </main>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="pageFooter" 
                className=""
            >
                <AESLPageFooter
                    pageTitle = 'Projects'
                />
            </footer>
            {/* Page Footer End */}
        </article>
    )
}

export default ProjectsIndex