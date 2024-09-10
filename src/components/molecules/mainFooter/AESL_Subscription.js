import React from 'react'

const AESL_Subscription = () => {
    return (
    <form class="h-100" 
        action=""
    >
        <fieldset class="flex flex-column justify-between 
            h-100 pv1-00"
        >
            <legend class="ph0-50">
                AESL NEWSLETTER
            </legend>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, nulla aspernatur sequi ipsa tempora odit in, accusantium aperiam vel fugit eligendi blanditiis laborum maxime assumenda. <br /> <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, nulla aspernatur sequi ipsa tempora odit in, accusantium aperiam vel fugit eligendi blanditiis laborum maxime assumenda.
            </p>
            <label for="email"
                class="dib mb1-00 w-100">Email:
                <input id="email" 
                    class="w-100 pa0-50 mt1-00" 
                    name="email"
                    type="text"
                    placeholder="Enter Your Email"
                    autocomplete="true"
                />
            </label>
            <label for="submit"
                class=""
            >
                <input id="submit"
                    name="submit"
                    class="pa0-50 br0-25 b--none"
                    type="submit"
                    value="SUBSCRIBE"
                />
            </label>
        </fieldset>
    </form>
  )
}

export default AESL_Subscription