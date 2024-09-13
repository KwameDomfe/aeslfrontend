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
                className="ph1-00"
            >
                <div id="l_3:1" 
                    className="grid gtc4"
                >
                    {/* <!-- AESL History Start --> */}
                    <div id="lc_gc1s3__pageMain--history"
                        className="gc1s3
                            min-vh-100"
                    >   
                        <div id="history"
                            className="grid gtc12 ggap1-00
                                mb1-00
                                blue0"
                        >
                            <section id="" 
                                className="gr1s1 gc2s10"
                            >   
                                <div className="mv6-00 lh-copy tj f1-25"
                                >
                                    <p>
                                        AESL initially came to be known as AESC when consultancy services were separated from the Public Works Department (PWD) under NRCD 193, 1973. As a government corporation, AESC became the sole consultant for public works. The company was later restructured by an act of parliament, ACT 461 Statutory Corporation (Conversion to Companies).
                                    </p>
                                </div>
                            </section>
                            <section id="" 
                                className="gr2s1 gc1s12"
                            >     
                                <div className="grid ggap1-00 ">
                                    <figure className="shadow-5 w-100 flex items-center justify-center items-center">
                                        <img src={history}
                                        alt=""
                                        className="pa0-50 w-60"
                                    /> 
                                    </figure>
                                    <div className="mv2-00 lh-copy tj ">
                                        <p>
                                            In 1993, AESL was transformed from a government corporation into a 100% state-owned limited liability company. 
                                        </p>
                                        <p>
                                            Over the years, AESL expanded its scope and capabilities, incorporating engineering disciplines to offer integrated solutions to both private and public clients. With a commitment to excellence, the company began taking on increasingly complex and prestigious projects.
                                        </p>
                                        <p>
                                            AESL has built a reputation for delivering outstanding architectural and engineering services across various sectors, which continue to shape the built environment and contribute to the development of sustainable and impactful architectural and engineering solutions.
                                        </p>

                                    </div>
                                </div>
                                
                                <div id="history-gallery"
                                    className="gr3s1 gc1s12
                                            grid gtc12 ggap1-00
                                            
                                            white-90 mv2-00"
                                >
                                    <article id="history_1" 
                                        className="gr1s1 gc1s6 grid
                                            flex items-center justify-center
                                            relative"
                                    >
                                        {/* <hgroup id =""
                                            className="gr1s1 gc1s1 items-center justify-start
                                                pa1-00 ma2-00
                                                white-90 bg-blue0 br0-50 absolute"                                  
                                        >   
                                            <h4 id=""
                                                className="ma0-00 bb"
                                            >
                                                History 1
                                            </h4>
                                            <h5 id=""
                                                className="bb pa0-50 mb0-00 f1-00">
                                                Quarterly Meeting 
                                            </h5>
                                            <h6 id="" className="mb2-00">
                                                This is the one we are editing consectetur adipisicing elit diting consectetur adipisicing elit.
                                            </h6>
                                            <small>Royal Senchi, Akosombo.</small>    
                                        </hgroup> */}
                                        <figure className="shadow-5">
                                            <img src={history}
                                                alt=""
                                                className="
                                                    w-100 h-100
                                                    pa0-50
                                                    cover"
                                                /> 
                                        </figure>
                                    </article>
                                    
                                    <article id="history_4" 
                                        className="gr1s1 gc7s6
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure className="shadow-5">
                                            <img src={history}            
                                                alt=""
                                                className="pa0-50"
                                            /> 
                                        </figure>
                                        {/* <hgroup id = ""
                                            className="gr1s1 gc1s1 items-center justify-start
                                                pa1-00 ma2-00
                                                white-90 bg-blue0 br0-50 absolute"                                  
                                        >   
                                            <h4 id=""
                                                className="ma0-00 bb"
                                            >
                                                History 4
                                            </h4>
                                            <h5 id=""
                                                className="bb pa0-50 mb0-00">
                                                Quarterly Meeting 
                                            </h5>
                                            <h6 id="" className="mb2-00">
                                                This is the one we are editing consectetur adipisicing elit diting consectetur adipisicing elit.
                                            </h6>
                                            <small>Royal Senchi, Akosombo.</small>    
                                        </hgroup>  */}
                                    </article>
                                    {/* <!-- Practice --> */}
                                </div>
                                <div id=""
                                    className="gr3s1 gc1s12
                                        grid gtc12 ggap1-00
                                        min-vh-10 mb1-00
                                        white-90"
                                >
                                    <article id="misc_gold" 
                                        className="gr1s1 gc5s2
                                            flex items-center justify-center
                                            bg-gray
                                            "
                                    >
                                    </article>
                                
                                    <article id="misc_blue" 
                                        className="gr1s1 gc1s4
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
                        className="gc4s1 
                            blue0"
                    >
                        <div className="flex flex-column justify-between
                            min-vh-100 
                            pa1-00 pt6-00
                            sticky top-0"
                        >
                            <div>
                                <Link to = "/practice"
                                    className="dib mb1-00 
                                        f1-25 blue0 ttu fw6">Back to Practice
                                </Link>
                                <ul className="mb1-00 bl bw4 pa1-00 b--gray gray f0-75"
                                >
                                    <h3 >History</h3>
                                    <li className="mb1-00 i">
                                        <a href="#history"
                                            className="gray"
                                        >
                                        AESL History
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#history-gallery"
                                            className="gray"
                                        >
                                        AESL History Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb1-00 gray"
                            >
                                {/* <small>Previous</small> <br />
                                <Link to ="/practice/mission-vision-and-values" 
                                className="mb1-00 gray f0-75 b"
                                >
                                    AESL Mission, Vision and Values
                                </Link> 
                                <br/><br/>  */}
                                <small>Next</small> 
                                <br/>
                                <Link to ="/practice/mandate" className="mb1-00 gray f0-75 b">AESL Mandate</Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- AESL History Aside  End --> */}
                </div>
            </main>
            {/* // <!-- Page Main -->  */}
            <AESLPageFooter pageTitle="History"/>
        </div>
    )
}

export default History