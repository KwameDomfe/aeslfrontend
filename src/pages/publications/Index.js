import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import xxx from '../../images/placeholders/landscape_Images/featured_grid.jpg'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import { PiBookBold } from 'react-icons/pi'
const Index = () => {
    const title = 'Publications'
    return (
        <div id="PublicationsPage"
            className=""
        >
            {/* Page Header Start */}
            <header id = ""
                className="bg-white"
            >   
                <CategoryHeaderBanner 
                    image = {xxx}
                    title = 'publications'
                    Icon = {<PiBookBold />}
                />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className=""
            >
                {/* News Start */}
                    <div className="grid gtc12 ggap1-00
                        pa1-00"
                    >
                        <article className="gr1s3 gc1s12"
                        >
                            <hgroup className="flex justify-around items-start flex-column"
                            >
                                <h2 className="
                                    w-100 h-100
                                    mt0-75"
                                >
                                    Please, we are sorry our <span className="blue0 bb bw2">{title} Page</span>  is under development
                                </h2>
                                <h4 className="
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
                className=""
            >
                <AESLPageFooter 
                    pageTitle = 'Publications'
                />
            </footer>
            {/* Page Footer End */}
        </div>
    )
}

export default Index