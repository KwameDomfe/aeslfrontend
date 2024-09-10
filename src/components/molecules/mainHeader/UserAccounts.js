import React from 'react'
import { Link } from 'react-router-dom'

const UserAccounts = () => {
  return (
    <div className="
        f0-75"
    >
        <div className="bg-gray br0-25 pa0-50 mh0-50 ttu tc ">
            <Link to="/accounts/login"
                className="white-90 b "
            >
                User Account
            </Link>
        </div> 
    </div>
  )
}

export default UserAccounts