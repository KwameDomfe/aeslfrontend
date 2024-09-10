import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'
import xxx from '../../../images/placeholders/regular_images/sky.jpg'

const ProjectGallery = () => {
  return (
        <div class="grid gtc12 ggap1-00
        ph1-00 w-100
        mb2-00"
        >
            <hgroup id=""
                class="gc1s12"
            >
                <h2 class="mv1-00
                    f2-00 f3-00-m"
                >
                    PROJECT GALLERY
                </h2>
            </hgroup> 
            
            <article id="project_gallery_1" 
                class="gr2s1 gc1s6
                    flex items-center justify-center
                    relative"
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_gallery_1" 
                class="gr2s1 gc7s6
                    flex items-center justify-center
                    relative"
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_gallery_1" 
                class="gr3s1 gc1s6
                    flex items-center justify-center
                    relative"
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_gallery_1" 
                class="gr3s1 gc7s6
                    flex items-center justify-center
                    relative"
            >
               <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <footer id="project_Concept_gallery_5" 
                class="gr4s1 gc1s12
                    items-center justify-center
                    h-100
                    relative"
            >
                <ProjectSectionFooter />
            </footer>
        </div>
    )
}

export default ProjectGallery
