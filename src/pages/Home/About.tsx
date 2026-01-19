
import { ArrowRight } from 'lucide-react'
import { services, serviceTabs } from '@/constant'
import ban1 from '@/assets/ban1.jpg'
import ban2 from '@/assets/ban2.jpg'

function About() {

    return (
        <div className='w-screen flex flex-col items-center gap-20 space-y-20'>
            <div className='xl:w-2/3 lg:w-4/5 w-full px-10 lg:px-0 space-y-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='w-full space-y-4'>
                        <p className='text-orange-400'>Erdunt Is The Industry Leaders</p>
                        <div className='font-bold text-2xl'>Our Factory Produces
                            Reliable, Efficient, Safe
                            & Sustainable Products.
                        </div>
                    </div>
                    <div className='w-full space-y-4'>
                        <p className='text-sm'>Incididunt ut labore et dolore magna aliqua. At enim ipsum dnim veniam, quis nos trud exercitation dolor ullamco laboris nisi ut aliquip ex ea comaody consequat duisaute irure dolor in reprehenderit in voluptate velit.</p>
                        <ul className='font-semibold flex flex-col gap-2'>
                            <p className='flex items-center gap-4'><ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' /> Leading industrial solutions with best machinery</p>
                            <p className='flex items-center gap-4'><ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' />Leading industrial solutions with best machinery</p>
                            <p className='flex items-center gap-4'><ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' />Leading industrial solutions with best machinery</p>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8'>
                    {services.map((serv, ind) => (
                        <div className="group relative h-full w-full lg:w-full   hover:bg-[rgba(0,115,255,0.7)] flex-wrap  bg-gray-50 gap-4 p-10">
                            <div className="relative z-20 flex flex-col gap-4">
                                <div>
                                    <span className=" text-orange-400 text-2xl font-bold">
                                        0{ind + 1}
                                    </span>
                                </div>
                                <serv.logo />
                                <p className="text-black group-hover:text-white font-semibold text-xl">
                                    {serv.title}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className=' gl:w-4/5 grid grid-cols-1 lg:grid-cols-2 w-full space-x-10'>
                <div className='w-1/2 relative'>
                    <img className='absolute w-100 h-100 -right-10 lg:-right-20 -top-10 hover:rotate-12 transition-all duration-500 rounded-2xl ' src={ban2} alt="" />
                    <img className='absolute w-100 h-100 z-10 -right-50 lg:-right-80 hover:-rotate-12 transition-all duration-500 rounded-2xl' src={ban1} alt="" />
                </div>
                <div className='w-full lg:w-1/2 mt-100 lg:mt-0 px-10 md:px-0 md:ml-20  space-x-8'>
                    <div className='space-x-4'>
                        <p className='text-orange-400'>Erdunt Is The Industry Leaders</p>
                        <p className='font-bold text-2xl'>Join The New Innovation
                            With Technical Workforce</p>
                        <p className='text-xl lg:text-2xl'>Better Sharing State-of-the-Art Facilities & Equipments For Building Refine Energy Unit.</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-4'>
                            <div className='w-20 h-20 rounded-full bg-gray-300'></div>
                            <div className='space-y-4 w-2/3'>
                                <p>Petroleum Industry</p>
                                <p>Incididunt ut labore et dolore magna aliqua dnim veniam, quis nos trud exercitation dolor ullamco laboris nisi ut aliquip.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-20 h-20 rounded-full bg-gray-300'></div>
                            <div className='space-y-4 w-2/3'>
                                <p>Petroleum Industry</p>
                                <p>Incididunt ut labore et dolore magna aliqua dnim veniam, quis nos trud exercitation dolor ullamco laboris nisi ut aliquip.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-blue-950 flex justify-center py-20 relative '>
                <div className='w-4/5 flex  flex-col xl:flex-row gap-12'>
                    <div className='w-full xl:w-1/3'>
                        <div className='text-white space-y-4 my-10'>
                            <p className='text-orange-400'>Erdunt Is The Industry Leaders</p>
                            <p className='font-bold text-2xl'>Market Solutions
                                We Provide</p>
                            <p className='text-sm'>Incididunt ut labore et dolore magna aliqua enim trud exercitation ullamco laboris nis ut aliquip ex aute rure dolor in reprehenderit velit culpa quisd labore dolore magna aliqua.</p>
                        </div>
                        <div className='text-white space-y-4 border-r-8 border-t-8 border-orange-400 p-10' >
                            <p className='font-bold text-2xl'>Core Innovation & Strength
                                For Manufacturing Units</p>
                            <button className='w-full flex items-center justify-center font-bold h-20 p-4 border-2 border-white'>Get Started</button>
                        </div>
                        <img className='absolute hidden lg:flex top-130 left-20 z-40 ' src="https://mehedi.asiandevelopers.com/demo/erdunt/assets/images/shape/factory.png" alt="" />
                    </div>
                    <div className='w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                        {
                            serviceTabs.map((tab, i)=>(
                                <div className='w-full h-80 space-y-4'>
                                    <img className='w-full h-50 object-cover' src={tab.image} alt="" />
                                    <p className='font-bold'>{tab.title}</p>
                                    <p>{tab.content}</p>
                                    <button className='underline text-orange-400 flex items-center gap-4 cursor-pointer'><ArrowRight size={20}/> Read more</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About