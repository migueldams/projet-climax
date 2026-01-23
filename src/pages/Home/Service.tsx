import { comment, recentWorks } from '@/constant'
import { useEffect, useRef, useState } from 'react'
import { MdAddCard } from 'react-icons/md'
import globe from '@/assets/globe.jpg'
import { MessageCircle } from 'lucide-react'


function Service() {

    const slideRef = useRef<HTMLDivElement | null>(null)
    const commentRef = useRef<HTMLDivElement | null>(null)
    const slidesRef = useRef<HTMLDivElement | null>(null)

    let index = 0
    const [indexCom, setIndexCom] = useState(0);
    const totalSlides = 3;

    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (!slidesRef.current) return;

            index = (index + 1) % 3
            console.log(index) // nombre de slides
            slidesRef.current.style.transform = `translateX(-${index * 8}%) `;

        }, 6000);

        return () => clearInterval(slideInterval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexCom(prev => (prev + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Déplacement du carousel
        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(-${indexCom * 15}%)`;
        }
        if (commentRef.current) {
            commentRef.current.style.transform = `translateX(-${indexCom * 33.4}%)`
        }
        // Gestion des indicateurs

    }, [indexCom]);

    return (
        <div className=' flex flex-col items-center w-screen  mt-20'>
            <div className='xl:w-2/3 gl:w-4/5 w-full flex flex-col items-center py-20 space-y-20'>
                <div className='w-2/3 md:w-1/2 text-center'>
                    <p className='font-bold text-orange-400'>Nos réalisations Climax Tech SA</p>
                    <p className='font-bold text-3xl'>Projets récents en froid et climatisation</p>
                    <p className=''>
                        Découvrez quelques-unes de nos installations et interventions récentes,
                        réalisées avec expertise, fiabilité et respect des normes professionnelles.
                    </p>
                </div>
                <div className='w-full overflow-hidden flex  gap-20'>
                    <div ref={slidesRef} className='flex h-100 items-end gap-15 transition-all duration-700'>
                        {[...recentWorks, ...recentWorks].map((work, i) => (
                            <div key={i} className='w-95 h-80 relative'>
                                <img src={work.image} className='w-full h-full' alt="" />
                                <div className='h-60 w-60 top-20 bg-white left-30 md:left-50 shadow-2xs shadow-amber-600 absolute z-20 p-10'>
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
            <div className='xl:w-2/3 gl:w-4/5 w-full flex flex-col items-center relative my-20 py-10'>
                <div className='absolute  w-full flex justify-center md:h-150'>
                    <img src={globe} className='relative z-1 top-0 left-0  lg:w-3/4 h-150' alt="" />
                </div>
                <div className='relative flex flex-col  w-full items-center z-20 space-y-20' >
                    <div className='w-full text-center'>
                        <p className='font-bold text-orange-400'>What climax tech Partners Saying</p>
                        <p className='font-bold text-4xl'>Read Client’s Reviews</p>
                    </div>
                    <div className='w-full flex justify-center gap-20'>
                        <div className='flex w-full flex-col justify-center items-center gap-20'>
                            <div className='flex justify-center w-[300px] overflow-hidden '>
                                <div ref={slideRef} className='flex gap-8 pl-30   transition-all duration-700'>
                                    {[...comment, ...comment].map((work, i) => (
                                        <div className='w-20 h-20 relative'>
                                            <img key={i} src={work.image} className='w-20 h-20 rounded-full' alt="" />
                                            <div className={`${i === (indexCom + 2) && 'hidden'} w-20 h-20 absolute rounded-full top-0 z-20 bg-[rgba(253,124,18,0.54)] backdrop-blur transition-all duration-700`}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex gap-20 overflow-hidden w-full '>
                                <div ref={commentRef} className='flex relative -left-30 sm:-left-25 md:left-0 lg:-left-10 xl:-left-30 2xl:left-0 gap-20 transition-all duration-700' >
                                    {comment.map((work, i) => (
                                        <div key={i} className='space-y-8 w-150 sm:w-200 px-40 text-center lg:w-300 flex flex-col items-center '>
                                            <p className='sm:text-2xl font-bold'>{work.comment} </p>
                                            <p className='text-blue-700  font-semibold'>{work.name} </p>
                                            <p className=''>--{work.poste} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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

export default Service