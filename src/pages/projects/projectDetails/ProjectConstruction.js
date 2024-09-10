import React from 'react'
import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard'
import xxx from '../../../images/placeholders/regular_images/sky.jpg'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'
const ProjectConstruction = () => {
  return (
    <div className="grid gtc12 ggap1-00
                                ph1-00 mb3-00">
       {/* <!-- Project constuction Title --> */}
       <hgroup id="project_constuction Title"
            class="gc1s12"
        >
            <h2 class="mv1-00
                f2-00 f3-00-m"
            >
                PROJECT CONSTRUCTION
            </h2>     
        </hgroup>
        {/* <!-- Project constuction Title --> */}

        {/* <!-- Project constuction Description --> */}
        <article id="project_constuction_Description" 
            class="gr2s1 gc1s12 ggap2-00 flex w-100 tj"
        >
        <div class="f1-25 tj lh-copy">
            {/* {% for p in project_construction %} */}
            <p>
                Project Contruction Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellendus rerum explicabo, quam modi odit. Eum perferendis quibusdam accusantium rem doloribus quo aspernatur beatae maxime repudiandae voluptates quisquam ex labore sed autem, tempora magni veritatis iusto tempore saepe consectetur. Voluptatibus at adipisci beatae officia in. Corporis, sunt. Ipsam, perferendis molestiae.
            </p>
            {/* {% endfor %} */}
        </div> 
        </article>    
        {/* <!-- Project constuction Description --> */}

        {/* <!-- Project constuction gallery --> */}
        <article id="project_constuction_gallery_1" 
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

        <article id="project_constuction_gallery_2" 
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

        <article id="project_constuction_gallery_3" 
            class="gr6s3 gc7s6
                flex items-center justify-center
                min-vh-50
                relative " 
        >
            <ProjectDetailCard 
                image={xxx} 
                title="Concept Image One" 
                description = "Repellat, voluptate, amet soluta quas magnam accusamus nesciunt voluptates aut quo quas nemo?"
            />
        </article>

        <article id="project_constuction_gallery_4" 
            class="gr5s2 gc2s4
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

        <article id="project_constuction_gallery_5" 
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
        {/* <!-- Project Construction gallery --> */}
    </div>
  )
}

export default ProjectConstruction
