import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'
import xxx from '../../../images/placeholders/regular_images/sky.jpg'


const ProjectDesign = () => {
    return (
        <div className="grid gtc12 ggap1-00
                                ph1-00 mb3-00"
        >
            {/* <!-- Project Design Title --> */}
            <hgroup id="project_design_title"
                class="gc1s12">
                <h2 class="mv1-00
                    f2-00 f3-00-m"
                >
                    PROJECT DESIGN
                </h2>     
            </hgroup>
            {/* <!-- Project Design Title --> */}

            {/* <!-- Project design Description --> */}
            <article id="project_design_description" 
                class="gr2s1 gc1s12 flex w-100 ggap2-00 tj"
            >
                <div class="f1-25 tj lh-copy">
                    <p>Project Design Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officia molestias doloremque omnis? Ullam unde eum dignissimos minus totam recusandae nesciunt maxime distinctio cum voluptates, suscipit nemo magnam cupiditate at reiciendis quas officiis. Officia eum consectetur molestias sunt magni. Adipisci culpa maxime repellat est voluptas perferendis, porro rem dolor ullam?</p>
                </div> 
            </article>
            {/* <!-- Project design Description --> */}

            {/* <!-- Project design gallery --> */}
            <article id="project_design_gallery_1" 
                class="gr3s2 gc2s4
                    flex items-center justify-center
                    relative
                    "
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_design_gallery_2" 
                class="gr3s3 gc7s6
                    flex items-center justify-center
                    relative"
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_design_gallery_3" 
                class="gr6s3 gc7s6
                    flex items-center justify-center
                    min-vh-50
                    relative
                    "
            >
              <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>

            <article id="project_design_gallery_4" 
                class="gr5s2 gc2s4
                    flex items-center justify-center
                    h-100
                    relative"
            >
               
            </article>

            <article id="project_design_gallery_5" 
                class="gr7s2 gc2s4
                    flex items-center justify-center
                    h-100
                    relative"
            >
                <ProjectDetailCard 
                    image={xxx} 
                    title="Concept Image One" 
                    description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
                />
            </article>
            
            <footer id="project_Concept_gallery_5" 
                class="gr9s1 gc1s12
                    items-center justify-center
                    h-100
                    relative"
            >
                <ProjectSectionFooter />
            </footer>
            
            {/* <!-- Project Concept gallery --> */}
        </div>
    )
}

export default ProjectDesign
