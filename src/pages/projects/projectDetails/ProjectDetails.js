import SubCategoryHeaderBanner from "../../../components/molecules/banners/SubCategoryHeaderBanner"
import AESLPageFooter from "../../../components/organisms/footers/AESLPageFooter"
import AESLProjectDetailsNav from "../../../components/organisms/navs/AESLProjectDetailsNav"
import projectsBanner from '../../../images/projects/civic_and_culture/culture/5_0.jpg'
import ProjectOverview from "./ProjectOverview"
import ProjectGallery from "./ProjectGallery"
import ProjectConcept from "./ProjectConcept"
import ProjectDesign from "./ProjectDesign"
import ProjectConstruction from "./ProjectConstruction"
import ProjectData from "./ProjectData"
import RelatedProjects from "./RelatedProjects"
import { Link } from "react-router-dom"

const ProjectDetails = () => {
  return (
    <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header id=""
                className="bg-yellow pb1-00"
            >
                <SubCategoryHeaderBanner 
                    image = {projectsBanner}
                    title ='project Name'
                    subTitle = 'Location'
                />
                <AESLProjectDetailsNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <div id="l_3:1_Layout_ProjectDetails" 
                class="grid gtc4"
            >    
                {/* <!--Page Main Start --> */}
                    <main id="lc_gc1s3_Main_ProjectDetils"
                        class="gc1s4 gc1s3-l
                            min-vh-100"
                    >   
                        {/* <!-- Project Details--> */}
                        <article id="projectDetails"
                            class="min-vh-100 w-100 
                            bg-white blue0"
                        >
                            {/* <!-- Projects Overview --> */}
                            <section id="projectDetails--Overview"
                                class=""
                            >
                                <ProjectOverview />
                            </section>
                            {/* <!-- Projects Overview --> */}

                            {/* <!-- Projects gallery --> */}
                            <section id="projectDetails--Gallery"
                                class=""
                            >   
                                <ProjectGallery />
                            </section>
                            {/* <!-- Projects gallery --> */}
                            
                            {/* <!-- Projects Concept --> */}
                            <section id="projectDetails--Concept"
                                class=""
                            >
                                <ProjectConcept />
                            </section>
                            {/* <!-- Projects Concept -->  */}

                            {/* <!-- Projects Design --> */}
                            <section id="projectDetails--Design"
                                class=""
                            >
                                <ProjectDesign />
                            </section>
                            {/* <!-- Projects Design -->  */}

                            {/* <!-- Projects Construction --> */}
                            <section id="projectDetails--Construction"
                                class=""
                            >
                               <ProjectConstruction />
                            </section>
                            {/* <!-- Projects Construction -->  */}

                            {/* <!-- Project Data Start --> */}
                            <section id="projectDetails--Data"
                                class=""
                            >
                                <ProjectData />
                            </section>
                            {/* <!-- Project Data End --> */}
                            
                            {/* <!-- Related Projects Start --> */}
                            <section id="projectDetails--RelatedProjects"
                                class=""
                            >
                                <RelatedProjects />
                            </section>
                            {/* <!-- Related Projects End --> */}
                            {/* <!-- Page Footer Start--> */}
                            <footer id="pageFooter"
                                class="mb1-00"
                            > 
                                {/* {% include 'website/_partials/page_footer.html' %} */}
                            </footer>
                            {/* <!-- Page Footer End --> */}
                        </article>
                            {/* <!-- Project Data -->  */}
                    </main>
                {/* <!-- Page Main End --> */}

                {/* <!-- Page Aside Start --> */}
                    <aside id="lc_gc4s1_Aside_ProjectDetils" 
                        class="gc4s1-l bg-yellow"
                    >
                        <nav id=""
                            class="dn flex-l flex-column-l justify-start-l
                                min-vh-100 w-100 
                                 
                                sticky top-0"
                        >
                            <hgroup class="ttu f1-00 pb1-00 bg-white-20 pv1-00 ma0-50">
                                <Link to="/projects"
                                    class="blue0 ml1-50"    
                                >Back to Projects</Link>
                            </hgroup>
                            <ul class="bl bw3 b--blue0 pa1-00 f0-75 blue0 bg-white-20 ma0-50"
                            >
                                <h2 className="pb0-50 bb ttc">On this page</h2>
                                <li class="mb1-00 i">
                                    <a href="#projectDetails--Overview"
                                        class="blue0"
                                    >Project Overview</a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#projectDetails--Gallery"
                                                class="blue0"
                                            >Project Gallery</a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#projectDetails--Concept"
                                                class="blue0"
                                            >Project Concept</a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#projectDetails--Design"
                                                class="blue0"
                                            >Project Design</a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#projectDetails--Construction"
                                                class="blue0"
                                            >Project Construction</a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#projectDetails--Data"
                                                class="blue0"
                                            >Project Data</a>
                                </li>
                                <li class=" i">
                                    <a href="#projectDetails--RelatedProjects"
                                                class="blue0"
                                            >Related Projects</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                {/* <!-- Page Aside End --> */}
            </div>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="" 
                className=""
            >
                <AESLPageFooter
                    pageName = 'Projects / Project Name'
                />
            </footer>
            {/* Page Footer End */}
        </article>
  )
}

export default ProjectDetails
