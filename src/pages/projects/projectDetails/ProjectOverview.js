import {projects} from '../../../data/projectsInfo'

// console.log(projects)
const ProjectOverview = () => {
  return (
    <div 
        className="gr1s1 gc2s10
            pb2-00 mh1-00
            blue0 bb"
    >
        <hgroup id="Project_Overview_1"
            className="f1-25 f1-50-m "
        >
        <h2 className="mv1-00
            f2-00 f3-00-m ttu"
        >
            Project Overview
        </h2>
        </hgroup> 
        <div className="f1-25 tj lh-copy">
            <ul>
                <li>{projects[0].description.p1}</li>
                <li>{projects[0].description.p2}</li>
                <li>{projects[0].description.p3}</li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectOverview
