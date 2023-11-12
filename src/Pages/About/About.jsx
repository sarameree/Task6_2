import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar'
import './About.css'

export const About = () => {
  return (
    <div>
        <NavBar/>
        <div className='d-flex align-items-center justify-content-center divAbout'>
          <h1 className='text-white'>ABOUT</h1>
        </div>
    </div>
  )
}
