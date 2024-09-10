import React from 'react'

const PageOverview = (props) => {

    const {overview} = props

    return (
        <hgroup id=""
        class=""
    >
        <div id="Project_Overview_1" 
            class="gr2s1 gc1s10 f1-50"
        > 
            <p class="mb0-00 pv4-00 lh-copy tj tracked">
                {overview}
            </p>
        </div>     
    </hgroup> 
    )
}

export default PageOverview