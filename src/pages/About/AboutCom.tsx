import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { AboutI, comment } from '@/constant'
import { MdHomeRepairService } from 'react-icons/md'
import globe from '@/assets/globe.jpg'
import climfond from '@/assets/climfond.jpg'

function AboutCom() {

    const useEbout = useRef(null)
    const [indexCom, setIndexCom] = useState(0);
    const totalSlides = 3;
    const slideRef = useRef<HTMLDivElement | null>(null)
    const commentRef = useRef<HTMLDivElement | null>(null)

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

    }, [indexCom]);

    return (
        <div className='w-screen flex flex-col items-center gap-20 space-y-20 my-20'>
            <div className='px-10 md:px-0 xl:w-2/3 gl:w-4/5 w-full space-y-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='w-full space-y-4'>
                        <p className='text-orange-400'>Climax-Tech, leader en froid et climatisation</p>
                        <div className='font-bold text-2xl'>
                            Nous fournissons des solutions fiables, performantes,
                            sécurisées et durables pour tous vos besoins en froid et climatisation.
                        </div>
                    </div>
                    <div className='w-full space-y-4'>
                        <p className='text-sm'>
                            De l’installation à la maintenance, nous garantissons un service professionnel, rapide et conforme aux normes pour un confort optimal.
                        </p>
                        <ul className='font-semibold flex flex-col gap-2'>
                            <p className='flex items-center gap-4'>
                                <ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' />
                                Installation et mise en service de systèmes climatiques et frigorifiques
                            </p>
                            <p className='flex items-center gap-4'>
                                <ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' />
                                Maintenance préventive et dépannage rapide pour garantir durabilité et performance
                            </p>
                            <p className='flex items-center gap-4'>
                                <ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' />
                                Solutions sur mesure pour particuliers, commerces et industries
                            </p>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-full shadow-2xl flex flex-col md:grid md:grid-cols-3 justify-center items-center'>
                {AboutI.map((Ab, i) => (
                    <div key={i} ref={useEbout} className='relative w-full hover:text-white max-[600px]:text-white group transition-all duration-500 h-fit border border-gray-300'>
                        <div className='absolute w-full h-120 z-10 min-[600px]:hidden group-hover:block top-0 bg-[rgba(0,0,0,0.5)] '></div>
                        <div className='absolute z-20 p-12 space-y-8 h-full w-full flex flex-col justify-center items-center'>
                            <div className='flex gap-4 items-center'>
                                <Ab.icon size={80} />
                                <p className='font-bold text-3xl'>{Ab.title} </p>
                            </div>
                            <div className='space-y-10 font-semibold'>
                                {Ab.content}
                            </div>
                        </div>
                        <img className={`${i === 1 ? '' : 'min-[600px]:rotate-y-90'} w-full h-120  object-cover transition-all duration-500  group-hover:rotate-y-0 z-1`} src={Ab.image} alt="" />
                    </div>
                ))}
            </div>
            <div className='xl:w-2/3 gl:w-4/5 w-full space-y-20 px-10 md:px-0'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='w-full relative'>
                        <img className="w-full h-120 object-cover" src={climfond} alt="" />
                        <div className='bg-orange-400 absolute top-20 -left-8 text-white '><MdHomeRepairService size={80} /></div>
                    </div>
                    <div className='w-full flex flex-col gap-8'>
                        <p className='text-orange-400 font-semibold'>Froid & Climatisation Professionnelle</p>
                        <p className='font-bold text-4xl'>
                            Climax-Tech : Solutions Innovantes pour le Confort Thermique
                            <b className='text-blue-800'> Depuis 2015</b>
                        </p>
                        <p className='text-2xl font-semibold'>
                            Installation, maintenance et dépannage de systèmes de climatisation et de froid fiables et performants.
                        </p>
                        <p className='text-xl'>
                            Nos experts garantissent des interventions rapides et efficaces pour particuliers, commerces et industries, avec un souci constant de qualité et de sécurité.
                        </p>
                        <button className='text-xl text-orange-400 w-40 underline'>En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className='xl:w-2/3 gl:w-4/5 w-full flex flex-col items-center relative my-20 py-10'>
                <div className='absolute  w-full flex justify-center md:h-150'>
                    <img src={globe} className='relative z-1 top-0 left-0  lg:w-3/4 h-150' alt="" />
                </div>
                <div className='relative flex flex-col  w-full items-center z-20 space-y-20' >
                    <div className='w-full text-center'>
                        <p className='font-bold text-orange-400'>Qu'es ce que nos partenaire pense</p>
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
                                <div ref={commentRef} className='flex relative -left-20 sm:-left-25 md:left-0 lg:-left-10 xl:-left-30 2xl:left-0 gap-20 transition-all duration-700' >
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


        </div>
    )
}

export default AboutCom