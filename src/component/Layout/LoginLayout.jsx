import React from 'react'
import AuthPage from '../login/AuthPage'
import {Navigate, Outlet } from 'react-router-dom'

function LoginLayout() {
  return (
    <div className='flex justify-center items-center flex-col w-screen h-screen'>
      <Navigate to="login" replace />
      <AuthPage />
      <Outlet />
    </div>
  )
}

export default LoginLayout
