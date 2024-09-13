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
import proj01 from '../../images/projects/civic_and_culture/civic/1_0.jpg'
import proj02 from '../../images/projects/civic_and_culture/civic/2.PNG'
import proj03 from '../../images/projects/civic_and_culture/culture/5_0.jpg'
import proj04 from '../../images/projects/civic_and_culture/civic/4_1.jpg'

// Objects
const projects = [
    {   id : 1,
        name : "Ghana Police Station",
        location : "Several",
        image : proj01,
        description : "Ghana Police Station Buildings ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . ",
        url :"/projects/project-details",
        category : "Civic and Culture",
        subCategory :"Civic"
    },
    {   id : 2,
        name : "Regional Coordinating Council",
        location : "Several",
        image : proj02,
        description : "Regional Cordinating Council Buildings ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . ",
        url :"/projects/project-details",
        category : "Civic and Culture",
        subCategory :"Civic"
    },
    {   id : 3,
        name : "Manhyia Palace",
        location : "Kumasi",
        image : proj03,
        description : "Manhyia Palace Buildings ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . ",
        url :"/projects/project-details",
        category : "Civic and Culture",
        subCategory :"Culture"
    },
    {   id : 4,
        name : "Foreign Affairs Ministry",
        location : "Accra",
        image : proj04,
        description : "Foreign Affairs Ministry Buildings ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . ",
        url :"/projects/project-details",
        category : "Civic and Culture",
        subCategory :"Civic"
    },
    {   id : 5,
        name : "Regional Coordinating",
        location : "Several",
        image : proj01,
        description : "Regional Cordinating Council Buildings ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . ",
        url :"/projects/project-details",
        category : "Civic and Culture",
        subCategory :"Civic"
    },
]

// Function
const ProjectsIndex = () => {
  
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
                    title ='projects'
                    Icon = {<GrProjects />}
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
                    className= "w-100 mb1-00 ph1-00 white-90"
                >
                    <ul className="grid gtc2-s gtc3-m gtc4-xl ggap1-00 
                        justify-start
                        mv2-00"
                    >
                        {projects.map((project) =>
                                (
                                    <li key={project.id}>
                                        <ProjectCard 
                                            name = {project.name}
                                            location = {project.location}
                                            image = {project.image}
                                            description = {project.description}
                                            url ={project.url}
                                            category = {project.category}
                                            subCategory ={project.subCategory}
                                        />
                                    </li>
                                )
                            )
                        }
                    </ul>

                </div>
                <SectionFooter 
                    sectionTitle = "Projects"
                />
                {/* <!-- Projects --> */}
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