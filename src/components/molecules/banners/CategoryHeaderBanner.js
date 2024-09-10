import React from 'react'

const CategoryHeaderBanner = (props) => {

    const {image, title, Icon} = props

    return (
        <section id = "princeples_pageHeader"
            class="grid gtc12
            "
        >
            <figure class="gc1s12"
            >
                <img src={image}
                    alt=""
                    class="w-100 vh-50 vh-60-l cover"
                />
            </figure>
            <hgroup class=" flex items-center w-100 blue0 ph1-00 gc1s12 f3-50 "
            >
                {Icon}
                <h2 class="
                    ml2-00 ttu tl"
                >
                    {title}
                </h2>
            </hgroup>
        </section>
    )
}

export default CategoryHeaderBanner