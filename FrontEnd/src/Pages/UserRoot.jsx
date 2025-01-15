import React from 'react'
import UserNavbar from '../Components/UserNavbar'
import {Outlet} from 'react-router-dom'
import UserFooter from '../Components/UserFooter'



function UserRoot() {
  return (
    <>
    <UserNavbar/>
    <Outlet/>
    <UserFooter/>
    </>
  )
}

export default UserRoot