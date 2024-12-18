import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'
import xxx from '../../../images/placeholders/regular_images/sky.jpg'
import {projects} from '../../../data/projectsInfo'

const ProjectConcept = () => {
  return (
        <div className="grid gtc12 ggap1-00
        ph1-00 mb3-00"
        >
            {/* <!-- Project Concept Title Start --> */}
            <hgroup id="project_Concept Title"
                className="gc1s12 gr1s1">
                <h2 className="mv1-00
                    f2-00 f3-00-m"
                >
                    PROJECT CONCEPT
                </h2>
                <div className="f1-25 tj lh-copy">
                    <ul>
                        <li className="mb0-50">{projects[0].projectConcept[0]}</li>
                        <li className="mb0-50">{projects[0].projectConcept[1]}</li>
                        <li className="mb0-50">{projects[0].projectConcept[2]}</li>
                    </ul>
                </div>
            </hgroup>
            {/* <!-- Project Concept Title End --> */}

            {/* <!-- Project Concept gallery Start --> */}
            <article id="project_Concept_gallery_1" 
                className="gr3s2 gc2s4
                    grid items-end justify-center"
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_Concept_gallery_2" 
                className="gr3s3 gc7s6
                    grid items-end justify-center
                    "
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_Concept_gallery_3" 
                className="gr6s3 gc7s6
                    grid items-end justify-center
                    min-vh-50"
            >
               <ProjectDetailCard
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_Concept_gallery_4" 
                className="gr5s2 gc2s4
                    grid items-end justify-center
                    h-100
                    "
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>
            <article id="project_Concept_gallery_5" 
                className="gr7s2 gc2s4
                    grid items-end justify-center
                    h-100"
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>
            <footer id="project_Concept_footer" 
                className="gr9s1 gc1s12
                    items-center justify-center
                    h-100 mt1-00"
            >
                <ProjectSectionFooter />
            </footer>
            {/* <!-- Project Concept gallery End --> */}
        </div>
  )
}

export default ProjectConcept
