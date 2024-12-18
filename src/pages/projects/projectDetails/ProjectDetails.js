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
import {projects} from '../../../data/projectsInfo'
import { useEffect } from "react"
import AESL_PageFooter from "../../../components/organisms/footers/AESLPageFooter"

const ProjectDetails = (props) => {
    
    useEffect(() => {
      
        document.title={}
        return () => {
       
        }
    }, [])
    
    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header id=""
                className="bg-yellow pb1-00"
            >
                <SubCategoryHeaderBanner 
                    image = {projects[0].thumbnail}
                    title ={projects[0].name}
                    subTitle = 'Location'
                />
                <AESLProjectDetailsNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <div id="l_3:1_Layout_ProjectDetails" 
                className="grid gtc4"
            >    
                {/* <!--Page Main Start --> */}
                    <main id="lc_gc1s3_Main_ProjectDetils"
                        className="gc1s4 gc1s3-l
                            min-vh-100"
                    >   
                        {/* <!-- Project Details--> */}
                        <article id="projectDetails"
                            className="min-vh-100 w-100 
                            bg-white blue0"
                        >
                            {/* <!-- Projects Overview --> */}
                            <section id="projectDetails--Overview"
                                className=""
                            >
                                <ProjectOverview />
                            </section>
                            {/* <!-- Projects Overview --> */}

                            {/* <!-- Projects gallery --> */}
                            <section id="projectDetails--Gallery"
                                className=""
                            >   
                                <ProjectGallery />
                            </section>
                            {/* <!-- Projects gallery --> */}
                            
                            {/* <!-- Projects Concept --> */}
                            <section id="projectDetails--Concept"
                                className=""
                            >
                                <ProjectConcept />
                            </section>
                            {/* <!-- Projects Concept -->  */}

                            {/* <!-- Projects Design --> */}
                            <section id="projectDetails--Design"
                                className=""
                            >
                                <ProjectDesign />
                            </section>
                            {/* <!-- Projects Design -->  */}

                            {/* <!-- Projects Construction --> */}
                            <section id="projectDetails--Construction"
                                className=""
                            >
                               <ProjectConstruction />
                            </section>
                            {/* <!-- Projects Construction -->  */}

                            {/* <!-- Project Data Start --> */}
                            <section id="projectDetails--Data"
                                className=""
                            >
                                <ProjectData />
                            </section>
                            {/* <!-- Project Data End --> */}
                            
                            {/* <!-- Related Projects Start --> */}
                            <section id="projectDetails--RelatedProjects"
                                className=""
                            >
                                <RelatedProjects />
                            </section>
                            {/* <!-- Related Projects End --> */}
                            {/* <!-- Page Footer Start--> */}
                            <footer id="pageFooter"
                                className="mb1-00"
                            > 
                                <AESL_PageFooter />
                            </footer>
                            {/* <!-- Page Footer End --> */}
                        </article>
                            {/* <!-- Project Data -->  */}
                    </main>
                {/* <!-- Page Main End --> */}

                {/* <!-- Page Aside Start --> */}
                    <aside id="lc_gc4s1_Aside_ProjectDetils" 
                        className="gc4s1-l bg-yello"
                    >
                        <nav id=""
                            className="dn flex-l flex-column-l justify-start-l
                                min-vh-100 w-100 
                                 
                                sticky top-0"
                        >
                            <hgroup className="ttu f1-00 pb1-00 bg-white pv1-00 ma0-50">
                                <Link to="/projects"
                                    className="blue0 ml1-50"    
                                >Back to Projects</Link>
                            </hgroup>
                            <ul className="bl bw3 b--blue0 pa1-00 f0-75 blue0 bg-white-20 ma0-50"
                            >
                                <h2 className="pb0-50 bb ttc">On this page</h2>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Overview"
                                        className="blue0"
                                    >Project Overview</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Gallery"
                                                className="blue0"
                                            >Project Gallery</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Concept"
                                                className="blue0"
                                            >Project Concept</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Design"
                                                className="blue0"
                                            >Project Design</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Construction"
                                                className="blue0"
                                            >Project Construction</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Data"
                                                className="blue0"
                                            >Project Data</a>
                                </li>
                                <li className=" i">
                                    <a href="#projectDetails--RelatedProjects"
                                                className="blue0"
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
                    pageTitle = 'Projects / Project Name'
                />
            </footer>
            {/* Page Footer End */}
        </article>
  )
}

export default ProjectDetails
