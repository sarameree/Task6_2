import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar'
import './Home.css'
import { Hero } from '../../Components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CustomersLoveMobiles } from '../../Sections/CustomersLoveMobiles/CustomersLoveMobiles';
import { Footer } from '../../Components/Footer/Footer';
import { InnovativeQualities } from '../../Sections/InnovativeQualities/InnovativeQualities';
import { EssentialDifferent } from '../../Sections/EssentialDifferent/EssentialDifferent';
import { PossPerfPower } from '../../Sections/PossPerfPower/PossPerfPower';
import { NewArrivals } from '../../Sections/NewArrivals/NewArrivals';


export const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <EssentialDifferent/>
      <PossPerfPower/>
      <InnovativeQualities/>
      <NewArrivals/>
      <CustomersLoveMobiles/>
      <Footer/>
    </div>
  )
}
