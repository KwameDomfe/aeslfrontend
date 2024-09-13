// Components
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPrinciplesNav from '../../components/organisms/navs/AESL_PrinciplesNav'
import CategoryOverview from '../../components/molecules/CategoryOverview'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import PrinciplesCard from './PrinciplesCard'
import SectionFooter from '../../components/organisms/footers/SectionFooter'

// Icons
import { LuFootprints } from 'react-icons/lu'

// Images
import principlesBanner from '../../images/principles/00.png'
import principles01 from '../../images/practice/_partials/practice_2.jpg'


const PrinciplesIndex = () => {
    
    return (
        <div id="principles-home-page"
            className=""
        > 
            {/* Page Header Start */}
            <header id = "pageHeader"
                className="bg-red"
            >
                <CategoryHeaderBanner 
                image = {principlesBanner}
                title ='principles'
                Icon = {<LuFootprints />}
            />
                <AESLPrinciplesNav />
            </header>
            {/* Page Header End  */}
        
            {/* Page Main  */}
            <main id="" 
                className="bg-white "
            >
                {/* Overview  */}
                <div id="ContentHeader"
                    className="grid gtc12 ggap1-00
                        mb2-00"
                >
                    <CategoryOverview
                        description="Our company is committed to excellence, innovation, sustainability, collaboration, and ethical conduct in order to deliver architectural and engineering services. We strive for excellence, innovation, sustainability, collaboration, and ethical conduct."
                    />
                </div>
                {/* Overview  */}
                
                <div id="Content"
                    className="grid gtc12 ggap1-00
                        white-90"
                >
                    <article id="principles_Civic" 
                        className="gr1s1 gc2s6
                            grid items-center justify-center"
                    > 
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "Civic"
                            overview="Civic Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam nobis dolor asperiores quaerat. Natus nobis esse sapiente veniam distinctio!"
                            url="/priciples/civic"
                            colour = "red"
                        />
                    </article>
                    <article id="misc_gold" 
                        className="gr1s1 gc8s4
                            grid items-center justify-center
                            ba b--red bw3"
                    >
                    </article>
                    
                    <article id="" 
                        className="gr2s1 gc6s6
                            grid items-center justify-center 
                            "
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "PROFESSIONALISM"
                            overview="Professionalism Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam nobis dolor asperiores quaerat. Natus nobis esse sapiente veniam distinctio!"
                            url="/priciples/professionalism"
                            colour = "blue0"
                        />
                    </article>
                    <article id="misc_black" 
                        className="gr2s1 gc2s4
                            flex items-center justify-center
                            ba b--blue0 bw3
                            ">
                    </article>
                    
                    <article id="" 
                        className="gr3s1 gc2s6
                        grid items-center justify-center"
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "excellence"
                            overview="Excellence Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam nobis dolor asperiores quaerat. Natus nobis esse sapiente veniam distinctio!"
                            url="/priciples/excellence"
                            colour = "red"
                        />
                    </article>
                
                    <article id="" 
                        className="gr4s1 gc6s6
                            grid items-center justify-center
                            "
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "Integrity and Honesty"
                            overview="Integrity and Honesty Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam nobis dolor asperiores quaerat. Natus nobis esse sapiente veniam distinctio!"
                            url="/priciples/integrity-and-honesty"
                            colour = "blue0"
                        />
                    </article>

                    <article id="principles_TimelinessAndCostEffectiveness" 
                        className="gr5s1 gc2s6
                            grid items-center justify-center
                            "
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "Timeliness And Cost Effectiveness"
                            overview="Timeliness And Cost Effectiveness Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam nobis dolor asperiores quaerat. Natus nobis esse sapiente veniam distinctio!"
                            url="/priciples/timeliness-and-cost-effectiveness"
                            colour = "red"
                        />
                    </article>
                
                    <article id="principles_sustainability" 
                        className="gr6s1 gc6s6
                            grid items-center justify-center"
                        
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "Sustainability"
                            overview="Sustainability Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam nobis dolor asperiores quaerat. Natus nobis esse sapiente veniam distinctio!"
                            url="/priciples/sustainability"
                            colour = "blue0"
                        />
                    </article>

                    <article id="misc_gold" 
                        className="gr3s1 gc8s4"
                    >
                        <PrinciplesCard colour="red"/>
                    </article>
                
                    <article id="misc_black" 
                        className="gr4s1 gc2s4
                            ba b--blue0 bw3"
                    >
                    </article>

                    <article id="misc_gold" 
                        className="gr5s1 gc8s4
                            ba b--red bw3"
                    >
                    </article>
                
                    <article id="misc_black" 
                        className="gr6s1 gc2s4
                            ba b--blue0 bw3"
                    >
                    </article>
                    {/* Practice  */}
                    <div id="ContentFooter"
                        className="mb1-00 gc2s10"
                    >
                        <SectionFooter
                            sectionTitle ="Principles"
                        />
                    </div>
                </div>

            </main>
            {/* Page Main  */}
            
            {/* Footer */}
            <div id="PageFooter">
                <AESLPageFooter 
                    pageTitle ="Principles"
                />
            </div>
            {/* Footer */}

        </div>
    )
}

export default PrinciplesIndex