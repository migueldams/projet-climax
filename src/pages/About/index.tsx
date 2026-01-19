
import Bannier from './Bannier'
import AboutCom from './AboutCom'
import ScrollAnimation from '@/components/common/ScrollAnimation'

function About() {
  return (
    <div className='w-screen'>
      <ScrollAnimation><Bannier /></ScrollAnimation> 
      <ScrollAnimation><AboutCom /></ScrollAnimation> 
      
    </div>
  )
}

export default About