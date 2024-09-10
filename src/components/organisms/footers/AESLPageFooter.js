import React from 'react'
import AESLLogo from '../../../images/_partials/logos/aesl_logo.png'
const AESL_PageFooter = (props) => {
    
    const {pageName} = props

    return (
        <div class="flex-s justify-between items-center
            pv2-00 ph1-00 mb1-00 
            bg-blue0 white-90"
        >
            <div class="flex justify-center items-center f1-50"
            >
                <img src={AESLLogo} 
                    alt="AESL Logo" 
                    class="w2-00 mr0-50"
                />
                <div>AESL - {pageName}</div>
            </div>
            <div class="tc">
                Consulting Architects, Engineers and Surveyors
            </div>
        </div> 
    )
}

export default AESL_PageFooter