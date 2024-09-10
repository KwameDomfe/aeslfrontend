import history from '../../../images/practice/history/History-01.JPG'
import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import { Link } from 'react-router-dom'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'


const History = () => {
    return (
        <div>
            <header>
                <SubCategoryHeaderBanner
                    image = {history}
                    title = 'History'
                />
                <AESLPracticeNav />
            </header>
            {/* <!-- Page Main --> */}
            <main id="pageContent_History" 
                class="ph1-00"
            >
                <div id="l_3:1" 
                    class="grid gtc4"
                >
                    {/* <!-- AESL History Start --> */}
                    <div id="lc_gc1s3__pageMain--history"
                        class="gc1s3
                            min-vh-100"
                    >   
                        <div id="history"
                            class="grid gtc12 ggap1-00
                                mb1-00
                                blue0"
                        >
                            <section id="" 
                                class="gr1s1 gc2s10"
                            >   
                                <div class="mv6-00 lh-copy tj f1-25"
                                >
                                    <p>
                                        Initially came to be known as AESC when consultancy services were separated from the Public Works Department (PWD) under NRCD 193, 1973, and as a government corporation, AESC, became the sole consultants for public Works.
                                    </p>
                                   
                                </div>
                            </section>
                            <section id="" 
                                class="gr2s1 gc1s12"
                            >     
                                <div class="grid ggap1-00 ">
                                    <figure class="shadow-5 w-100 flex items-center justify-center items-center">
                                        <img src={history}
                                        alt=""
                                        class="pa0-50 w-60"
                                    /> 
                                    </figure>
                                    <div class="mv2-00 lh-copy tj ">
                                        <p>
                                            Later the company was restructured by an act of parliament, Act 461 Statutory Corporation (Conversion to Companies), in 1993 as AESL with the ownership transformed from a government corporation into 100% state owned limited liability company with mandate including “investigation, survey, design, administration and management both in Ghana and elsewhere of all kinds of architectural and engineering consultancy works, whether public or private including the design of houses, highways, airfields, bridges, harbour, water supplies and sewerage systems, soils and foundations investigation”. 
                                        </p>
                                    </div>
                                </div>
                                
                                <div id="history-gallery"
                                    class="gr3s1 gc1s12
                                            grid gtc12 ggap1-00
                                            
                                            white-90 mv2-00"
                                >
                                    <article id="history_1" 
                                        class="gr1s1 gc1s6 grid
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <hgroup id =""
                                            class="gr1s1 gc1s1 items-center justify-start
                                                pa1-00 ma2-00
                                                white-90 bg-blue0 br0-50 absolute"                                  
                                        >   
                                            <h4 id=""
                                                class="ma0-00 bb"
                                            >
                                                History 1
                                            </h4>
                                            <h5 id=""
                                                class="bb pa0-50 mb0-00 f1-00">
                                                Quarterly Meeting 
                                            </h5>
                                            <h6 id="" class ="mb2-00">
                                                This is the one we are editing consectetur adipisicing elit diting consectetur adipisicing elit.
                                            </h6>
                                            <small>Royal Senchi, Akosombo.</small>    
                                        </hgroup>
                                        <figure class="shadow-5">
                                            <img src={history}
                                                alt=""
                                                class="
                                                    w-100 h-100
                                                    pa0-50
                                                    cover"
                                                /> 
                                        </figure>
                                    </article>
                                    
                                    <article id="history_4" 
                                        class="gr1s1 gc7s6
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure class="shadow-5">
                                            <img src={history}            
                                                alt=""
                                                class="pa0-50"
                                            /> 
                                        </figure>
                                        <hgroup id = ""
                                            class="gr1s1 gc1s1 items-center justify-start
                                                pa1-00 ma2-00
                                                white-90 bg-blue0 br0-50 absolute"                                  
                                        >   
                                            <h4 id=""
                                                class="ma0-00 bb"
                                            >
                                                History 4
                                            </h4>
                                            <h5 id=""
                                                class="bb pa0-50 mb0-00">
                                                Quarterly Meeting 
                                            </h5>
                                            <h6 id="" class ="mb2-00">
                                                This is the one we are editing consectetur adipisicing elit diting consectetur adipisicing elit.
                                            </h6>
                                            <small>Royal Senchi, Akosombo.</small>    
                                        </hgroup> 
                                    </article>
                                    {/* <!-- Practice --> */}
                                </div>
                                <div id=""
                                    class="gr3s1 gc1s12
                                        grid gtc12 ggap1-00
                                        min-vh-10 mb1-00
                                        white-90"
                                >
                                    <article id="misc_gold" 
                                        class="gr1s1 gc5s2
                                            flex items-center justify-center
                                            bg-gray
                                            "
                                    >
                                    </article>
                                
                                    <article id="misc_blue" 
                                        class="gr1s1 gc1s4
                                            flex items-center justify-center
                                            bg-black-90"
                                    >
                                    </article>
                                </div>
                            <SectionFooter 
                                sectionTitle="History"
                            />
                            </section>
                        </div>
                    </div>
                    {/* <!-- AESL History End --> */}
    
                    {/* <!-- AESL History Aside  Start --> */}
                    <div gid="lc_c4s1__pageAside--history" 
                        class="gc4s1 
                            blue0"
                    >
                        <div class="flex flex-column justify-between
                            min-vh-100 
                            pa1-00 pt6-00
                            sticky top-0"
                        >
                            <div>
                                <Link to = "/practice"
                                    class="dib mb1-00 
                                        f1-25 blue0 ttu fw6">Back to Practice
                                </Link>
                                <ul class="mb1-00 bl bw4 pa1-00 b--gray gray f0-75"
                                >
                                    <h3 >History</h3>
                                    <li class="mb1-00 i">
                                        <a href="#history"
                                            class="gray"
                                        >
                                        AESL History
                                        </a>
                                    </li>
                                    <li class="mb1-00 i">
                                        <a href="#history-gallery"
                                            class="gray"
                                        >
                                        AESL History Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mb1-00 gray"
                            >
                                {/* <small>Previous</small> <br />
                                <Link to ="/practice/mission-vision-and-values" 
                                class="mb1-00 gray f0-75 b"
                                >
                                    AESL Mission, Vision and Values
                                </Link> 
                                <br/><br/>  */}
                                <small>Next</small> 
                                <br/>
                                <Link to ="/practice/mandate" class="mb1-00 gray f0-75 b">AESL Mandate</Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- AESL History Aside  End --> */}
                </div>
            </main>
            {/* // <!-- Page Main -->  */}
            <AESLPageFooter pageName="History"/>
        </div>
    )
}

export default History