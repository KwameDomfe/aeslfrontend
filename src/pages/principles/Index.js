import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPrinciplesNav from '../../components/organisms/navs/AESL_PrinciplesNav'
import principlesBanner from '../../images/principles/00.png'
import principles01 from '../../images/practice/_partials/practice_2.jpg'
import { LuFootprints } from 'react-icons/lu'

const PrinciplesIndex = () => {
    return (
        <div id="principles-home-page"
            className=""
        > 
                {/* Page Header Start */}
                <header id = ""
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
                    className="bg-white"
                >
                    {/* Overview  */}
                    <div id="overview"
                    className="grid gtc12 ggap1-00
                        mb2-00
                        "
                >
                    {/* Overview Description  */} 
                    <header 
                        className="gr1s1 gc2s10 
                            w-100
                            blue0 bb"
                    >
                        <hgroup id=""
                            className=""
                        >
                            <div id="Project_Overview_1" 
                                className="gr2s1 gc1s10 f1-50"
                            > 
                                <p className="mb0-00 pv4-00 lh-copy tracked">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi iure veniam ipsa ex porro quo libero doloremque? Ad corrupti suscipit ipsam eius in numquam excepturi fugit quisquam inventore officiis, necessitatibus explicabo blanditiis unde optio doloribus laborum aliquid. Sequi doloribus quibusdam beatae, nam quis, explicabo totam illum amet rem vitae laborum!.
                                </p>
                            </div>     
                        </hgroup> 
                    </header>
                    {/* Overview Description  */}
                </div>
                {/* Overview  */}
                    
                    <div id="practice"
                        className="gr3s1 gc1s12
                                grid gtc12 ggap1-00
                                ph0-25 mb4-00 white-90">
                        
                        <article id="principles_Civic" 
                            className="gr1s1 gc2s6
                                grid items-center justify-center
                                "
                        > 
                            <figure  className="gc1s1 gr1s1 grid items-center justify-center
                                    pa0-50 bg-red"
                            >
                                <img src={principles01}
                                    alt=""
                                    className="w-100 h-100
                                        cover"
                                /> 
                            </figure>
                            <hgroup 
                                className="gc1s1 gr1s1 grid items-center justify-center
                                    ma4-00 pa1-00 bg-red z1"
                            >
                                <h3>
                                    CIVIC
                                </h3>    
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptatum provident possimus, enim voluptate beatae qui rem necessitatibus dolor.
                                </span> 
                                <a href="{% url 'website:principles-civic' %}"
                                    className="pa0-25 mt2-00 ba tc white-90"
                                >
                                    EXPLORE
                                </a>       
                            </hgroup> 
                        </article>
                        <article id="misc_gold" 
                            className="gr1s1 gc8s4
                                grid items-center justify-center
                                ba b--red bw3
                                ">
                        </article>
                        
                        <article id="principles_Professionalism" 
                            className="gr2s1 gc6s6
                                grid items-center justify-center h-100
                                "
                        >
                            <figure  
                                className="gc1s1 gr1s1 grid items-center justify-center
                                    pa0-50 bg-blue0" 
                            >
                                <img src={principles01}
                                    alt=""
                                    className="
                                        w-100 h-100
                                        cover"
                                /> 
                            </figure>
                            <hgroup 
                                className="gc1s1 gr1s1 grid items-center justify-center
                                    ma6-00 pa1-00 bg-blue0 z1"
                            >
                                <h3>
                                    PROFESSIONALISM
                                </h3>    
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam nobis dolor asperiores quaerat. Natus nobis esse sapiente veniam distinctio!
                                </span>
                                <a href="{% url 'website:principles-professionalism' %}"
                                    className="pa0-25 mt2-00 ba tc white-90"
                                >
                                    EXPLORE
                                </a>    
                            </hgroup> 
                        </article>
                        <article id="misc_black" 
                            className="gr2s1 gc2s4
                                flex items-center justify-center
                                ba b--blue0 bw3
                                ">
                        </article>
                        
                        <article id="principles_Excellence" 
                            className="gr3s1 gc2s6
                            grid items-center justify-center
                            ">
                            <figure className="gc1s1 gr1s1 
                                grid items-center justify-center
                                pa0-50
                                bg-red 
                                shadow-5">
                                <img src={principles01}
                                    alt=""
                                    className="w-100"
                                /> 
                            </figure>
                            <hgroup 
                                className="gc1s1 gr1s1 grid items-center justify-center
                                    ma6-00 pa1-00 bg-red z1"
                            >
                                <h3>
                                    Excellence
                                </h3>    
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis veritatis! Odit nisi fugiat delectus accusantium doloremque atque consequuntur possimus.
                                </span>
                                <a href="{% url 'website:principles-excellence' %}"
                                    className="pa0-25 mt2-00 ba tc white-90"
                                >
                                    EXPLORE
                                </a>        
                            </hgroup> 
                        </article>
                    
                        <article id="principles_IntegrityAndHonesty" 
                            className="gr4s1 gc6s6
                                grid items-center justify-center
                                ">
                                <figure  className="gc1s1 gr1s1 grid items-center justify-center
                                    pa0-50 bg-blue0 
                            
                                    ">
                                    <img src={principles01}
                                        alt=""
                                        className="
                                            w-100 h-100
                                            cover"
                                        /> 
                                </figure>
                            <hgroup 
                                className="gc1s1 gr1s1 grid items-center justify-center
                                    ma4-00 pa1-00 bg-blue0 z1"
                            >
                                <h3>
                                    Integrity And Honesty
                                </h3>    
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe maiores autem. Consequatur commodi accusantium at. Ipsum exercitationem deserunt commodi.
                                </span>
                                <a href="{% url 'website:principles-integrity-and-honesty' %}"
                                    className="pa0-25 mt2-00 ba tc white-90"
                                >
                                    EXPLORE
                                </a>            
                            </hgroup> 
                        </article>

                        <article id="principles_TimelinessAndCostEffectiveness" 
                            className="gr5s1 gc2s6
                                grid items-center justify-center
                                "
                        >
                            <figure  className="gc1s1 gr1s1 grid items-center justify-center
                            pa0-50 bg-red 
                    
                                ">
                                <img src={principles01}
                                    alt=""
                                    className="
                                        w-100 h-100
                                        cover"
                                    /> 
                            </figure>
                            <hgroup 
                                className="gc1s1 gr1s1 grid items-center justify-center
                                    ma4-00 pa1-00 bg-red z1"
                            >
                                <h3>
                                    Timeliness And Cost Effectiveness
                                </h3>    
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque hic mollitia distinctio ad molestiae itaque officia aut explicabo accusantium! Repellat.
                                </span> 
                                <a href="{% url 'website:principles-timeliness-and-cost-effectiveness' %}"
                                    className="pa0-25 mt2-00 ba tc white-90"
                                >
                                    EXPLORE
                                </a>           
                            </hgroup> 
                        </article>
                    
                        <article id="principles_sustainability" 
                            className="gr6s1 gc6s6
                                grid items-center justify-center"
                            
                        >
                            <figure  className="gc1s1 gr1s1 
                                grid items-center justify-center
                                    pa0-50 bg-blue0 
                            
                                ">
                                <img src={principles01}
                                    alt=""
                                    className="
                                        w-100 h-100
                                        cover"
                                    /> 
                            </figure>
                            <hgroup 
                                className="gc1s1 gr1s1 
                                    grid items-center justify-center
                                    ma4-00 pa1-00 bg-blue0 z1"
                            >
                                <h3>
                                    sustainability
                                </h3>    
                                <span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa aut labore optio officia animi perferendis dolor explicabo magni doloremque eveniet.
                                </span>
                                <a href="{% url 'website:principles-sustainability' %}"
                                    className="pa0-25 mt2-00 ba tc white-90"
                                >
                                    EXPLORE
                                </a>            
                            </hgroup> 
                        </article>

                        <article id="misc_gold" 
                            className="gr3s1 gc8s4
                                grid items-center justify-center
                                ba b--red bw3
                                ">
                        </article>
                    
                        <article id="misc_black" 
                            className="gr4s1 gc2s4
                                flex items-center justify-center
                                ba b--blue0 bw3
                                ">
                        </article>

                        <article id="misc_gold" 
                            className="gr5s1 gc8s4
                                grid items-center justify-center
                                ba b--red bw3
                                ">
                        </article>
                    
                        <article id="misc_black" 
                            className="gr6s1 gc2s4
                                flex items-center justify-center
                                ba b--blue0 bw3
                                ">
                        </article>
                        {/* Practice  */}
                    </div>
                    
                </main>
                {/* Page Main  */} 

                {/* Principles page Footer  */}  
                <footer id = "principlesPage__Footer"
                    className="mb1-00"
                >
                    {/* {% include 'website/_partials/page_footer.html' %}  */}
                </footer>
                {/* Principles page Footer  */}
        </div>
  
    )
}

export default PrinciplesIndex