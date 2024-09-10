import React from 'react'
import map from '../../../images/projects/_partials/samplemap.jpg'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'
const ProjectData = () => {
    return (
        <div class="grid gtc12 ggap1-00
            ph1-00 mb3-00"
        >
            {/* <!-- Project Data Title --> */}
            <hgroup id="project_data Title"
                class="gc1s12 gr1s1">
                <h2 class="mv1-00
                    f2-00 f3-00-m"
                >
                    PROJECT DATA
                </h2>     
            </hgroup>
            {/* <!-- Project Data Title --> */}
            <div class="gc1s12 gr2s1 
                grid gtc12 ggap0-50"
            >
                <div id="projectData--projectCoordinator" 
                    class="gc1s4 gr1s1 pa0-50 bg-blue2"
                >
                    <hgroup class="mb1-00 white-90">
                        <h2 class="mb0-50 f0-75">
                            Project Coordinator
                        </h2>
                        <p class="mb0-25">
                            Arc. Agyei Marfo Isaac
                        </p>
                    </hgroup>
                </div>

                <div id="projectData--projectLeads" 
                    class="gc1s4 gr2s1 bg-blue1 pa0-50"
                >
                    <hgroup class="mb0-00 white-90">
                        <h2 class="mb0-50 f0-75">
                            Project Leads
                        </h2>
                        <ul class="mb0-25">
                            <li>Arc. Agyei Marfo Isaac</li>
                            <li>Arc. Amen A. K. Gbeckor-Kove</li>
                            <li>Arc. Basil Akushey</li>
                        </ul>
                    </hgroup>
                </div>

                <div id="projectData--Data" 
                    class="gc1s12 pa0-50 bg-white"
                >
                    <h4>Data</h4>
                    <div class="flex justify-between">
                        <div id=""
                            class="w-100"
                        >
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                    Start Date
                                    </h5>
                                    <p class="mb0-25"> 
                                            November 2012, 
                                    </p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                    Completion Date
                                    </h5>
                                    <p class="mb0-25">
                                            March 2015
                                    </p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Location
                                    </h5>
                                    <p class="mb0-25">project.location</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Site Area
                                    </h5>
                                    <p class="mb0-25">12,450 acres</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Gross Floor Area
                                    </h5>
                                    <p class="mb0-25">12,450 m<sup>2</sup></p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Floors
                                    </h5>
                                    <p class="mb0-25">6</p>
                            </hgroup>
                        </div>
                        
                        <div id=""
                            class="w-100">
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        General Contractor
                                    </h5>
                                    <p class="mb0-25">Consar Limited</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Electrical Contractors
                                    </h5>
                                    <p class="mb0-25">JLM</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Mechanical Contractors
                                    </h5>
                                    <p class="mb0-25">FTH</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Plumbing Contractors
                                    </h5>
                                    <p class="mb0-25">THE</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Facade Contractors
                                    </h5>
                                    <p class="mb0-25">ExtFac</p>
                            </hgroup>
                        </div>
                        
                        <div id=""
                            class="w-100"
                        >
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                        Additional Attributes
                                    </h5>
                                    <p class="mb0-25">Data Values</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                class="">
                                    <h5 class="mb0-50">
                                       Additional Attributes
                                    </h5>
                                    <p class="mb0-25">Data Values</p>
                            </hgroup>
                        </div>
                    </div>
                </div>

                <div class="gc5s8 gr1s2
                        w-100 h0-00 pb-100
                        bg-gold"
                >
                    <img src = {map}
                        class="w-100"
                        alt="tttt"
                    />
                </div>

                <div class="gc1s6 gr5s1
                        w-100 h-100
                        pa0-50 bg-white
                        "
                >
                    <h2>Awards</h2>
                    <div >
                        <div class="flex">
                            <div class="mr2-00">2008</div>
                            <div>GIA National Award</div>
                        </div>
                        <div class="flex">
                            <div class="mr2-00">2008</div>
                            <div>Environ Award</div>
                        </div>
                        <div class="flex">
                            <div class="mr2-00">2008</div>
                            <div>Green Earth Award</div>
                        </div>
                    </div>
                </div>

                <div class="gc7s6 gr5s1
                        w-100 h-100 pa0-50 bg-white
                        "
                >
                    <h2>Other Project Team Members</h2>
                    <div className="flex">
                        <ul class="flex flex-wrap">
                            <li class="mv0-50 mr0-50"><small>Arc. Walter Sermodzi </small></li>
                            <li class="mv0-50 mr0-50"><small>Ing. Baffoe Bonnie </small></li>
                            <li class="mv0-50 mr0-50"><small>Surv. Stephen Ntim </small></li>
                            <li class="mv0-50 mr0-50"><small>Arc. Walter Sermodzi </small></li>
                            
                        </ul>
                        <ul class="flex flex-wrap">
                            <li class="mv0-50 mr0-50">
                                <small>Arc. Walter Sermodzi </small>
                            </li>
                            <li class="mv0-50 mr0-50">
                                <small>Ing. Baffoe Bonnie </small>
                            </li>
                            <li class="mv0-50 mr0-50">
                                <small>Surv. Stephen Ntim </small>
                            </li>
                            <li class="mv0-50 mr0-50">
                                <small>Arc. Walter Sermodzi </small>
                            </li>
                        </ul>
                    
                    </div>
                </div>

                <div class="gc1s4 gr3s1
                        w-100 h0-00 pb-100
                        bg-blue0 white-90">
                    <h4 class="pa0-50">Job Sheets</h4>
                    <p class="pa0-50">English</p>
                </div>
                
                <div class="gc9s4 gr3s1
                        w-100 h-100
                        bg-black-40 white-90"
                >
                    <h4 class="pa0-50">News</h4>
                </div>

                <div class="gc5s4 gr3s1
                        w-100 h-100
                        bg-yellow white-90">
                    <h4 class="pa0-50">News</h4>
                </div>
            </div>
            <footer className="gr3s1 gc1s12">
                <ProjectSectionFooter />
            </footer>
        </div>
    )
}

export default ProjectData
