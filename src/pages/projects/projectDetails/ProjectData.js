import React from 'react'
import map from '../../../images/projects/_partials/samplemap.jpg'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'
import {projects} from '../../../data/projectsInfo'
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
                            {projects[0].projectCoordinator}
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
                            <li>{projects[0].projectLeads.projectLead1}</li>
                            <li>{projects[0].projectLeads.projectLead2}</li>
                            <li>{projects[0].projectLeads.projectLead3}</li>
                        </ul>
                    </hgroup>
                </div>

                <div id="projectData--Data" 
                    className="gc1s12 pa0-50 bg-white"
                >
                    <h4>Data</h4>
                    <div className="flex justify-between"
                    >
                        <div id=""
                            className="w-100"
                        >
                            <hgroup id="project_summary_1" 
                                className=""
                            >
                                    <h5 className="mb0-50">
                                    Start Date
                                    </h5>
                                    <p className="mb0-25"> 
                                        {projects[0].dates.start} 
                                    </p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                    Completion Date
                                    </h5>
                                    <p className="mb0-25">
                                    {projects[0].dates.completed} 
                                    </p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Location
                                    </h5>
                                    <p className="mb0-25">{projects[0].location}</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Site Area
                                    </h5>
                                    <p className="mb0-25">{projects[0].siteArea} acres</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Gross Floor Area
                                    </h5>
                                    <p className="mb0-25">{projects[0].grossFloorArea }m<sup>2</sup></p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Floors
                                    </h5>
                                    <p className="mb0-25">{projects[0].numberOfFloors }</p>
                            </hgroup>
                        </div>
                        
                        <div id=""
                            className="w-100">
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        General Contractor
                                    </h5>
                                    <p className="mb0-25">{projects[0].contractors.general}</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Electrical Contractors
                                    </h5>
                                    <p className="mb0-25">{projects[0].contractors.electrical}</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Mechanical Contractors
                                    </h5>
                                    <p className="mb0-25">{projects[0].contractors.mechanical}</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Plumbing Contractors
                                    </h5>
                                    <p className="mb0-25">{projects[0].contractors.plumbing}</p>
                            </hgroup>
                            <hgroup id="project_summary_1" 
                                className="">
                                    <h5 className="mb0-50">
                                        Facade Contractors
                                    </h5>
                                    <p className="mb0-25">{projects[0].contractors.facade}</p>
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
                    <div className="f0-75">
                        <div className="flex">
                            <div className="mr2-00">{projects[0].awards.award1.date}</div>
                                
                                    <div>
                                        <div>
                                        <span className="gray">Award Name:</span> {projects[0].awards.award1.name}
                                        </div>
                                        <div>
                                           <span className="gray">Awarded by:</span> {projects[0].awards.award1.institution}
                                        </div>
                                        <a href={projects[0].awards.award1.url}
                                            className="gray"
                                        >
                                            {projects[0].awards.award1.url}
                                        </a>
                                    </div> 
                               
                        </div>
                        <div className="flex">
                            <div className="mr2-00">{projects[0].awards.award2.date}</div>
                            <div>
                                <div>
                                <span className="gray">Awarded Name:</span> {projects[0].awards.award2.name}
                                </div>
                                <div>
                                    {projects[0].awards.award2.institution}
                                </div>
                                <a href={projects[0].awards.award2.url}
                                    className="gray"
                                >
                                    {projects[0].awards.award2.url}
                                </a>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr2-00">{projects[0].awards.award3.date}</div>
                            <div>
                                <div>
                                <span className="gray">Awarded Name:</span> {projects[0].awards.award3.name}
                                </div>
                                <div>
                                    {projects[0].awards.award3.institution}
                                </div>
                                <a href={projects[0].awards.award3.url}
                                    className="gray"
                                >
                                    {projects[0].awards.award3.url}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gc7s6 gr5s1
                        w-100 h-100 pa0-50 bg-white
                        "
                >
                    <h2>Other Project Team Members</h2>
                    <div className="flex ggap2-00"
                    >
                        <ul className="flex flex-column w-100"
                        >
                            <li>{projects[0].otherTeamMembers[0][0]}</li>
                            <li>{projects[0].otherTeamMembers[0][1]}</li>
                            <li>{projects[0].otherTeamMembers[0][2]}</li>
                            <li>{projects[0].otherTeamMembers[0][3]}</li>
                            <li>{projects[0].otherTeamMembers[0][4]}</li>
                            <li>{projects[0].otherTeamMembers[0][5]}</li>
                            
                        </ul>
                        <ul className="flex flex-column w-100"
                        >
                            <li>{projects[0].otherTeamMembers[1][0]}</li>
                            <li>{projects[0].otherTeamMembers[1][1]}</li>
                            <li>{projects[0].otherTeamMembers[1][2]}</li>
                            <li>{projects[0].otherTeamMembers[1][3]}</li>
                            <li>{projects[0].otherTeamMembers[1][4]}</li>
                            <li>{projects[0].otherTeamMembers[1][5]}</li>
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
