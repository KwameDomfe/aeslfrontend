import React from 'react'
import { Link } from 'react-router-dom'
import consultants from '../../../images/practice/management/management-07.jpeg'
import samplePortrait from '../../../images/practice/management/director-of-finance/dof-03.jpeg'
import AESLPeopleNav from '../../../components/organisms/navs/AESL_PeopleNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'

const Consultants = () => {

    return (
        <div id=""
        className="min-vh-100 w-100"
        >
        {/* <!-- Page Header --> */}
        <header id="peope_pageHeader"
            className="grid gtc12
                "
        >
            <figure className="gc1s12"
            >
                <img src={consultants}
                    alt=""
                    className="vh-60 cover"
                />
            </figure>
            <hgroup className="gc1s12 w-100 blue0">
                <h2 className="w-100 h-100
                    pa1-00 ph1-00 pb1-00 mb0-00
                    f3-00 ttu"
                >
                    Consultants
                </h2>
            </hgroup> 
            {/* <!-- Page Navigation -->*/}
            <AESLPeopleNav />
            {/* <!-- Page Navigation -->  */}
        </header>
        {/* <!-- Page Header --> */}

        {/* <!-- Page Main --> */}
        <main id = "consultant_consultant_pagemain"
            className="bg-white"
        >
            <div id="l_3:1_Principal_Consultants" 
                className="grid gtc4 w-100"
            >
                {/* <!-- AESL Consultants Main Start --> */}
                <div id="lc_gc1s3__Consultants_pageContent"
                    className="gc1s4 gc1s3-l
                        min-vh-100 ph1-00"
                >   
                    {/* <!-- Consultants --> */}
                    <div id="people_consultants"
                        className="grid gtc12 ggap1-00
                            
                            mb1-00"
                    >
                        {/* <!-- Consultants Description Start --> */}
                        <header id="people_consultants_description" 
                            className="gr1s1 gc2s10"
                        > 
                            <div id=""
                                className="flex ggap1-00 
                                    w-100 blue0
                                    mt6-00 mb4-00 
                                    lh-copy f1-25 tj"
                            >
                                <div>
                                    Consultants Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nulla asperiores pariatur, fugit autem sed eos blanditiis sint quia possimus ex voluptatem qui incidunt adipisci sit in optio, saepe, sequi debitis cumque at ad quas iure! Saepe quam corrupti magni doloremque numquam minima harum blanditiis sed amet? Porro, temporibus nobis.
                                </div>
                            </div>

                        </header>
                        {/* <!-- Consultants Description End --> */}

                        {/* <!-- Consultants Gallery Start --> */}
                        <div id="people_consultants_gallery"
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
                                                <Link className="blue0" to="/people/consultants/consultant-details">Arc. Kofi Owusu</Link> 
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
                                                <Link className="blue0" 
                                                to="/people/consultants/consultant-details">
                                                    Arc. Kofi Owusu
                                                </Link> 
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
                                                <Link className="blue0" to="/people/consultants/consultant-details">Arc. Kofi Owusu</Link> 
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
                                                <Link className="blue0" to="/people/consultants/consultant-details">Arc. Kofi Owusu</Link> 
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
                                                <Link className="blue0" to="/people/consultants/consultant-details">Arc. Kofi Owusu</Link> 
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
                                                <Link className="blue0" to="/people/consultants/consultant-details">Arc. Kofi Owusu</Link> 
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
                                                <Link className="blue0" to="/people/consultants/consultant-details">Arc. Kofi Owusu</Link> 
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
                                                <Link className="blue0" to="/people/consultants/consultant-details">Arc. Kofi Owusu</Link> 
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
                        {/* <!-- Consultants Gallery End --> */}

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
                      sectionTitle ="Consultants"
                    />
                </div>
                {/* <!-- AESL Consultants Main End -->

                <!-- AESL Consultants Aside Start --> */}
                <div id="lc_gc4s1__Consultants_pageAside" 
                    className="gc4s1 
                    blue0 relative"
                >
                    <div className="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pt6-00
                        sticky top-0"
                    >
                        <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                            <h3 >Consultants</h3>
                            <li className="mb1-00">
                                <a href="#people_consultants_description"
                                    className="blue0 i"
                                    >
                                    AESL Consultants
                                </a>
                            </li>
                            <li className="mb1-00">
                                <a href="#people_consultants_gallery"
                                    className="blue0 i"
                                    >
                                    AESL Consultants List
                                </a>
                            </li>
                        </ul>
        
                        <div className="mb1-00" >
                            <small>Previous</small> <br/>
                            <Link to="/people/senior-consultants" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Senior Consultants
                            </Link> <br/><br/>
                            <small>Next</small> <br/>
                            <Link to ="/people/senior-professionals" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Senior Professionals
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <!-- AESL Consultants Aside End --> */}
            </div>
        </main>
        {/* <!-- Page Main -->  */}
        {/* <!-- Page Footer -->   */}
        <AESLPageFooter 
            pageTitle = "Consultants"
        />
        {/* <!-- Page Footer -->  */}
    </div>
    )
}

export default Consultants