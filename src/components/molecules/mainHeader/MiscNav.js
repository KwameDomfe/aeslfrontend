import React from 'react'
import { Link } from 'react-router-dom'

const MiscNav = () => {
    return (
        <ul id="m__horizontal-list"
            className="flex items-center justify-center 
                pv0-50 mb1-50
                bb
                f0-75 white-90"
        >
            <li className="">
                <Link to="/"
                    className="white-90"
                >
                Legal</Link>
            </li>
            <li className="ml0-50">
                <Link to="/"
                    className="white-90"
                >
                Policies</Link>
            </li>
            <li className="ml0-50">
                <Link to="/"
                    className="white-90"
                >
                Privacy</Link>
            </li>
            <li className="ml0-50">
                <Link to="/"
                    className="white-90"
                >
                Guidelines</Link>
            </li>
        </ul> 
    )
}

export default MiscNav