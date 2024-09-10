// Images
import projectsBanner from '../../images/projects/00.jpeg'
import proj01 from '../../images/projects/civic_and_culture/civic/1_0.jpg'
import proj02 from '../../images/projects/civic_and_culture/civic/2.PNG'
import proj03 from '../../images/projects/civic_and_culture/culture/5_0.jpg'
import proj04 from '../../images/projects/civic_and_culture/civic/4_1.jpg'

// Compoments
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLProjectsNav from '../../components/organisms/navs/AESL_ProjectsNav'
import ProjectCard from '../../components/organisms/cards/ProjectCard'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import { GrProjects } from "react-icons/gr";

const ProjectsIndex = () => {
  
    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header id=""
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
            <main className="bg-white mb1-00">
                {/* <!-- Overview --> */}
                <div id="overview"
                    className="grid gtc12 ggap1-00"
                >
                    {/* <!-- Overview Description -->  */}
                    <header 
                        className="gr1s1 gc2s10 
                            w-100
                            blue0 bb"
                    >
                        <hgroup id="Project_Overview_1"
                            className="f1-50"
                        >
                            <p className="mb0-00 pv4-00 lh-copy tracked tj">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, placeat. Quibusdam sequi provident, repellat eum nam, ullam cum ad tempore in quam velit, facere modi quidem debitis voluptatem ratione cumque! Vel necessitatibus dolores ratione, obcaecati voluptas natus magnam error ad nostrum laborum quod tenetur dolor maxime, pariatur enim velit repudiandae.
                            </p>   
                        </hgroup> 
                    </header>
                    {/* <!-- Overview Description --> */}
                </div>
                {/* <!-- Overview --> */}
                {/* <!-- Projects --> */}
                <div id="projects"
                    class = "w-100 mb1-00 ph1-00 white-90"
                >
                    <ul className="grid gtc2-s gtc3-m gtc4-xl ggap1-00 
                    justify-start
                    mv2-00"
                    >
                            <li className=""
                            >
                                <ProjectCard 
                                name = "Regional Coordinating Council"
                                location = "Several"
                                image = {proj02}
                                description = "Regional Cordinating Council Buildings ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . "
                                url ="/projects/project-details"
                                category = "Civic and Culture"
                                subCategory ="Civic"
                                />
                            </li>
                            <li className="
                            
                                "
                            >
                                <ProjectCard 
                                name = "Ghana Police Service Station"
                                location = "Several"
                                image = {proj01}
                                description = "Ghana Police Service Station ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . "
                                url ="/projects/project-details"
                                category = "Civic and Culture"
                                subCategory ="Civic"
                                />
                            </li>
                            <li className="
                            
                                "
                            >
                                <ProjectCard 
                                name = "Manhyia Palace"
                                location = "Kumasi"
                                image = {proj03}
                                description = "Manhyia Palace ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . "
                                url ="/projects/project-details"
                                category = "Civic and Culture"
                                subCategory ="Civic"
                                />
                            </li>
                            <li className="
                            
                                "
                            >
                                <ProjectCard 
                                name = "Ministry of Foreign Affairs office"
                                location = "Several"
                                image = {proj04}
                                description = "Ministry of Foreign Affairs office ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . "
                                url ="/projects/project-details"
                                category = "Civic and Culture"
                                subCategory ="Civic"
                                />
                            </li>
                    </ul>
                </div>
                    <SectionFooter 
                        sectionTitle = "Projects"
                    />
                {/* <!-- Projects --> */}
            </main>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="" 
                className=""
            >
                <AESLPageFooter
                    pageName = 'Projects'
                />
            </footer>
            {/* Page Footer End */}
        </article>
    )
}

export default ProjectsIndex