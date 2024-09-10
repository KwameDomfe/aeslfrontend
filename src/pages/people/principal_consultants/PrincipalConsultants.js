import { Link } from 'react-router-dom'
import principalConsultants from '../../../images/practice/management/management-07.jpeg'
import samplePortrait from '../../../images/practice/management/director-of-finance/dof-03.jpeg'
import AESLPeopleNav from '../../../components/organisms/navs/AESL_PeopleNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'

const PrincipalConsultants = () => {

    return (
        <div id=""
        class="min-vh-100 w-100"
        >
        {/* <!-- Page Header --> */}
        <header id="peope_pageHeader"
            class="grid gtc12
                "
        >
            <figure class="gc1s12"
            >
                <img src={principalConsultants}
                    alt=""
                    class="vh-60 cover"
                />
            </figure>
            <hgroup class="gc1s12 w-100 blue0">
                <h2 class="w-100 h-100
                    pa1-00 ph1-00 pb1-00 mb0-00
                    f3-00 ttu"
                >
                    Principal Consultants
                </h2>     
            </hgroup> 
            {/* <!-- Page Navigation -->*/}
            <AESLPeopleNav />
            {/* <!-- Page Navigation -->  */}
        </header>
        {/* <!-- Page Header --> */}

        {/* <!-- Page Main --> */}
        <main id = "principal_consultant_consultant_pagemain"
            class="bg-white"
        >
            <div id="l_3:1_Principal_Consultants" 
                class="grid gtc4 w-100"
            >
                {/* <!-- AESL Principal Consultants Main Start --> */}
                <div id="lc_gc1s3__Principal_Consultants_pageContent"
                    class="gc1s4 gc1s3-l
                        min-vh-100 ph1-00"
                >   
                    {/* <!-- Principal Consultants --> */}
                    <div id="people_principal_consultants"
                        class="grid gtc12 ggap1-00
                            
                            mb1-00"
                    >
                        {/* <!-- Principal Consultants Description Start --> */}
                        <header id="people_principal_consultants_description" 
                            class="gr1s1 gc2s10"
                        > 
                            <div id=""
                                class="flex ggap1-00 
                                    w-100 blue0
                                    mt6-00 mb4-00 
                                    lh-copy f1-25 tj"
                            >
                                <div>
                                    Principal Consultants Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nulla asperiores pariatur, fugit autem sed eos blanditiis sint quia possimus ex voluptatem qui incidunt adipisci sit in optio, saepe, sequi debitis cumque at ad quas iure! Saepe quam corrupti magni doloremque numquam minima harum blanditiis sed amet? Porro, temporibus nobis.
                                </div>
                            </div>

                        </header>
                        {/* <!-- Principal Consultants Description End --> */}

                        {/* <!-- Principal Consultants Gallery Start --> */}
                        <div id="people_principal_consultants_gallery"
                            class="gc1s12
                                blue0"
                        >
                            <ul class="gr1s1 gc1s12 
                                grid gtc1 gtc2-s gtc4-m ggap1-00 
                                w-100 
                                blue0"
                            >
                                <li class="blue0 w-100">
                                    <article id="people_principal_consultant_1" 
                                        class="gr1s1 gc1s3
                                            flex flex-column items-center justify-center"
                                    >
                                        <figure class="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                class="pa0-50"
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0"
                                        >
                                            <h5 class="mb0-50"
                                            >
                                                <a class="blue0" href="/people/principal-consultants/principal-consultant-details">Arc. Kofi Owusu</a> 
                                            </h5> 
                                            <h6>
                                                Architect
                                            </h6>
                                            <h6>
                                                AESL Accra
                                            </h6>
                                            <h6>
                                                Architecture
                                            </h6>
                                        </hgroup>
                                    </article>
                                </li>
                                <li class="blue0 w-100">
                                    <article id="people_principal_consultant_1" 
                                        class="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure class="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                class="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 class="mb0-50">
                                                <a class="blue0" 
                                                href="/people/principal-consultants/principal-consultant-details">
                                                    Arc. Kofi Owusu
                                                </a> 
                                            </h5> 
                                            <h6>
                                                Architect
                                            </h6>   
                                            <h6>
                                                AESL Accra
                                            </h6>
                                            <h6>
                                                Architecture
                                            </h6>
                                        </hgroup>
                                    </article>
                                </li>
                                <li class="blue0 w-100">
                                    <article id="people_principal_consultant_1" 
                                        class="gr1s1 gc1s3
                                            flex flex-column items-center justify-center"
                                    >
                                        <figure class="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                class="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 class="mb0-50">
                                                <a class="blue0" href="/people/principal-consultants/principal-consultant-details">Arc. Kofi Owusu</a> 
                                            </h5> 
                                            <h6>
                                                Architect
                                            </h6>   
                                            <h6>
                                                AESL Accra
                                            </h6>   
                                            <h6>
                                                Architecture
                                            </h6>   

                                        </hgroup> 
                                    </article>
                                </li>
                                <li class="blue0 w-100">
                                    <article id="people_principal_consultant_1" 
                                        class="gr1s1 gc1s3
                                            flex flex-column items-center justify-center"
                                    >
                                        <figure class="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                class="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 class="mb0-50">
                                                <a class="blue0" href="/people/principal-consultants/principal-consultant-details">Arc. Kofi Owusu</a> 
                                            </h5> 
                                            <h6>
                                                Architect
                                            </h6>   
                                            <h6>
                                                AESL Accra
                                            </h6>   
                                            <h6>
                                                Architecture
                                            </h6>   

                                        </hgroup> 
                                    </article>
                                </li>
                                <li class="blue0 w-100">
                                    <article id="people_principal_consultant_1" 
                                        class="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure class="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                class="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 class="mb0-50">
                                                <a class="blue0" href="/people/principal-consultants/principal-consultant-details">Arc. Kofi Owusu</a> 
                                            </h5> 
                                            <h6>
                                                Architect
                                            </h6>   
                                            <h6>
                                                AESL Accra
                                            </h6>   
                                            <h6>
                                                Architecture
                                            </h6>   

                                        </hgroup> 
                                    </article>
                                </li>
                                <li class="blue0 w-100">
                                    <article id="people_principal_consultant_1" 
                                        class="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure class="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                class="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 class="mb0-50">
                                                <a class="blue0" href="/people/principal-consultants/principal-consultant-details">Arc. Kofi Owusu</a> 
                                            </h5> 
                                            <h6>
                                                Architect
                                            </h6>   
                                            <h6>
                                                AESL Accra
                                            </h6>   
                                            <h6>
                                                Architecture
                                            </h6>   

                                        </hgroup> 
                                    </article>
                                </li>
                                <li class="blue0 w-100">
                                    <article id="people_principal_consultant_1" 
                                        class="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure class="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                class="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 class="mb0-50">
                                                <a class="blue0" href="/people/principal-consultants/principal-consultant-details">Arc. Kofi Owusu</a> 
                                            </h5> 
                                            <h6>
                                                Architect
                                            </h6>   
                                            <h6>
                                                AESL Accra
                                            </h6>   
                                            <h6>
                                                Architecture
                                            </h6>   

                                        </hgroup> 
                                    </article>
                                </li>
                                <li class="blue0 w-100">
                                    <article id="people_principal_consultant_1" 
                                        class="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure class="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                class="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            class="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 class="mb0-50">
                                                <a class="blue0" href="/people/principal-consultants/principal-consultant-details">Arc. Kofi Owusu</a> 
                                            </h5> 
                                            <h6>
                                                Architect
                                            </h6>   
                                            <h6>
                                                AESL Accra
                                            </h6>   
                                            <h6>
                                                Architecture
                                            </h6>   

                                        </hgroup> 
                                    </article>
                                </li>
                            
                            </ul>
                        </div>
                        {/* <!-- Principal Consultants Gallery End --> */}

                        <article id="misc_gold" 
                            class="gr3s1 gc2s3
                                flex items-center justify-center
                                bg-green h6-00
                            ">
                        </article>

                        <article id="misc_blue" 
                            class="gr4s1 gc6s1
                                flex items-center justify-center
                                bg-blue0 h6-00 
                                ">
                        </article>
                    </div>
                    <SectionFooter 
                      sectionTitle ="Principal Consiltants"
                    />
                </div>
                {/* <!-- AESL Principal Consultants Main End -->

                <!-- AESL Principal Consultants Aside Start --> */}
                <div id="lc_gc4s1__principal_Consultants_pageAside" 
                    class="gc4s1 
                    blue0 relative"
                >
                    <div class="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pt6-00
                        sticky top-0"
                    >
                        <ul class="mb1-00 bl bw4 b--green pl2-00 f0-75">
                            <h3 >Principal Consultants</h3>
                            <li class="mb1-00">
                                <a href="#people_principal_consultants_description"
                                    class="blue0 i"
                                    >
                                    AESL Principal Consultants
                                </a>
                            </li>
                            <li class="mb1-00">
                                <a href="#people_principal_consultants_gallery"
                                    class="blue0 i"
                                    >
                                    AESL Principal Consultants List
                                </a>
                            </li>
                        </ul>
        
                        <div class="mb1-00" >
                            {/* <small>Previous</small> <br/>
                            <a href="{% url 'website:mission-vision-values' %}" 
                                class="mb1-00 blue0 f0-75 b"
                            >
                                Principal Consultants
                            </a> <br/><br/> */}
                            <small>Next</small> <br/>
                            <Link to ="/people/senior-consultants" 
                                class="mb1-00 blue0 f0-75 b"
                                >Senior Consultants
                            </Link> 
                        </div>
                    </div>
                </div>
                {/* <!-- AESL Principal Consultants Aside Start --> */}
            </div>
        </main>
        {/* <!-- Page Main -->  */}
        {/* <!-- Page Footer -->   */}
        <AESLPageFooter 
            pageName = "Principal Consultants"
        />
        {/* <!-- Page Footer -->  */}
    </div>
    )
}

export default PrincipalConsultants