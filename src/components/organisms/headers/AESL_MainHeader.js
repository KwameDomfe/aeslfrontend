import { useState } from 'react'
import Logo from '../../molecules/mainHeader/AESLLogo'
import MenuToggle from '../../molecules/mainHeader/MenuToggle'
import PrimaryNavigation from '../../molecules/mainHeader/PrimaryNavigation'
import UserAccounts from '../../molecules/mainHeader/UserAccounts'
import { Link } from 'react-router-dom'
import SearchForm from '../../molecules/mainHeader/SearchForm'
import SocialNavigation from '../../molecules/mainHeader/SocialNavigation'
import MiscNav from '../../molecules/mainHeader/MiscNav'
import PoweredBy from '../../molecules/mainHeader/PoweredBy'


const MainHeader = () => {

    // State Variables
    const [toggleMenu, SetToggleMenu] = useState(true)

    /* Custom Functions */
    const handleToggleMenu = () => {
        SetToggleMenu(!toggleMenu)
    };
   
    return (
        <article id="o__TwoColumnHeader" 
            className={`flex justify-between flex-column items-center
                ${toggleMenu ? "h-100": "vh-100"} of-hidden
                pa0-75 
                bg-blue0`}
        >   
            <div id="m__AESLLogo"
                className="flex justify-between justify-center-l w-100"
                tabIndex="0" 
                title="AESL Logo" 
                aria-label="AESL Logo"
            >
                <Link to="/"
                >
                    <Logo />
                </Link>
                <div id="m__MenuToggle" 
                    className="flex items-center justify-center dn-l
                        pointer"
                >
                    <MenuToggle menuToggle={toggleMenu}
                        menuClick = {handleToggleMenu}
                    />
                </div>
            </div>
            
            <div className = {`${toggleMenu ? 'dn':'flex'} flex-l flex-column justify-between 
                    h-100 
                    pt4-00 
                    `
                }
            >
                <div id="m__SearchForm" 
                    className="flex-l items-center justify-center w-100"
                >
                    <SearchForm />
                </div>
                
                <nav id="m__MainNav"
                    className="flex-l
                    w-100"
                >
                    <PrimaryNavigation 
                        menuClick ={handleToggleMenu}
                    />
                </nav>
                
                <nav id="m__SocialMediaNav"
                    className="flex-l items-center justify-center w-100-l mv1-00-l" 
                    tabIndex="0"
                >
                    <SocialNavigation 
                        menuClick ={handleToggleMenu}
                    />
                </nav>
                
                <section id="m__" 
                    className="flex-l flex-column-l"
                >
                    <UserAccounts 
                        menuClick ={handleToggleMenu}
                    />
                </section>
                
                <footer id="m__" 
                    className="flex-l flex-column-l"
                >
                    <MiscNav 
                        menuClick ={handleToggleMenu}
                    />

                    <PoweredBy 
                        menuClick ={handleToggleMenu}
                    />
                </footer>
            </div>
        </article>
    )
}
  
export default MainHeader