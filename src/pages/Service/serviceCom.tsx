import { recentWorks, serviceTabs } from '@/constant'
import { MessageCircle } from 'lucide-react'
import  { useEffect, useRef } from 'react'
import { MdAddCard } from 'react-icons/md'

function serviceCom() {

    const slideRef = useRef<HTMLDivElement | null>(null)

    let index = 0

    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (!slideRef.current) return;

            index = (index + 1) % 3
            console.log(index) // nombre de slides
            slideRef.current.style.transform = `translateX(-${index * 30}%) `;

        }, 6000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className='w-screen flex flex-col items-center gap-20 space-y-20 my-20 px-10 lg:px-0'>
            <div className='xl:w-2/3 gl:w-4/5 w-full space-y-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='w-full space-y-4'>
                        <p className='text-orange-400'>Erdunt Is The Industry Leaders</p>
                        <div className='font-bold text-2xl'>Our Factory Produces
                            Reliable, Efficient, Safe
                            & Sustainable Products.
                        </div>
                    </div>
                    <div className='w-full space-y-4'>
                        <p className='font-semibold '>Consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna aliqua umt enim ad mini veniam quis trud exercitation sed ipsum dolor temps ullam laboris nisiut.</p>
                    </div>
                </div>

            </div>
            <div className=' lg:w-4/5 w-full space-y-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {serviceTabs.map((tab, i) => (
                        <div key={i} className='grid grid-cols-1 md:grid-cols-2 h-120 md:h-80 md:gap-15 shadow-2xl'>
                            <img src={tab.image} className='h-full  md:h-80 object-cover' alt="" />
                            <div className='w-full space-y-5 p-10'>
                                <div className='space-y-4'>
                                    <p className='font-bold text-xl '>{tab.title} </p>
                                    <p className='font-semibold md:hidden lg:flex'>{tab.label} </p>
                                </div>
                                <hr />
                                <button className='text-orange-400 under-line'>GetStarted</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full overflow-hidden flex  gap-20'>
                    <div ref={slideRef} className='flex h-100 items-end gap-15 transition-all duration-700'>
                        {[...recentWorks, ...recentWorks].map((work, i) => (
                            <div className='w-100 h-80 relative'>
                                <img src={work.image} className='w-full h-full' alt="" />
                                <div className='h-60 w-60 top-20 bg-white left-50 shadow-2xl absolute z-20 p-10'>
                                    <div>
                                        <p className='text-orange-400 font-semibold'>{work.categorie} </p>
                                        <p className='text-2xl font-bold'>{work.title} </p>
                                        <p >{work.content} </p>
                                    </div>
                                    <hr />
                                    <div className='flex gap-10'>
                                        <MdAddCard className='p-4' />
                                        Launch Date :{work.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='xl:w-2/3 gl:w-4/5 w-full grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 items-center gap-4 my-10 py-20 border-t-2 '>
                <div className='w-full px-10 flex items-center gap-4'>
                    < MessageCircle size={40} />
                    <div className=''>
                        <p className='font-bold text-2xl'>Subscribe Newsletter</p>
                        <p className='font-semibold'>At Erdunt, our goal is to generate production by experts</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input className='w-full h-20 p-4 border-2' type="text" placeholder='Email Address...' />
                    <button className='w-full h-20 p-4 bg-orange-400 '>contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default serviceCom