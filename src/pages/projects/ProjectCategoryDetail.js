// Images
import projectsBanner from '../../images/projects/00.jpeg'
import proj01 from '../../images/projects/civic_and_culture/civic/PoliceHeadquaters/1_0.jpg'
import proj02 from '../../images/projects/civic_and_culture/civic/PoliceHeadquaters/1_1.jpg'

// Compoments
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLProjectsNav from '../../components/organisms/navs/AESL_ProjectsNav'
import ProjectCard from '../../components/organisms/cards/ProjectCard'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
// import { useParams } from 'react-router-dom'
import {projects, projectCategories} from '../../data/projectsInfo'
import { useState } from 'react'


const ProjectCategoryDetail = (props) => {
    // console.log(Projects)
    const {} = props
    const [jects, setJects] = useState(projects);
    console.log(jects);

    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header id=""
                className="bg-yellow"
            >
                <CategoryHeaderBanner 
                    image = {projectCategories.name}
                    title ={jects.name}
                />
                <AESLProjectsNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <main className="bg-white grid gtc12">
                {/* <!-- Overview --> */}
                <header id="overview"
                    className="gc1s12 grid gtc12 ggap1-00"
                >
                    {/* <!-- Project_categories_overview -->  */}
                    <div id="overview"
                        className="gr1s1 gc2s10 
                            w-100 pt4-00
                            blue0 bb"
                    >
                        <hgroup id="Project_Overview_1"
                            className="f1-50"
                        >
                            <p className="mb0-00 lh-copy tracked tj">
                                {jects.overview}
                            </p>
                        </hgroup>
                    </div>
                </header>
                {/* <!-- Overview --> */}

                {/* <!-- Projects --> */}
                <div id="projects"
                    className = "gc2s10 w-100 mt2-00 mb1-00"
                >
                    {/* {% for projectSubCategory in projectSubCategories %} */}

                    <ul className= "mb2-00"
                    >
                        <li className=""
                        >
                            <header className="bg-blue3 pa1-00 grid gtc12"
                            >
                                <hgroup className="gc1s8 gr1s1 blue0 f1-25 tj pr2-00">
                                    <h2>
                                        project SubCategory One
                                    </h2>
                                    <p className="mb0-00">
                                        project SubCategory description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facilis magni numquam ad illum asperiores possimus optio vero architecto culpa excepturi animi odit ipsa eligendi praesentium, facere temporibus accusantium quisquam?
                                    </p>
                                </hgroup>
                                <img src={proj01}
                                    className="gc9s4 gr1s1 cover w-100 h-100"
                                    alt="errte"
                                />
                            </header>
                            <ul className="grid gtc2-s gtc3-m ggap0-50 
                                justify-start
                                mv1-00"
                            >
                                {/* {% for project in projectSubCategory.project_set.all %} */}
                                <li className="flex justify-between flex-wra
                                    w-100   
                                    mb0-00"
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
                                <li className="flex justify-between flex-wra
                                    w-100   
                                    mb0-00"
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
                                <li className="flex justify-between flex-wra
                                    w-100   
                                    mb0-00"
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
                                <li className="flex justify-between flex-wra
                                    w-100   
                                    mb0-00"
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
                               
                                {/* {% endfor %} */}
                            </ul>
                            <footer className= "flex pa1-00 bg-blue0 gold i"> 
                                <div className= "mr0-50"> project Category Name</div> ||
                                <div className= "ml0-50"> project SubCategory One</div>
                            </footer>
                        </li>
                    </ul>
                    {/* {% endfor %} */}
                    {/* {% for projectSubCategory in projectSubCategories %} */}
                   <ul className= "mv3-00"
                    >
                        <li className=""
                        >
                            <header className="bg-blue3 pa1-00 grid gtc12"
                            >
                                <img src={proj01}
                                    className="gc9s4 gr1s1 cover w-100 h-100"
                                    alt="errte"
                                />
                                <hgroup className="gc1s8 gr1s1 blue0 f1-25 tj pr2-00">
                                    <h2>
                                        project SubCategory Two
                                    </h2>
                                    <p className="mb0-00">
                                        project SubCategory description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facilis magni numquam ad illum asperiores possimus optio vero architecto culpa excepturi animi odit ipsa eligendi praesentium, facere temporibus accusantium quisquam?
                                    </p>
                                </hgroup>
                            </header>
                            <ul className="grid gtc2-s gtc3-m ggap0-50 
                                justify-start
                                mv1-00"
                            >
                                {/* {% for project in projectSubCategory.project_set.all %} */}
                                <li className="flex
                                    w-100
                                    mb0-00"
                                >
                                    <ProjectCard name = "Regional Coordinating Council"
                                        location = "Several"
                                        image = {proj02}
                                        description = "Regional Cordinating Council Buildings ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . "
                                        url ="/projects/project-details"
                                        category = "Civic and Culture"
                                        subCategory ="Civic"
                                    />
                                </li>
                                <li className="flex
                                    w-100
                                    mb0-00"
                                >
                                    <ProjectCard name = "Regional Coordinating Council"
                                        location = "Several"
                                        image = {proj02}
                                        description = "Regional Cordinating Council Buildings ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk . . . "
                                        url ="/projects/project-details"
                                        category = "Civic and Culture"
                                        subCategory ="Civic"
                                    />
                                </li>
                                {/* {% endfor %} */}
                            </ul>
                            <footer className= "flex pa1-00 bg-blue0 gold i"> 
                                <div className= "mr0-50">project Category </div>  ||
                                <div className= "ml0-50"> project Sub Category Two</div>
                            </footer>
                        </li>
                    </ul>
                    {/* {% endfor %} */}
                    {/* {% for projectSubCategory in projectSubCategories %} */}
                   <ul className= "mv3-00"
                    >
                        <li className=""
                        >
                            <header className="bg-blue3 pa1-00 grid gtc12"
                            >
                                <img src={proj01}
                                    className="gc9s4 gr1s1 cover w-100 h-100"
                                    alt="errte"
                                />
                                <hgroup className="gc1s8 gr1s1 blue0 f1-25 tj pr2-00">
                                    <h2>
                                        project SubCategory Three
                                    </h2>
                                    <p className="mb0-00">
                                        Project SubCategory description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facilis magni numquam ad illum asperiores possimus optio vero architecto culpa excepturi animi odit ipsa eligendi praesentium, facere temporibus accusantium quisquam?
                                    </p>
                                </hgroup>
                            </header>
                            <ul className="grid gtc2-s gtc3-m ggap0-50 
                                justify-start
                                mv1-00"
                            >
                                {/* {% for project in projectSubCategory.project_set.all %} */}
                                <li className="flex justify-between flex-wra
                                    w-100
                                    mb0-00"
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
                                <li className="flex justify-between flex-wra
                                    w-100   
                                    mb0-00"
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
                                <li className="flex justify-between flex-wra
                                    w-100   
                                    mb0-00"
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
                                {/* {% endfor %} */}
                            </ul>
                            <footer className= "flex pa1-00 bg-blue0 gold i"> 
                                <div className= "mr0-50">project Category </div>  ||
                                <div className= "ml0-50"> project Sub Category Three</div>
                            </footer>
                        </li>
                    </ul>
                    {/* {% endfor %} */}
                </div>
                {/* <!-- Projects --> */}
                
                {/* <!--Projects page Footer --> */}
                <footer id = "projectsPage__Footer"
                    className="gc1s12 mb1-00"
                >
                    <SectionFooter 
                        sectionTitle = "Projects"
                    />
                </footer>
                {/* <!--Projects page Footer --> */}
            </main>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="" 
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

export default ProjectCategoryDetail