
import Bannier from './Bannier';
import About from './About';
import Service from './Service';
import ScrollAnimation from '@/components/common/ScrollAnimation';

const Home = () => {
  

  return (
    <div className='w-screen '>
      <div className='flex flex-col gap-16'>
        <div className='m-20 flex flex-col'>
          <p>hello this is franc</p>
          <p>i am not alone, i am with frankie, xze, kwaku, jef and product owner</p>
        </div>
         <ScrollAnimation><Bannier /></ScrollAnimation>
         <ScrollAnimation><About /></ScrollAnimation>
         <ScrollAnimation><Service/></ScrollAnimation>
      </div>
    </div>
  )
}

export default Home