import projectsBanner from '../../images/projects/00.jpeg'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLProjectsNav from '../../components/organisms/navs/AESL_ProjectsNav'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import { Link } from 'react-router-dom'

const ProjectsList = () => {
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
                    title ='projects List'
                />
                <AESLProjectsNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <main className="bg-white grid gtc12"
            >
                <header id="functions--overview"
                                className="gr1s1 gc2s10 f1-25"
                            >
                    <hgroup id=""
                        className="mv2-00"
                    >
                        <p className=" 
                                lh-copy tj"
                        >
                            These are the Projects of The Architectural and Engineering Services Corporation (AESC) as it was then called, was established in 1973 under the National Redemption Council Decree (NRCD) 193 to take over the consultancy functions of the then Public Works Department (PWD). 
                        </p>     
                        <p className=" 
                            lh-copy tj"
                        >
                            The objects of the Corporation were:
                        </p>     
                    </hgroup> 
                </header>
    
                {/* <!-- Projects List--> */}
                <div id="projects"
                    className= "gc1s12 ph1-00 mt2-00"
                >
                    <div 
                        className="flex 
                            b
                            bb"
                    >
                        <span className="w10-00 pb0-50 mb0-50 ">Start Date</span>
                        <span className="w10-00 pb0-50 mb0-50 ">Category</span>
                        <span className="w14-00 pb0-50 mb0-50">SubCategory</span>
                        <span className="w20-00 pb0-50 mb0-50">Project Name</span>
                        <span className="w10-00 pb0-50 mb0-50">Client Name</span>
                        <span className="w10-00 pb0-50 mb0-50">Location</span>
                    </div>
                    <ul className="mb1-00"
                    >
                        {/* {% for project in projects %} */}
                            <li className="flex items-center justify-between
                                w-100 f1-00"
                            >
                                <Link to ="/projects/project-details"
                                    className="dib w-100"
                                >
                                    <article id="" 
                                        className="flex items-center justify-center"
                                    >
                                        <hgroup 
                                            className="flex justify-start 
                                            w-100
                                            blue0 bb"
                                        >
                                            <p className="w10-00">Sept. 2018</p>
                                            <p className="w10-00">Civic and Culture</p>
                                            <p className="w14-00">Culture </p>
                                            <p className="w20-00">project Name</p>
                                            <p className="w10-00">Client Name</p>
                                            <p className="w10-00">Location</p>
                                        </hgroup>
                                    </article>
                                </Link>
                            </li>
                            <li className="flex items-center justify-between
                                w-100 f1-00"
                            >
                                <Link to ="/projects/project-details"
                                    className="dib w-100"
                                >
                                    <article id="" 
                                        className="flex items-center justify-center"
                                    >
                                        <hgroup 
                                            className="flex justify-start 
                                            w-100
                                            blue0 bb"
                                        >
                                            <p className="w10-00">Sept. 2018</p>
                                            <p className="w10-00">Civic and Culture</p>
                                            <p className="w14-00">Civic </p>
                                            <p className="w20-00">project Name</p>
                                            <p className="w10-00">Client Name</p>
                                            <p className="w10-00">Location</p>
                                        </hgroup>
                                    </article>
                                </Link>
                            </li>
                            <li className="flex items-center justify-between
                                w-100 f1-00"
                            >
                                <Link to ="/projects/project-details"
                                    className="dib w-100"
                                >
                                    <article id="" 
                                        className="flex items-center justify-center"
                                    >
                                        <hgroup 
                                            className="flex justify-start 
                                            w-100
                                            blue0 bb"
                                        >
                                            <p className="w10-00">Sept. 2018</p>
                                            <p className="w10-00">Education</p>
                                            <p className="w14-00">High School</p>
                                            <p className="w20-00">project Name</p>
                                            <p className="w10-00">Client Name</p>
                                            <p className="w10-00">Location</p>
                                        </hgroup>
                                    </article>
                                </Link>
                            </li>
                            <li className="flex items-center justify-between
                                w-100 f1-00"
                            >
                                <Link to ="/projects/project-details"
                                    className="dib w-100"
                                >
                                    <article id="" 
                                        className="flex items-center justify-center"
                                    >
                                        <hgroup 
                                            className="flex justify-start 
                                            w-100
                                            blue0 bb"
                                        >
                                            <p className="w10-00">Sept. 2018</p>
                                            <p className="w10-00">Health</p>
                                            <p className="w14-00">Polyclinic </p>
                                            <p className="w20-00">project Name</p>
                                            <p className="w10-00">Client Name</p>
                                            <p className="w10-00">Location</p>
                                        </hgroup>
                                    </article>
                                </Link>
                            </li>
                        {/* {% endfor %} */}
                    </ul>

                    <article id="misc_gold" 
                        className="gr3s2 gc1s3
                            flex items-center justify-center
                            bg-gold h4-00 w8-00
                        ">
                    </article>
        
                    <article id="misc_blue" 
                        className="gr3s2 gc10s3
                            flex items-center justify-center
                            bg-black-90 h6-00 w2-00
                            ">
                    </article>

                </div>
                <footer id = "projectsPage__Footer"
                    className="gc1s12 mv1-00"
                >
                    <SectionFooter 
                        sectionTitle = "Projects List"
                    />
                </footer>
                {/* <!-- Projects List --> */}
                {/* <!-- Page Main --> */}
            </main>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="" 
                className=""
            >
                <AESLPageFooter
                    pageTitle = 'Projects List'
                />
            </footer>
            {/* Page Footer End */}
        </article>
    )
}

export default ProjectsList