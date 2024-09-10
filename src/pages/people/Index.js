import PeopleBanner from '../../images/people/00.jpeg'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLPeopleNav from '../../components/organisms/navs/AESL_PeopleNav'
import sky from '../../images/placeholders/regular_images/sky.jpg'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import { Link } from 'react-router-dom'
import { BsPeople } from 'react-icons/bs'

const PeopleIndex = () => {
  
    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header id=""
                className="bg-green"
            >
                <CategoryHeaderBanner 
                    image = {PeopleBanner}
                    title ='People'
                    Icon = {<BsPeople />}
                />
                <AESLPeopleNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <main id="peoplePage__Main"
                    class="ph1-00"
                >
                    {/* <!-- AESL People Start --> */}
                    <div id="AESL__People"
                        class="grid gtc12 ggap1-00
                            mb1-00"
                    >            
                        {/* <!-- AESL People Categories Start --> */}
                            <article id="AESL__People--Categories"
                                class="blue0 gr1s1 gc1s12"   
                            >   
                                <header id="AESL__PeopleHeader" 
                                    class="gr1s1 gc3s8 flex ggap2-00 
                                        f1-50 ph8-00 pt4-00 "
                                > 
                                    <p class="blue0 lh-copy tracked bb pb4-00">
                                        The people of AESL ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi minima ipsum libero reprehenderit nemo debitis ex esse. Eos dolores reprehenderit modi omnis vero sint aspernatur provident natus ipsa sequi sed delectus esse porro voluptatem eaque quasi dolore quo voluptas incidunt libero voluptatibus, quod amet!.
                                    </p>
                                </header>
                                <section id="AESL__PeopleConsultants" 
                                    class="ma4-00 bg-blue0 pa4-00"
                                >
                                    <div id="4x4_Grid_PeopleConsultants"
                                        class="grid gtc12 ggap1-00"
                                    >
                                        <article id="AESL__PeopleConsultants--PrincipalConsultants"
                                            class="gr1s1 gc1s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/principal-consultants"
                                                class = ""  
                                            >
                                                <figure class="items-center justify-center">
                                                    <img src={sky}
                                                        alt=""
                                                        class="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <figcaption id = ""
                                                        class="gr1s1 gc1s1 
                                                            flex flex-column items-center justify-center
                                                            
                                                            pv1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 class="dib 
                                                            w-100 
                                                            pa0-50 mb0-00 
                                                            white-90 bg-white-10 ba b--white br0-50 
                                                            f1-00"
                                                        >
                                                            Principal Consultants
                                                        </h3>
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>
                                        
                                        <article id="AESL__PeopleConsultants--SeniorConsultants"
                                            class="gr2s1 gc1s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/senior-consultants"
                                                class = ""  
                                            >    
                                                <figure class="items-center justify-center">
                                                    <img src={sky}            
                                                        alt=""
                                                        class="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            pv1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 class="dib 
                                                            w-100 
                                                            pa0-50 mb0-00 
                                                            white-90 bg-white-10 ba b--white br0-50 
                                                            f1-00"
                                                        >
                                                            Senior Consultants
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="AESL__PeopleConsultants--Consultants" 
                                            class="gr3s1 gc1s4
                                            grid items-center justify-center"
                                        >
                                            <Link to ="/people/consultants"
                                                    class = ""  
                                            >
                                                <figure class="items-center justify-center"
                                                >
                                                    <img src={sky}            
                                                        alt=""
                                                        class="gc1s1 gr1s1 br0-50"
                                                    /> 
                                                    <hgroup id = ""
                                                        class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            pv1-00
                                                            bg-blue0-50
                                                            f0-75 tc"
                                                    >
                                                        <h3 class="dib 
                                                            w-100 
                                                            pa0-50 mb0-00 
                                                            white-90 bg-white-10 ba b--white br0-50 
                                                            f1-00"
                                                        >
                                                            Consultants
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link>
                                        </article> 
                                            
                                        <article id="AESL__PeopleConsultants--ConsultantsSummary" 
                                            class="gr1s3 gc5s8
                                                grid"
                                        >
                                            <figure class="shadow-5 items-center justify-center">
                                                <hgroup id = ""
                                                    class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        h-100
                                                        pa1-00
                                                        bg-white-90
                                                        br0-50
                                                        f1-25 tc"
                                                    >
                                                    <h1 class = "mv1-00 f2-00">
                                                        AESL Consultants
                                                    </h1>
                                                    <p class="lh-copy mb2-00">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis illo magni eligendi illum ipsum aliquid, exercitationem rem iure? Voluptate praesentium distinctio delectus omnis aliquid debitis, eligendi aliquam facere. Temporibus reprehenderit tenetur qui vitae accusamus illo velit perferendis cumque architecto!
                                                    </p>
                                                    <p class="lh-copy mb2-00">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis illo magni eligendi illum ipsum aliquid, exercitationem rem iure? Voluptate praesentium distinctio delectus omnis aliquid debitis, eligendi aliquam facere. Temporibus reprehenderit tenetur qui vitae accusamus illo velit perferendis cumque architecto!
                                                    </p>
                                                    <p class="lh-copy mb2-00">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis illo magni eligendi illum ipsum aliquid, exercitationem rem iure? Voluptate praesentium distinctio delectus omnis aliquid debitis, eligendi aliquam facere. Temporibus reprehenderit tenetur qui vitae accusamus illo velit perferendis cumque architecto!
                                                    </p>
                                                    <p class="lh-copy mb2-00">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis illo magni eligendi illum ipsum aliquid, exercitationem rem iure? Voluptate praesentium distinctio delectus omnis aliquid debitis, eligendi aliquam facere. Temporibus reprehenderit tenetur qui vitae accusamus illo velit perferendis cumque architecto!
                                                    </p>
                                                </hgroup> 
                                            </figure>
                                        </article>
                                    </div>
                                </section>
                                <SectionFooter 
                                sectionTitle ="People || Consultants"
                                />
                                
                                <section id="AESL__PeopleProfessionals" 
                                    class="ma4-00 bg-white pa4-00"
                                >
                                    <div id="4x4_Grid_PeopleProfessionals"
                                        class="grid gtc12 ggap1-00"
                                    >
                                        <article id="AESL__PeopleProfessionals--ProfessionalsSummary" 
                                            class="gr1s3 gc1s8
                                                grid"
                                        >
                                            <figure class="grid items-center justify-center
                                               "
                                            >
                                                <hgroup id = ""
                                                    class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        h-100
                                                        pa1-00
                                                        bg-blue0 br1-00 
                                                        white-90
                                                        f1-25
                                                        tc"
                                                >
                                                    <h1 class = "f2-00 mv1-00">
                                                        AESL Professionals
                                                    </h1>
                                                    <p class="lh-copy mb2-00">
                                                        AESL has a highly qualified and experienced team of engineers that can provide a wide range of capabilities including general infrastructure, heavy civil engineering and building structure design. 
                                                    </p>
                                                    <p class="lh-copy mb2-00">
                                                        AESL has a highly qualified and experienced team of engineers that can provide a wide range of capabilities including general infrastructure, heavy civil engineering and building structure design. 
                                                    </p>
                                                    <p class="lh-copy mb2-00">
                                                        AESL has a highly qualified and experienced team of engineers that can provide a wide range of capabilities including general infrastructure, heavy civil engineering and building structure design. 
                                                    </p>
                                                </hgroup> 
                                            </figure>
                                        </article>
                                        <article id="AESL__PeopleProfessionals--SeniorProfessionals"
                                            class="gr1s1 gc9s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/senior-professionals"
                                                class = ""  
                                            >
                                                <figure class="grid items-center justify-center">
                                                    <img src={sky}            
                                                        alt=""
                                                        class="br1-00 gc1s1 gr1s1 "
                                                    /> 
                                                    <figcaption id = ""
                                                        class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            h-100 w-100
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 class="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Senior Professionals
                                                        </h3>    
                                                        
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>
                                        
                                        <article id="AESL__PeopleProfessionals--Professionals"
                                            class="gr2s1 gc9s4
                                            grid items-center justify-center
                                            white-90"      
                                        >
                                            <Link to ="/people/professionals"
                                                class = ""  
                                            >    
                                                <figure class=" grid items-center justify-center">
                                                    <img src={sky}            
                                                        alt=""
                                                        class="br1-00 gc1s1 gr1s1"
                                                    /> 
                                                    <hgroup id = ""
                                                        class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                        >
                                                            <h3 class="blue0 bg-white ba pa0-50 mb0-00 f1-00">
                                                                Professionals
                                                            </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="AESL__PeopleProfessionals--AssistantProfessionals" 
                                            class="gr3s1 gc9s4
                                                grid items-center justify-center"
                                        >
                                            <Link to ="/people/assistant-professionals"
                                                class = ""  
                                            >
                                                <figure class="grid items-center justify-center
                                                    "
                                                >
                                                    <img src={sky}
                                                        alt=""
                                                        class="gc1s1 gr1s1 br1-00"
                                                    /> 
                                                    <hgroup id = ""
                                                        class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 class="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Assistant Professionals
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link>        
                                        </article>
                                    </div>
                                </section>
                                <SectionFooter 
                                sectionTitle ="People || Professionals"
                                />
                                <section id="AESL__PeopleSupportTeam" 
                                    class="ma4-00 bg-blue0 pa4-00"
                                >
                                    <div id="4x4_Grid_PeopleSupportTeam"
                                        class="grid gtc12 ggap1-00"
                                    >
                                        <article id="AESL__PeopleSupportTeam--SupportTeam"
                                            class="gr1s1 gc1s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/support-team"
                                                class = ""  
                                            >
                                                <figure class="grid  items-center justify-center"
                                                >
                                                    <img src={sky}
                                                        alt=""
                                                        class="br1-00 gc1s1 gr1s1 "
                                                    /> 
                                                    <figcaption id = ""
                                                        class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            h-100 w-100
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75 white-90 tc"
                                                    >
                                                        <h3 class="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Support Team
                                                        </h3>
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>
                                        
                                        <article id="AESL__PeopleSupportTeam--NationalServicePersonnel"
                                            class="gr2s1 gc1s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/service-personnel"
                                                class = ""  
                                            >    
                                                <figure class="grid items-center justify-center
                                                    "
                                                >
                                                    <img src={sky}
                                                        alt=""
                                                        class="br1-00 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        class="gr1s1 gc1s1 
                                                            flex flex-column items-center justify-center
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75 white-90 tc"
                                                    >
                                                        <h3 class="pa0-50 mb0-00 
                                                            blue0 bg-white ba 
                                                            f1-00"
                                                        >
                                                            National Service Personnel
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="AESL__PeopleSupportTeam--Probationers" 
                                            class="gr3s1 gc1s4
                                                grid items-center justify-center"
                                        >
                                            <Link to ="/people/probationers"
                                                    class = ""  
                                                >
                                                <figure class="grid  items-center justify-center">
                                                    <img src={sky}
                                                        alt=""
                                                        class="br1-00 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            tc
                                                            
                                                                ">
                                                        <h3 class="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Probationers
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link>
                                        </article> 
                                    
                                        <article id="AESL__PeopleSupportTeam--SupportTeamSummary" 
                                            class="gr1s3 gc5s8
                                                grid"
                                        >
                                            <figure class="grid  items-center justify-center">
                                                <hgroup id = ""
                                                    class="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        h-100
                                                        mv2-00 ph4-00
                                                        bg-white-90
                                                        f1-25 tc blue0 
                                                        br1-00"
                                                >
                                                    <h1 class = "f2-00 mv1-00">
                                                    AESL Support Team
                                                    </h1>
                                                    <p class="lh-copy">
                                                        We provide a range of Professional Quantity Surveying, Land Surveying and Valuation services tailored to meet our clients requirements. We always take challenges and bring them to a conclusion.
                                                    </p>
                                                    <p class="lh-copy">
                                                        We provide a range of Professional Quantity Surveying, Land Surveying and Valuation services tailored to meet our clients requirements. We always take challenges and bring them to a conclusion.
                                                    </p>
                                                    <p class="lh-copy">
                                                        We provide a range of Professional Quantity Surveying, Land Surveying and Valuation services tailored to meet our clients requirements. We always take challenges and bring them to a conclusion.
                                                    </p>
                                                </hgroup> 
                                            </figure>
                                        </article>
                                    </div>
                                </section>
                                <SectionFooter 
                                sectionTitle ="People || SupportTeam"
                                />
                            </article>
                        {/* <!-- AESL People Categories End --> */}
                    </div>
                    {/* <!-- AESL People End --> */}
                </main>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="" 
                className=""
            >
                <AESLPageFooter
                    pageName = 'People'
                />
            </footer>
            {/* Page Footer End */}
      </article>
    )
}

export default PeopleIndex