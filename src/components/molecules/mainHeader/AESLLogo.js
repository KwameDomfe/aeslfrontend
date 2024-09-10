
import logo from '../../../images/_partials/logos/aesl_logo.png'

const AESLLogo = () => {
    
    return (
    
        <figure id="m__logo"
            className="flex justify-center items-center flex-column-l w-100 tl white-90"
        >
            <img src={logo}
                alt="KDA Design Technologies Company Logo"
                className="w3-00 h3-00 br5-00 mb0-50"
            />

            <figcaption 
                className="db-l white-90 ml0-50"
            >   
                <h4 class="f1-25 mb0-50"
                >
                    {/* Architectural & Engineering Services Limited */}
                    AESL Limited
                </h4>
                <h5 class="f0-75 mb0-50"
                >
                    Consulting Architects, <br/> Engineers and Surveyors
                </h5>
                <div class="flex items-center 
                    w-100  
                    f0-75 ttu"
                >
                    <div class="w-10 h0-25 bb bt mr1-00"></div> 
                        since 1973 
                    <div class=" w-10 h0-25 bb bt ml1-00"></div>
                </div>
            </figcaption> 
        </figure>
    )
}

export default AESLLogo
