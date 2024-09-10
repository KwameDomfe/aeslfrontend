import React from 'react'

const PoweredBy = () => {
  return (
    <div id = "m__poweredby"
    class="flex items-center justify-center flex-column 
        white 
        f0-75"
>
    <small className="mb0-50">powered by:</small>
    <a href="https://www.kdadesign.tech"
        className="white-90"
    >
        <div class="flex">
            <small class="">
                kda design technologies
            </small>
            <small class="ml0-50">
                &copy; {new Date().getFullYear()};
            </small>
        </div>
    </a>
</div> 
  )
}

export default PoweredBy