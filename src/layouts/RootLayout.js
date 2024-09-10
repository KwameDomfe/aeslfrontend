import MainHeader from '../components/organisms/headers/AESL_MainHeader'
import MainFooter from '../components/organisms/footers/AESLMainFooter'
import { Outlet } from 'react-router-dom'
// import Breadcrumbs from '../components/Breadcrumbs'

const RootLayout = () => {

    return (
        // <page Layout Start
        <div id="l__twoColumn" 
            class="flex flex-column flex-row-l vh-100 w-100"
        >   
            {/* Main Header Start */}
                <header id="lc__MainHeader" 
                    class=""  
                >  
                    <MainHeader />
                </header>
            {/* Main Header End */}
            
            {/* <!-- Main Content Start --> */}
                <main id="lc__MainContent"
                    class="vh-100 w-100 of-y-scroll"
                >   
                    {/* Page Content Start */}
                    <Outlet />
                    {/* Page Content End */}

                    {/* Main Footer Start */}
                    <footer id="lc__mainFooter"
                        class=""
                    >
                        <MainFooter />
                    </footer>
                    {/* Main Footer End */}
                </main>
            {/* <!-- Main Content End --> */}
        </div>
        // page Layout End
    )
}

export default RootLayout
