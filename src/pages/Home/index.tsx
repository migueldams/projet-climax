
import Bannier from './Bannier';
import About from './About';
import Service from './Service';
import ScrollAnimation from '@/components/common/ScrollAnimation';

const Home = () => {
  

  return (
    <div className='w-screen '>
      <div className='flex flex-col gap-16'>
         <ScrollAnimation><Bannier /></ScrollAnimation>
         <ScrollAnimation><About /></ScrollAnimation>
         <ScrollAnimation><Service/></ScrollAnimation>
      </div>
    </div>
  )
}

export default Home