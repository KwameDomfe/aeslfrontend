import React from 'react'
import AESLLogo from '../../../images/_partials/logos/aesl_logo.png'
const AESL_PageFooter = (props) => {
    
    const {pageTitle} = props

    return (
        <div className="flex-m justify-between items-center
            pa1-00 mb1-00 
            bg-blue0 gold"
        >
            <div className="flex justify-center items-center f1-50"
            >
                <img src={AESLLogo} 
                    alt="AESL Logo" 
                    className="w2-00 mr0-50"
                />
                <div>AESL - {pageTitle}</div>
            </div>
            <div className="tc">
                Consulting Architects, Engineers and Surveyors
            </div>
        </div> 
    )
}

export default AESL_PageFooter