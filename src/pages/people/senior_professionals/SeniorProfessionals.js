import React from 'react'
import { Link } from 'react-router-dom'
import seniorProfessionals from '../../../images/practice/management/management-07.jpeg'
import samplePortrait from '../../../images/practice/management/director-of-finance/dof-03.jpeg'
import AESLPeopleNav from '../../../components/organisms/navs/AESL_PeopleNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'

const SeniorProfessionals = () => {

    return (
        <div id=""
        className="min-vh-100 w-100"
        >
        {/* <!-- Page Header --> */}
        <header id="peope_senior_professionals_pageHeader"
            className="grid gtc12
                "
        >
            <figure className="gc1s12"
            >
                <img src={seniorProfessionals}
                    alt=""
                    className="vh-60 cover"
                />
            </figure>
            <hgroup className="gc1s12 w-100 blue0">
                <h2 className="w-100 h-100
                    pa1-00 ph1-00 pb1-00 mb0-00
                    f3-00 ttu"
                >
                    Senior Professionals
                </h2>
            </hgroup> 
            {/* <!-- Page Navigation -->*/}
            <AESLPeopleNav />
            {/* <!-- Page Navigation -->  */}
        </header>
        {/* <!-- Page Header --> */}

        {/* <!-- Page Main --> */}
        <main id = "senior_professionals_pagemain"
            className="bg-white"
        >
            <div id="l_3:1_senior_professionals" 
                className="grid gtc4 w-100"
            >
                {/* <!-- AESL Senior Professionals Main Start --> */}
                <div id="lc_gc1s3__senior_professionals_pageContent"
                    className="gc1s4 gc1s3-l
                        min-vh-100 ph1-00 mb1-00"
                >   
                    {/* <!-- Consultants --> */}
                    <div id="people_senior_professionals"
                        className="grid gtc12 ggap1-00
                            
                            mb1-00"
                    >
                        {/* <!-- Senior Professionals Description Start --> */}
                        <header id="people_senior_professionals_description" 
                            className="gr1s1 gc2s10"
                        > 
                            <div id=""
                                className="flex ggap1-00 
                                    w-100 blue0
                                    mt6-00 mb4-00 
                                    lh-copy f1-25 tj"
                            >
                                <div>
                                    At Architectural and Engineering Services Limited, senior professionals bring a wealth of experience and expertise to complex projects. They lead multidisciplinary teams, ensuring that innovative design and engineering solutions are effectively implemented. With a deep understanding of industry standards and regulations, they guide projects through every phase, from initial concept to final execution. Their strong leadership and mentorship foster a culture of collaboration and continuous improvement within the organization. Committed to sustainability and client success, they consistently deliver results that exceed expectations while promoting environmentally responsible practices.
                                </div>
                            </div>

                        </header>
                        {/* <!-- Senior Professionals Description End --> */}

                        {/* <!-- Senior Professionals Gallery Start --> */}
                        <div id="people_senior_professionals_gallery"
                            className="gc1s12
                                blue0"
                        >
                            <ul className="gr1s1 gc1s12 
                                grid gtc1 gtc2-s gtc4-m ggap1-00 
                                w-100 
                                blue0"
                            >
                                <li className="blue0 w-100">
                                    <article id="people_consultant_1" 
                                        className="gr1s1 gc1s3
                                            flex flex-column items-center justify-center"
                                    >
                                        <figure className="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                className="pa0-50"
                                            /> 
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0"
                                        >
                                            <h5 className="mb0-50"
                                            >
                                              Arc. Kofi Owusu
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
                                <li className="blue0 w-100">
                                    <article id="people_consultant_1" 
                                        className="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure className="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                className="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 className="mb0-50">
                                                
                                                    Arc. Kofi Owusu
                                                
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
                                <li className="blue0 w-100">
                                    <article id="people_consultant_1" 
                                        className="gr1s1 gc1s3
                                            flex flex-column items-center justify-center"
                                    >
                                        <figure className="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                className="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 className="mb0-50">
                                              Arc. Kofi Owusu
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
                                <li className="blue0 w-100">
                                    <article id="people_consultant_1" 
                                        className="gr1s1 gc1s3
                                            flex flex-column items-center justify-center"
                                    >
                                        <figure className="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                className="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 className="mb0-50">
                                              Arc. Kofi Owusu
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
                                <li className="blue0 w-100">
                                    <article id="people_consultant_1" 
                                        className="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure className="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                className="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 className="mb0-50">
                                              Arc. Kofi Owusu
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
                                <li className="blue0 w-100">
                                    <article id="people_consultant_1" 
                                        className="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure className="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                className="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 className="mb0-50">
                                              Arc. Kofi Owusu
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
                                <li className="blue0 w-100">
                                    <article id="people_consultant_1" 
                                        className="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure className="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                className="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 className="mb0-50">
                                              Arc. Kofi Owusu
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
                                <li className="blue0 w-100">
                                    <article id="people_consultant_1" 
                                        className="gr1s1 gc1s3
                                            flex flex-column items-center justify-center
                                        "
                                    >
                                        <figure className="shadow-5 mb0-50">
                                            <img src={samplePortrait}
                                                alt=""
                                                className="pa0-50 "
                                            /> 
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0
                                                    ">
                                            <h5 className="mb0-50">
                                              Arc. Kofi Owusu
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
                        {/* <!-- Senior Professionals Gallery End --> */}

                        <article id="misc_gold" 
                            className="gr3s1 gc2s3
                                flex items-center justify-center
                                bg-green h6-00
                            ">
                        </article>

                        <article id="misc_blue" 
                            className="gr4s1 gc6s1
                                flex items-center justify-center
                                bg-blue0 h6-00 
                                ">
                        </article>
                    </div>
                    <SectionFooter 
                      sectionTitle ="Senior Professionals"
                    />
                </div>
                {/* <!-- AESL Senior Professionals Main End -->

                <!-- AESL Senior Professionals Aside Start --> */}
                <div id="lc_gc4s1__senior_professionals_pageAside" 
                    className="gc4s1 
                    blue0 relative"
                >
                    <div className="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pt6-00
                        sticky top-0"
                    >
                        <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                            <h3 >Senior Professionals</h3>
                            <li className="mb1-00">
                                <a href="#people_senior_professionals_description"
                                    className="blue0 i"
                                    >
                                    AESL Senior Professionals
                                </a>
                            </li>
                            <li className="mb1-00">
                                <a href="#people_senior_professionals_gallery"
                                    className="blue0 i"
                                    >
                                    AESL Senior Professionals List
                                </a>
                            </li>
                        </ul>
        
                        <div className="mb1-00" >
                            <small>Previous</small> <br/>
                            <Link to ="/people/consultants" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Consultants
                            </Link><br/><br/>
                            <small>Next</small> <br/>
                            <Link to ="/people/professionals" 
                                className="mb1-00 blue0 f0-75 b"
                                >Professionals
                            </Link> 
                        </div>
                    </div>
                </div>
                {/* <!-- AESL Senior Professionals Aside End --> */}
            </div>
        </main>
        {/* <!-- Page Main -->  */}
        {/* <!-- Page Footer -->   */}
        <AESLPageFooter 
            pageTitle = "Senior Professionals"
        />
        {/* <!-- Page Footer -->  */}
    </div>
    )
}

export default SeniorProfessionals