import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function AuthPage() {


  return (
    <>

<div className="flex justify-center items-center space-x-4 rounded-md shadow-md p-6 bg-white w-96  py-1">

  <NavLink to="/auth/login" className={({ isActive }) =>
  `block rounded-md px-6 py-3 ${
    isActive ? "bg-orange-700 text-white font-bold shadow-lg" : "text-gray-700"
  } border-b border-gray-100 lg:border-0`
}>
    <button>
        LOG IN
      </button>
  </NavLink>

  <NavLink to="/auth/sign-up"  className={({ isActive }) =>
  `block rounded-md px-6 py-3 ${
    isActive ? "bg-orange-700 text-white font-bold shadow-lg" : "text-gray-700"
  } border-b border-gray-100 lg:border-0`
}>
      <button>
        SIGN UP
      </button>
  </NavLink>
</div>
</>

  )
}

export default AuthPage
