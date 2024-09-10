import React from 'react'

const SubCategoryHeaderBanner = (props) => {
    const {image, title, subTitle} = props

    return (
        <section id = "princeples_pageHeader"
            class="grid gtc12"
        >
            <figure class="gc1s12"
            >
                <img src={image}
                    alt=""
                    class="w-100 vh-50 vh-60-l cover"
                />
            </figure>
            <hgroup class="w-100 blue0 ph1-00 gc1s12"
            >
                <h2 class="
                    f2-50 f3-00-s ttu tl"
                >
                    {title}<span className="f2-00"> {subTitle}</span>
                </h2>
            </hgroup>
        </section>
    )
}

export default SubCategoryHeaderBanner