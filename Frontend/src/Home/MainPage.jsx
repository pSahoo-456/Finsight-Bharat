import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import { useAuthStore } from '../contentStore/authStore';

function MainPage() {
  const { user } = useAuthStore();
  // return !user ? (
  //   <LandingPage/>
  // ) : (
  //  <>
  //     {/* Navv */}
  //     <NavBar/>
  //     <Outlet/>
  //   </>
  // )
  return(
    <>
       {/* Navv */}
       <NavBar/>
       <Outlet/>
     </>
  )
}

export default MainPage
