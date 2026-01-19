import React from 'react'
import { useLocation } from "react-router-dom";
import Bannier from './Bannier';
import About from './About';
import Service from './Service';
import ScrollAnimation from '@/components/common/ScrollAnimation';

const Home = () => {
  const location = useLocation()

  return (
    <div className='w-screen '>
      <div>
         <ScrollAnimation><Bannier /></ScrollAnimation>
         <ScrollAnimation><About /></ScrollAnimation>
         <ScrollAnimation><Service/></ScrollAnimation>
      </div>
    </div>
  )
}

export default Home