// Images
import projectsBanner from '../../images/projects/00.jpeg'
import proj01 from '../../images/projects/civic_and_culture/civic/1_0.jpg'
import proj02 from '../../images/projects/civic_and_culture/civic/2.PNG'
// Compoments
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLProjectsNav from '../../components/organisms/navs/AESL_ProjectsNav'
import ProjectCard from '../../components/organisms/cards/ProjectCard'
import SectionFooter from '../../components/organisms/footers/SectionFooter'


const ProjectCategoryDetail = () => {
  
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
                    title ='projects Category Name'
                />
                <AESLProjectsNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <main className="bg-white grid gtc12">
                {/* <!-- Overview --> */}
                <header id="overview"
                    class="gc1s12 grid gtc12 ggap1-00"
                >
                    {/* <!-- Project_categories_overview -->  */}
                    <div id="overview"
                        class="gr1s1 gc2s10 
                            w-100 pt4-00
                            blue0 bb"
                    >
                        <hgroup id="Project_Overview_1"
                            class="f1-50"
                        >
                            <p class="mb0-00 lh-copy tracked tj">
                                projectCategory Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem atque libero. Dolores quos eaque repudiandae optio aperiam laboriosam ratione harum aut quam, doloremque magni minima eligendi quisquam dolor praesentium ut similique, voluptates debitis eveniet provident assumenda blanditiis ipsa! Voluptatibus consequatur quidem mollitia nihil facilis natus suscipit nemo deserunt qui.
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
                    <ul class = "mb2-00"
                    >
                        <li class=""
                        >
                            <header class="bg-blue3 pa1-00 grid gtc12"
                            >
                                <hgroup class="gc1s8 gr1s1 blue0 f1-25 tj pr2-00">
                                    <h2>
                                        project SubCategory One
                                    </h2>
                                    <p class="mb0-00">
                                        project SubCategory description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facilis magni numquam ad illum asperiores possimus optio vero architecto culpa excepturi animi odit ipsa eligendi praesentium, facere temporibus accusantium quisquam?
                                    </p>
                                </hgroup>
                                <img src={proj01}
                                    class="gc9s4 gr1s1 cover w-100 h-100"
                                    alt="errte"
                                />
                            </header>
                            <ul class="grid gtc2-s gtc3-m ggap0-50 
                                justify-start
                                mv1-00"
                            >
                                {/* {% for project in projectSubCategory.project_set.all %} */}
                                <li class="flex justify-between flex-wra
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
                                <li class="flex justify-between flex-wra
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
                                <li class="flex justify-between flex-wra
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
                                <li class="flex justify-between flex-wra
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
                            <footer class = "flex pa1-00 bg-blue0 gold i"> 
                                <div class = "mr0-50">project Category </div> ||
                                <div class = "ml0-50"> project SubCategory One</div>
                            </footer>
                        </li>
                    </ul>
                    {/* {% endfor %} */}
                    {/* {% for projectSubCategory in projectSubCategories %} */}
                   <ul class = "mv3-00"
                    >
                        <li class=""
                        >
                            <header class="bg-blue3 pa1-00 grid gtc12"
                            >
                                <img src={proj01}
                                    class="gc9s4 gr1s1 cover w-100 h-100"
                                    alt="errte"
                                />
                                <hgroup class="gc1s8 gr1s1 blue0 f1-25 tj pr2-00">
                                    <h2>
                                        project SubCategory Two
                                    </h2>
                                    <p class="mb0-00">
                                        project SubCategory description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facilis magni numquam ad illum asperiores possimus optio vero architecto culpa excepturi animi odit ipsa eligendi praesentium, facere temporibus accusantium quisquam?
                                    </p>
                                </hgroup>
                            </header>
                            <ul class="grid gtc2-s gtc3-m ggap0-50 
                                justify-start
                                mv1-00"
                            >
                                {/* {% for project in projectSubCategory.project_set.all %} */}
                                <li class="flex justify-between flex-wra
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
                                <li class="flex justify-between flex-wra
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
                            <footer class = "flex pa1-00 bg-blue0 gold i"> 
                                <div class = "mr0-50">project Category </div>  ||
                                <div class = "ml0-50"> project Sub Category Two</div>
                            </footer>
                        </li>
                    </ul>
                    {/* {% endfor %} */}
                    {/* {% for projectSubCategory in projectSubCategories %} */}
                   <ul class = "mv3-00"
                    >
                        <li class=""
                        >
                            <header class="bg-blue3 pa1-00 grid gtc12"
                            >
                                <img src={proj01}
                                    class="gc9s4 gr1s1 cover w-100 h-100"
                                    alt="errte"
                                />
                                <hgroup class="gc1s8 gr1s1 blue0 f1-25 tj pr2-00">
                                    <h2>
                                        project SubCategory Three
                                    </h2>
                                    <p class="mb0-00">
                                        Project SubCategory description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facilis magni numquam ad illum asperiores possimus optio vero architecto culpa excepturi animi odit ipsa eligendi praesentium, facere temporibus accusantium quisquam?
                                    </p>
                                </hgroup>
                            </header>
                            <ul class="grid gtc2-s gtc3-m ggap0-50 
                                justify-start
                                mv1-00"
                            >
                                {/* {% for project in projectSubCategory.project_set.all %} */}
                                <li class="flex justify-between flex-wra
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
                                <li class="flex justify-between flex-wra
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
                                <li class="flex justify-between flex-wra
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
                            <footer class = "flex pa1-00 bg-blue0 gold i"> 
                                <div class = "mr0-50">project Category </div>  ||
                                <div class = "ml0-50"> project Sub Category Three</div>
                            </footer>
                        </li>
                    </ul>
                    {/* {% endfor %} */}
                </div>
                {/* <!-- Projects --> */}
                
                {/* <!--Projects page Footer --> */}
                <footer id = "projectsPage__Footer"
                    class="gc1s12 mb1-00"
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
                    pageName = 'Projects'
                />
            </footer>
            {/* Page Footer End */}
        </article>
    )
}

export default ProjectCategoryDetail