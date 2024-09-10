import React from 'react'
import consultant from '../../../images/practice/management/director-of-finance/dof-01.jpeg'
import xxx from '../../../images/practice/management/management-01.jpeg'

import relatedProject01 from '../../../images/projects/civic_and_culture/civic/civic_2.jpg'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import { Link } from 'react-router-dom'
const ConsultantDetails = () => {
    return (
        <div id=""
            class="min-vh-100 w-100">
        
            {/* <!-- Page Header --> */}
            <header id="consultant_pageHeader"
                class="grid gtc12"
            >
                <figure class="gc1s12">
                    <img src={xxx}
                        alt=""
                        class="vh-50 cover"
                    />
                </figure>
                <hgroup class="gc1s12 w-100 blue0">
                    <h2 class="w-100 h-100
                        pa1-00 pb1-00 mb0-00
                        f3-00
                        ">
                        Consultant's Title and Name
                    </h2>     
                </hgroup>
            </header>
            {/* <!-- Page Header --> */}
            
            {/* <!-- Page Main --> */}
            <main id = "consultant-pagemain"
                class="bg-white"
            >
                <div id="l_3:1" 
                    class="grid gtc4 ph1-00"
                >
                    {/* <!-- AESL History Start --> */}
                    <div id="lc_gc1s3__pageMain--Consultant"
                        class="gc1s3
                        min-vh-100
                        mb1-00"
                    >   
                        {/* <!-- Page Navigation --> */}
                        <div id="consultants_summary"
                            class="pt2-00"
                        >
                            <div id="pageNav"
                                class="grid gtc12 gc1s12 ggap1-00
                                    white-90 ph4-00 mb2-00
                                    tracked-tight"
                            >
                                <article id="people_nav1" 
                                    class="gr1s1 gc1s2
                                        h10-00 w10-00
                                        f1-00 bg-blue0"
                                >
                                    <hgroup id=""
                                        class="
                                            w-100 h-100 
                                            pa1-00
                                            bg-green
                                            "
                                    >   <h3>CV</h3> 
                                    </hgroup> 
                                </article>

                                <article id="brief_summary" 
                                    class="gr1s1 gc3s10
                                        h10-00 w-100
                                        pa1-00
                                        f1-25 bg-blue0"
                                >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, error magnam. Impedit tempore earum debitis quae vero quo. Magnam, facere. Ea, velit ut earum voluptas commodi autem explicabo blanditiis, unde veniam architecto fuga rem quas debitis animi doloribus maiores ullam, molestias incidunt eum odit? Quod similique quae impedit accusamus nisi?
                                
                                </article>
                            </div>
                        </div>
                        {/* <!-- Page Navigation -->  */}

                        {/* <!-- Consultants --> */}
                        <div id="consultant"
                            class="grid gtc12 ggap1-00
                                mb2-00"
                        >
                            <div id="consultants_gallery"
                                class="gr1s1 gc1s12
                                    grid gtc12 ggap1-00
                                    mb2-00
                                    white-90"
                            >
                                <article id="people_consultant_gallery_3" 
                                    class="gr1s1 gc1s6
                                            pa2-00
                                            white-90 bg-blue1"
                                >
                                    <figure class="shadow-5 bg-blue2 mb0-50">
                                        <img src={xxx}
                                            alt=""
                                            class="pa0-50 bg-blue0"
                                        /> 
                                    </figure>
                                    <hgroup 
                                        class="flex flex-column
                                            w-100 bg-blue0 
                                            white-90 pa0-50 "
                                        >
                                        <h5 class="mb0-50">
                                            Image Title
                                        </h5> 
                                        <h6>
                                            Image Description
                                        </h6>   
                                    </hgroup> 
                                </article>
                                
                                <article id="people_consultant_gallery_4" 
                                    class="gr1s1 gc7s6
                                        pa2-00
                                        white-90 bg-blue1"
                                >
                                    <figure class="shadow-5 bg-blue2 mb0-50">
                                        <img src={xxx}
                                            alt=""
                                            class="pa0-50 bg-blue0"
                                        /> 
                                    </figure>
                                    <hgroup 
                                        class="flex flex-column
                                            w-100 
                                            pa0-50
                                            bg-blue0 
                                            white-90 "
                                        >
                                        <h5 class="mb0-50">
                                            Image Title
                                        </h5> 
                                        <h6>
                                            Image Description
                                        </h6>   
                                    </hgroup> 
                                </article>
                            </div>
                            {/* <!-- Consultants Header --> */}

                            {/* <!-- Consultants Description --> */}
                            <article id="consultants_description" 
                                class="gr2s1 gc1s12"
                            > 
                                <div id=""
                                    class="flex ggap1-00 w-100 tj">
                                    <div id="div" class="w-50">
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi minima
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis  
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt v
                                        </p>
                                    </div>
                                    <div id="div" class="w-50">
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt voluptatibus
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt voluptatibus 
                                        </p>
                                    </div>
                                </div>
                                
                            </article>
                            {/* <!-- Consultants Description --> */}
                            
                            <div id="people_consultants_extra"
                                    class="gr3s1 gc1s12
                                        grid gtc12 ggap1-00
                                        mb2-00
                                        white-90"
                            >
                                
                                <article id="news_1" 
                                    class="gr1s1 gc1s3
                                        flex
                                        h0-00 
                                        pb-100 
                                        white-90 bg-blue0"
                                    >
                                    <hgroup class="flex justify-start items-start flex-column 
                                                h-100
                                                pa0-50"
                                    >
                                        <h5 class="flex items-center justify-start
                                            mb0-50"
                                        >
                                            News 1
                                        </h5> 
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde eius, est fugiat rerum possimus, modi eos officiis, architecto saepe cupidita
                                        </p>    
                                        <a  href="{% url 'website:practice-home' %}"
                                            class="pa0-25
                                                white-90 f0-75
                                                ba b--white-90 br0-25"
                                        >Read More</a> 
                                    </hgroup> 
                                </article>
                                
                                <article id="news_2" 
                                    class="gr1s1 gc4s3
                                        flex
                                            h0-00 
                                            pb-100 
                                            white-90 bg-blue0"
                                >
                                    <hgroup class="flex justify-start items-start flex-column 
                                                h-100
                                                pa0-50
                                                bg-blue0"
                                    >
                                        <h5 class="flex items-center justify-start
                                            w-100 mb0-50"
                                        >
                                            News 2
                                        </h5> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde eius, est fugiat rerum possimus, modi eos officiis, architecto saepe cupidita</p>    
                                        <a  href="{% url 'website:practice-home' %}"
                                            class="pa0-25
                                                white-90 f0-75
                                                ba b--white-90 br0-25"
                                        >Read More</a>
                                    </hgroup> 
                                </article>
                                
                                <article id="new_3" 
                                    class="gr1s1 gc7s3
                                    flex
                                            h0-00 
                                            pb-100 
                                            white-90 bg-blue0"
                                >
                                    <hgroup class="flex justify-start items-start flex-column 
                                                w-100 h-100 
                                                pa0-50
                                                bg-blue0
                                                ">
                                        <h5 class="flex items-center justify-start
                                            w-100 mb0-50
                                            ">
                                            News 3
                                        </h5> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde eius, est fugiat rerum possimus, modi eos officiis, architecto saepe cupidita</p>    
                                        <a  href="{% url 'website:practice-home' %}"
                                            class="pa0-25
                                                white-90 f0-75
                                                ba b--white-90 br0-25"
                                        >Read More</a>
                                    </hgroup>  
                                </article>
                                
                                <article id="people_rank_1" 
                                    class="gr2s1 gc10s3
                                        flex
                                        h0-00 
                                        pb-100 
                                        white-90 bg-blue1"
                                >
                                    <ul id=""
                                        class="
                                            w-100 h-100
                                            pa0-50
                                            bg-blue1"
                                    >   
                                        {/* {% for x in junior_ranks %} */}
                                            <li class="">
                                                
                                                <Link  to="/"
                                                    class="white-90" 
                                                > x </Link>
                                            </li>
                                        {/* {% endfor %}           */}
                                    </ul> 
                                </article>
                                                                
                                <article id="people_rank_2" 
                                    class="gr2s1 gc7s3 shadow-5
                                    flex
                                            h0-00 
                                            pb-100 
                                            white-90 bg-blue1"
                                >
                                    <ul id=""
                                        class="
                                            w-100
                                            pa0-50
                                            bg-blue1"
                                    >   
                                        {/* {% for x in ranks %} */}
                                            <li class="">
                                                
                                                <a  href="{% url 'website:people-home' %}"
                                                    class="white-90" 
                                                >x</a>
                                            </li>
                                        {/* {% endfor %} */}
                                    </ul> 
                                </article>

                                <article id="misc_gold" 
                                    class="gr2s1 gc1s3
                                        pb-100
                                        bg-black-20"
                                >
                                    
                                </article>
                                <article id="misc_blue_1" 
                                    class="gr2s1 gc4s3
                                        bg-black-20
                                        ">
                                </article>
                                <article id="misc_blue_2" 
                                    class="gr1s1 gc10s3
                                        bg-green
                                        ">
                                </article>
                            </div>

                            <article id="consultants_description" 
                                class="gr4s1 gc1s12"
                            > 
                                <div id=""
                                    class="flex ggap1-00 w-100 tj"
                                >
                                    <div id="div"
                                    >
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi minima
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis  
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt v
                                        </p>
                                    </div>
                                    <div id="div"
                                    >
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt voluptatibus
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt voluptatibus 
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* <!--Related Projectss --> */}
                        <section className="mb1-00">
                            <hgroup id="consultants_related_projects"
                                class="gc1s12 w-100 blue0"
                            >
                                <h2 class="w-100 h-100
                                    pv1-00 pb1-00 mb0-00
                                    f3-00 ttu
                                    ">
                                    Related Projects
                                </h2>
                            </hgroup>
                            <div id="3x1_Grid_relatedProjects" 
                                class="grid gc1s12 ggap0-50
                                    ttu"
                            >   
                                <article id=""
                                    class="gr1s1 gc1s4
                                        flex items-center justify-center
                                        pa0-50 
                                        relative"
                                >
                                    <hgroup 
                                        class="flex 
                                        w-100 h-100 
                                        bg-black-20
                                        z-5
                                        absolute">
                                        <h5 
                                            class="flex items-center justify-center 
                                            w-100 h-100 
                                            white-90 "
                                        >
                                            Project One
                                        </h5>     
                                    </hgroup> 
                                    <figure 
                                        class=""
                                    >
                                        <img src={relatedProject01}
                                            alt=""
                                            class="w-100 h-100
                                                ba b--gold 
                                                cover"
                                        />
                                    </figure> 
                                </article>
                                
                                <article id="" 
                                    class="gr1s1 gc5s4
                                    flex items-center justify-center
                                    pa0-50
                                    relative"
                                >
                                    <figure>
                                        <img src={relatedProject01}
                                            alt=""
                                            class="w-100 h-100
                                                ba b--gold 
                                                cover"
                                        />
                                    </figure> 
                                    <hgroup class="flex justify-around items-start flex-column 
                                        w-100 h-100 bg-black-20
                                        absolute">
                                        <h5 class="flex items-center justify-center
                                            w-100 tc 
                                            white-90">
                                            Project Two
                                        </h5>
                                    </hgroup>
                                </article>

                                <article id=""
                                    class="gr1s1 gc9s4
                                        flex items-center justify-center
                                        pa0-50
                                        relative"
                                >
                                    <figure>
                                        <img src={relatedProject01}
                                            alt=""
                                            class="w-100 h-100
                                                ba b--gold 
                                                cover"
                                        />
                                            
                                    </figure> 
                                    <hgroup class="flex justify-around items-start flex-column 
                                        w-100 h-100 
                                        bg-black-20
                                        absolute">
                                        <h5 class="flex items-center justify-center
                                            w-100 tc 
                                            white-90">
                                            Project Three
                                        </h5>     
                                    </hgroup> 
                                </article>
                            </div>
                        </section>
                        <SectionFooter sectionTitle = "People/Consultants/Consultant's Title and Name" />
                       
                        {/* <!--Related Projectss --> */}

                        {/* <!-- Consultants Gallery -->  */}
                        <hgroup id="consultants_lists"
                            class="gc1s12 w-100 blue0">
                            <h2 class="w-100 h-100
                                pv1-00 pb1-00 mb0-00
                                f3-00 ttu
                                ">
                                consultants
                            </h2>     
                        </hgroup>

                        <div id="3x3_Grid_Consultants" 
                            class="grid gc1s12 ggap0-50 mb1-00 ttu"
                        >   
                            <article id="Consultants_01" 
                                class="gr1s1 gc1s4
                                    flex items-center justify-center
                                    pa0-50 
                                    relative"
                            >
                                <figure 
                                    class=""
                                >
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                </figure>
                                    <hgroup 
                                    class="flex 
                                    w-100 h-100 
                                    bg-black-20
                                    z-5
                                    absolute">
                                    <h5 
                                        class="flex items-center justify-center 
                                        w-100 h-100 
                                        white-90 ">
                                        Consultant Details
                                    </h5>     
                                </hgroup> 
                            </article>
                            
                            <article id="Consultants_02" 
                                class="gr1s1 gc5s4
                                    flex items-center justify-center
                                    pa0-50
                                    relative"
                            >
                                <figure>
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                        
                                </figure> 
                                <hgroup class="flex justify-around items-start flex-column 
                                    w-100 h-100 bg-black-20
                                    absolute">
                                    <h5 class="flex items-center justify-center
                                        w-100 tc 
                                        white-90">
                                        Consultant Details
                                    </h5>     
                                </hgroup> 
                            </article>

                            <article id="Consultants_03" 
                                class="gr1s1 gc9s4
                                    flex items-center justify-center
                                    pa0-50
                                    relative"
                            >
                                <figure>
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                        
                                </figure> 
                                <hgroup class="flex justify-around items-start flex-column 
                                    w-100 h-100 
                                    bg-black-20
                                    absolute">
                                    <h5 class="flex items-center justify-center
                                        w-100 tc white-50
                                        white-90">
                                        Consultant Details
                                    </h5>     
                                </hgroup> 
                            </article>

                            <article id="Consultants_04" 
                                class="gr2s1 gc1s4
                                    flex items-center justify-center
                                    pa0-50 
                                    relative"
                            >
                                <hgroup 
                                    class="flex 
                                    w-100 h-100 
                                    bg-black-20
                                    z-5
                                    absolute"
                                >
                                    <h5 
                                        class="flex items-center justify-center 
                                        w-100 h-100 
                                        white-90 "
                                    >
                                        Consultant Details
                                    </h5>
                                </hgroup> 
                                <figure 
                                    class=""
                                >
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                </figure> 
                            </article>
                            
                            <article id="Consultants_05" 
                                class="gr2s1 gc5s4
                                    flex items-center justify-center
                                    pa0-50
                                    relative"
                            >
                                <figure>
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                </figure> 
                                <hgroup class="flex justify-around items-start flex-column 
                                    w-100 h-100 bg-black-20
                                    absolute"
                                >
                                    <h5 class="flex items-center justify-center
                                        w-100 tc 
                                        white-90"
                                    >
                                        Consultant Details
                                    </h5>
                                </hgroup> 
                            </article>

                            <article id="Consultants_06" 
                                class="gr2s1 gc9s4
                                    flex items-center justify-center
                                    pa0-50
                                    relative"
                            >
                                <figure>
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                        
                                </figure> 
                                <hgroup class="flex justify-around items-start flex-column 
                                    w-100 h-100 
                                    bg-black-20
                                    absolute">
                                    <h5 class="flex items-center justify-center
                                        w-100 tc 
                                        white-90">
                                        Consultant Details
                                    </h5>
                                </hgroup> 
                            </article>

                            <article id="Consultants_07" 
                                class="gr3s1 gc1s4
                                    flex items-center justify-center
                                    pa0-50 
                                    relative"
                            >
                                <hgroup 
                                    class="flex 
                                    w-100 h-100 
                                    bg-black-20
                                    z-5
                                    absolute">
                                    <h5 
                                        class="flex items-center justify-center 
                                        w-100 h-100 
                                        white-90 ">
                                        Consultant Details
                                    </h5>     
                                </hgroup> 
                                <figure 
                                    class=""
                                >
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                </figure> 
                            </article>
                            
                            <article id="Consultants_08" 
                                class="gr3s1 gc5s4
                                    flex items-center justify-center
                                    pa0-50
                                    relative"
                            >
                                <figure>
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                        
                                </figure> 
                                <hgroup class="flex justify-around items-start flex-column 
                                    w-100 h-100 bg-black-20
                                    absolute">
                                    <h5 class="flex items-center justify-center
                                        w-100 tc 
                                        white-90">
                                        Consultant Details
                                    </h5>     
                                </hgroup> 
                            </article>

                            <article id="Consultants_09" 
                                class="gr3s1 gc9s4
                                    flex items-center justify-center
                                    pa0-50
                                    relative"
                            >
                                <figure>
                                    <img src={consultant}
                                        alt=""
                                        class="w-100 h-100
                                            ba b--gold 
                                            cover"
                                    />
                                        
                                </figure> 
                                <hgroup class="flex justify-around items-start flex-column 
                                    w-100 h-100 
                                    bg-black-20
                                    absolute">
                                    <h5 class="flex items-center justify-center
                                        w-100 tc 
                                        white-90">
                                        Consultant Details
                                    </h5>     
                                </hgroup> 
                            </article>
                        </div> 
                        {/* <!-- Consultants Gallery --> */}

                        {/* <!-- Page Footer --> */}
                        <SectionFooter 
                        sectionTitle = "Consultants"
                        />
                        {/* <!-- Page Footer --> */}
                    </div>

                    {/* <!-- AESL History Aside  Start --> */}
                    <aside id="lc_gc4s1__pageAside--Consultant" 
                        class="gc4s1 
                            blue0 relative"
                    >
                        <div class="flex flex-column justify-start
                            min-vh-100 
                            pl1-00 pt2-00
                            sticky top-0"
                        >
                            <h2 className="ttu">
                                <Link to ="/people/consultants">
                                    Consultants
                                </Link>
                            </h2>
                            <ul class="mb1-00 bl bw4 b--green pl1-00 f0-75">
                                <h3 >On this page</h3>
                                <li class="mb1-00 i">
                                    <a href="#consultants_summary"
                                    class="blue0"
                                    >
                                        Consultant Summary
                                    </a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#consultants_gallery"
                                        class="blue0"
                                    >
                                        Consultant's Gallery
                                    </a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#consultants_description"
                                    class="blue0"
                                    >
                                        Consultant's Description
                                    </a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#people_consultants_extra"
                                        class="blue0"
                                    >
                                        Consultant's Links
                                    </a>
                                </li>
                                    <li class="mb1-00 i">
                                    <a href="#consultants_related_projects"
                                        class="blue0"
                                    >
                                        Related Projects
                                    </a>
                                </li>
                                <li class="mb1-00 i">
                                    <a href="#consultants_lists"
                                    class="blue0"
                                    >
                                        Consultants Lists
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    {/* <!-- AESL History Aside  End --> */}
                </div>
            </main>
            {/* <!-- Page Main -->  */}
            {/* Page Footer  */}
            <AESLPageFooter pageName = "Consultant Details"/>
            {/* Page Footer  */}
        </div>
    )
}

export default ConsultantDetails