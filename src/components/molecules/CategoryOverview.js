import React from 'react'

const CategoryOverview = (props) => {

    const {description} = props
    
    return (
        <header 
            className="gc2s10 gr1s1 
                w-100
                blue0 
                bb"
        >
            <hgroup id=""
                className=""
            >
                <div id="" 
                    className="gr2s1 gc1s10 
                        f1-50"
                > 
                    <p className="mb0-00 pv4-00 
                        lh-copy tracked tj"
                    >
                        {description}
                    </p>
                </div>
            </hgroup>
        </header>
    )
}

export default CategoryOverview
