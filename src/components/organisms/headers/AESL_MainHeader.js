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

    // UseState Variables
    const [toggleMenu, SetToggleMenu] = useState(true)

    /* Custom Functions */
    const handleToggleMenu = () => {
        SetToggleMenu(!toggleMenu)
    };
   
    return (
        <article id="o__TwoColumnHeader" 
            className="flex justify-between flex-column-l items-center
                vh-100-l 
                pa0-75 
                bg-blue0"
        >   
            <div id="m__AESLLogo"
                className="flex items-center justify-center flex-column-l"
                tabIndex="0" 
                title="AESL Logo" 
                aria-label="AESL Logo"
            >
                <Link to="/"
                    className="white-90 mb1-00-l flex"
                >
                <Logo />
                </Link>
            </div>
            
            <div id="m__SearchForm" 
                className="dn flex-l items-center justify-center w-100"
            >
                <SearchForm />
            </div>

            <div id="m__MenuToggle" 
                className="flex items-center justify-center dn-l
                    pointer"
            >
                <MenuToggle toggleMenu={toggleMenu}
                    onClick = {handleToggleMenu}
                />
            </div>
            
            <nav id="m__MainNav"
                className="dn flex-l
                w-100"
            >
                <PrimaryNavigation />
            </nav>
            <nav id="m__SocialMediaNav"
                className="dn flex-l items-center justify-center w-100-l mv1-00-l" 
                tabIndex="0"
            >
                <SocialNavigation />
            </nav>
            
            <section id="m__" 
                className="dn flex-l flex-column-l"
            >
                <UserAccounts />
            </section>
            <footer id="m__" 
                className="dn flex-l flex-column-l"
            >
                <MiscNav />

                <PoweredBy />
            </footer>
        </article>
    )
}
  
export default MainHeader