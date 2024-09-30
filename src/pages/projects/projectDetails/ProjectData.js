import React from 'react'
import map from '../../../images/projects/_partials/samplemap.jpg'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'
const ProjectData = () => {
    return (
        <div className="grid gtc12 ggap1-00
            ph1-00 mb3-00"
        >
            {/* <!-- Project Data Title --> */}
            <hgroup id="project_data Title"
                className="gc1s12 gr1s1">
                <h2 className="mv1-00
                    f2-00 f3-00-m"
                >
                    PROJECT DATA
                </h2>     
            </hgroup>
            {/* <!-- Project Data Title --> */}
            <div className="gc1s12 gr2s1 
                grid gtc12 ggap0-50"
            >
                <div id="projectData--projectCoordinator" 
                    className="gc1s4 gr1s1 pa0-50 bg-blue2"
                >
                    <hgroup className="mb1-00 white-90">
                        <h2 className="mb0-50 f0-75">
                            Project Coordinator
                        </h2>
                        <p className="mb0-25">
                            Arc. Agyei Marfo Isaac
                        </p>
                    </hgroup>
                </div>

                <div id="projectData--projectLeads" 
                    className="gc1s4 gr2s1 bg-blue1 pa0-50"
                >
                    <hgroup className="mb0-00 white-90">
                        <h2 className="mb0-50 f0-75">
                            Project Leads
                        </h2>
                        <ul className="mb0-25">
                            <li>Arc. Agyei Marfo Isaac</li>
                            <li>Arc. Amen A. K. Gbeckor-Kove</li>
                            <li>Arc. Basil Akushey</li>
                        </ul>
                    </hgroup>
                </div>

                <div id="projectData--Data" 
                    className="gc1s12 pa0-50 bg-white"
                >
                    <h4>Data</h4>
                    <div className="flex justify-between">
                        <div id=""
                            className="w-100"
                        >
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                    Start Date
                                    </h5>
                                    <p className="mb0-25"> 
                                            November 2012, 
                                    </p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                    Completion Date
                                    </h5>
                                    <p className="mb0-25">
                                            March 2015
                                    </p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Location
                                    </h5>
                                    <p className="mb0-25">project.location</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Site Area
                                    </h5>
                                    <p className="mb0-25">12,450 acres</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Gross Floor Area
                                    </h5>
                                    <p className="mb0-25">12,450 m<sup>2</sup></p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Floors
                                    </h5>
                                    <p className="mb0-25">6</p>
                            </hgroup>
                        </div>
                        
                        <div id=""
                            className="w-100">
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        General Contractor
                                    </h5>
                                    <p className="mb0-25">Consar Limited</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Electrical Contractors
                                    </h5>
                                    <p className="mb0-25">JLM</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Mechanical Contractors
                                    </h5>
                                    <p className="mb0-25">FTH</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Plumbing Contractors
                                    </h5>
                                    <p className="mb0-25">THE</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Facade Contractors
                                    </h5>
                                    <p className="mb0-25">ExtFac</p>
                            </hgroup>
                        </div>
                        
                        <div id=""
                            className="w-100"
                        >
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Additional Attributes
                                    </h5>
                                    <p className="mb0-25">Data Values</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                       Additional Attributes
                                    </h5>
                                    <p className="mb0-25">Data Values</p>
                            </hgroup>
                        </div>
                    </div>
                </div>

                <div className="gc5s8 gr1s2
                        w-100 h0-00 pb-100
                        bg-gold"
                >
                    <img src = {map}
                        className="w-100"
                        alt="tttt"
                    />
                </div>

                <div className="gc1s6 gr5s1
                        w-100 h-100
                        pa0-50 bg-white
                        "
                >
                    <h2>Awards</h2>
                    <div >
                        <div className="flex">
                            <div className="mr2-00">2008</div>
                            <div>GIA National Award</div>
                        </div>
                        <div className="flex">
                            <div className="mr2-00">2008</div>
                            <div>Environ Award</div>
                        </div>
                        <div className="flex">
                            <div className="mr2-00">2008</div>
                            <div>Green Earth Award</div>
                        </div>
                    </div>
                </div>

                <div className="gc7s6 gr5s1
                        w-100 h-100 pa0-50 bg-white
                        "
                >
                    <h2>Other Project Team Members</h2>
                    <div className="flex">
                        <ul className="flex flex-wrap">
                            <li className="mv0-50 mr0-50"><small>Arc. Walter Sermodzi </small></li>
                            <li className="mv0-50 mr0-50"><small>Ing. Baffoe Bonnie </small></li>
                            <li className="mv0-50 mr0-50"><small>Surv. Stephen Ntim </small></li>
                            <li className="mv0-50 mr0-50"><small>Arc. Walter Sermodzi </small></li>
                            
                        </ul>
                        <ul className="flex flex-wrap">
                            <li className="mv0-50 mr0-50">
                                <small>Arc. Walter Sermodzi </small>
                            </li>
                            <li className="mv0-50 mr0-50">
                                <small>Ing. Baffoe Bonnie </small>
                            </li>
                            <li className="mv0-50 mr0-50">
                                <small>Surv. Stephen Ntim </small>
                            </li>
                            <li className="mv0-50 mr0-50">
                                <small>Arc. Walter Sermodzi </small>
                            </li>
                        </ul>
                    
                    </div>
                </div>

                <div className="gc1s4 gr3s1
                        w-100 h0-00 pb-100
                        bg-blue0 white-90">
                    <h4 className="pa0-50">Job Sheets</h4>
                    <p className="pa0-50">English</p>
                </div>
                
                <div className="gc9s4 gr3s1
                        w-100 h-100
                        bg-black-40 white-90"
                >
                    <h4 className="pa0-50">News</h4>
                </div>

                <div className="gc5s4 gr3s1
                        w-100 h-100
                        bg-yellow white-90">
                    <h4 className="pa0-50">News</h4>
                </div>
            </div>
            <footer className="gr3s1 gc1s12">
                <ProjectSectionFooter />
            </footer>
        </div>
    )
}

export default ProjectData