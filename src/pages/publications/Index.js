import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import xxx from '../../images/placeholders/landscape_Images/featured_grid.jpg'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import { PiBookBold } from 'react-icons/pi'
const Index = () => {
    const title = 'Publications'
    return (
        <div id="PublicationsPage"
            class=""
        >
            {/* Page Header Start */}
            <header id = ""
                class="bg-white"
            >   
                <CategoryHeaderBanner 
                    image = {xxx}
                    title = 'publications'
                    Icon = {<PiBookBold />}
                />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main class=""
            >
                {/* News Start */}
                    <div class="grid gtc12 ggap1-00
                        pa1-00"
                    >
                        <article class="gr1s3 gc1s12"
                        >
                            <hgroup class="flex justify-around items-start flex-column"
                            >
                                <h2 class="
                                    w-100 h-100
                                    mt0-75"
                                >
                                    Please, we are sorry our <span class="blue0 bb bw2">{title} Page</span>  is under development
                                </h2>
                                <h4 class="
                                    w-100 h-100
                                    mt0-75 
                                    red"
                                >
                                    It would be up and running very soon
                                </h4>
                            </hgroup>
                        </article>
                    </div>
                {/* News End */}
            </main>
            {/* Page Main End */}

            {/* Page Footer Start */}
            <footer id = ""
                class=""
            >
                <AESLPageFooter 
                    pageName = 'Publications'
                />
            </footer>
            {/* Page Footer End */}
        </div>
    )
}

export default Index