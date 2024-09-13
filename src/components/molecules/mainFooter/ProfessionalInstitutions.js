import React from 'react'
import ghie from '../../../images/_partials/logos/ghie.png'
import gia from '../../../images/_partials/logos/gia.png'
import ghip from '../../../images/_partials/logos/ghip.jpg'
import ghis from '../../../images/_partials/logos/ghis.jpg'

const ProfessionalInstitutions = () => {
  return (
    <article id="m_professionalInstitutions" 
    className="grid gtc3 ggap1-00" 
    aria-hidden="False"
>
    <figure id="GIA"
        className="gr1s2 gc1s1 
            flex items-center 
            br0-25 bg-white"  
        data-use-new="true"
    >
        <img src={gia} alt="" />
    </figure>

    <figure id="GhIE"
        className="gr1s1 gc2s2 
            flex items-center justify-center 
            br1-00"  
        data-use-new="true"
    >
        <img src={ghie} alt="" />
    </figure>
    <figure id="Ghip"
        className="gr2s1 gc3s1 
            flex items-center justify-center 
            br1-00"  
        data-use-new="true"
    >
        <img src={ghip} alt="" />
    </figure>
    <figure id="Ghis"
        className="gr2s1 gc2s1
            flex items-center justify-center 
            br1-00"  
        data-use-new="true"
    >
        <img src={ghis} alt="" />
    </figure>
</article>
  )
}

export default ProfessionalInstitutions