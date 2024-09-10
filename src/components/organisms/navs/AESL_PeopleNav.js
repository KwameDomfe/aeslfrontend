import React from 'react'
import { Link } from 'react-router-dom'

const AESL_PeopleNav = () => {
    return (
        <div id=""
            class="gc1s12 grid gtc12 ggap1-00 
                mb1-00 pa1-00 
                white-90 bg-blue0
                fw5 tracked-tight"
        >
            <article id="people_nav1" 
                class="gr1s1 gc1s1
                w10-00 h0-00 
                pb-100 
                f1-00 
                bg-blue0 ba br0-50 shadow-green"
            >
                <div id=""
                    class="pa0-50"
                >
                    <Link to="/people"
                        class="white-90" 
                    >
                        <li class="mb0-75"> 
                            People
                        </li> 
                    </Link>
                </div> 
            </article>

            <article id="people_nav2" 
                class="gr1s1 gc2s1
                w10-00 h0-00 pb-100
                br0-50 ba shadow-green"
            >
                <ul id=""
                    class="ma0-50 "
                >   
                    <li class="mb0-75"
                    >
                        <Link to ="/people/principal-consultants/"
                            class="white-90" 
                        >
                            Principal Consultants
                        </Link>
                    </li>
                    <li class="mb0-75"
                    >
                        <Link to ="/people/senior-consultants/"
                            class="white-90" 
                        >
                            Senior Consultants
                        </Link>
                    </li>
                    <li class="mb0-75"
                    >
                        <Link to ="/people/consultants"
                            class="white-90" 
                        >
                            Consultants
                        </Link>
                    </li>
                </ul> 
            </article>

            <article id="people_nav3" 
                class="gr1s1 gc3s1
                w10-00 h0-00 pb-100
                br0-50 ba shadow-green"
            >
                <ul id=""
                    class="ma0-50 "
                >   
                    <li class="mb0-75"
                    >
                        <Link to ="/people/senior-professionals"
                            class="white-90" 
                        >
                            Senior Professionals
                        </Link>
                    </li>
                    <li class="mb0-75"
                    >
                        <Link to ="/people/professionals"
                            class="white-90" 
                        >
                            Professionals
                        </Link>
                    </li>
                    <li class="mb0-75">
                        <Link to ="/people/assistant-professionals"
                            class="white-90" 
                        >
                            Assistant Professionals
                        </Link>
                    </li>
                </ul>
            </article>

            <article id="people_nav3" 
                class="gr1s1 gc4s1
                w10-00 h0-00 pb-100
                br0-50 ba shadow-green"
            >
                <ul id=""
                    class="ma0-50 "
                >   
                    <li class="mb0-75">
                        <Link to ="/people/probationers"
                            class="white-90" 
                        >
                            Probationers
                        </Link>
                    </li>
                    <li class="mb0-75">
                        <Link to ="/people/service-personnel"
                            class="white-90" 
                        >
                            Service Personnel
                        </Link>
                    </li>
                    <li class="mb0-75"
                    >
                        <Link to ="/people/support-team"
                            class="white-90" 
                        >
                            Support Team
                        </Link>
                    </li>
                </ul> 
            </article>

            <article id="alumni" 
                class="gr1s1 gc12s1 
                    w10-00 h0-00 pb-100
                    br0-50 bg-white shadow-green"
            >
            </article>
        </div>
    )
}

export default AESL_PeopleNav