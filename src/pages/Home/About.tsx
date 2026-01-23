
import { ArrowRight } from 'lucide-react'
import { services, serviceTabs } from '@/constant'
import ban1 from '@/assets/ban2.jpg'
import ban2 from '@/assets/ban2.jpeg'
import { Link } from 'react-router-dom'

function About() {

    return (
        <div className='w-screen flex flex-col items-center gap-20 space-y-20'>
            <div className='lg:w-4/5 w-full px-10 lg:px-0 space-y-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='w-full space-y-4'>
                        <p className='text-orange-400'>Climax tech SA est L’expertise qui refroidit, la performance qui dure</p>
                        <div className='font-bold text-2xl'>Nous intervenons dans l’installation, la maintenance et le dépannage des systèmes de climatisation et de froid (résidentiel, commercial et industriel).
                        </div>
                    </div>
                    <div className='w-full space-y-4'>
                        <p className='text-sm'>
                            Nous plaçons la qualité, la fiabilité et la satisfaction client au cœur de chaque intervention.
                            Nos solutions en froid et climatisation sont conçues pour offrir performance, durabilité et efficacité énergétique.
                        </p>
                        <ul className='font-semibold flex flex-col gap-2'>
                            <p className='flex items-center gap-4'>
                                <ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' />
                                Solutions de climatisation et de froid performantes et durables
                            </p>
                            <p className='flex items-center gap-4'>
                                <ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' />
                                Interventions rapides avec équipements et technologies modernes
                            </p>
                            <p className='flex items-center gap-4'>
                                <ArrowRight size={8} className='p-2 bg-orange-400 text-white rounded-full' />
                                Respect des normes, sécurité et efficacité énergétique
                            </p>
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
                    <img className='absolute w-100 h-100 -right-10 max-[600px]:-right-5 lg:-right-20 object-cover -top-10 hover:rotate-12 transition-all duration-500 rounded-2xl ' src={ban2} alt="" />
                    <img className='absolute w-100 h-100 z-10 -right-50 max-[600px]:-right-35 object-cover lg:-right-80 hover:-rotate-12 transition-all duration-500 rounded-2xl' src={ban1} alt="" />
                </div>

                <div className='w-full lg:w-1/2 mt-104 lg:mt-0 px-10 md:px-0 md:ml-20 space-x-8'>
                    <div className='space-x-4'>
                        <p className='text-orange-400'>Climax-Tech, expert du froid et de la climatisation</p>
                        <p className='font-bold text-2xl'>
                            Des solutions innovantes pour un confort maîtrisé
                        </p>
                        <p className='text-xl lg:text-2xl'>
                            Installation, maintenance et dépannage de systèmes de climatisation et de froid adaptés à vos besoins.
                        </p>
                    </div>

                    <div className='space-y-4 mt-4'>
                        <div className='flex items-center gap-4'>
                            <div className='space-y-4 w-full py-4 border-t border-gray-300'>
                                <p className='font-semibold'>Climatisation & Froid commercial</p>
                                <p>
                                    Solutions performantes pour bureaux, commerces et habitations, garantissant confort thermique et efficacité énergétique.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='space-y-4 w-full py-4 border-t border-gray-300 border-b '>
                                <p className='font-semibold'>Maintenance & Dépannage</p>
                                <p>
                                    Interventions rapides, entretien préventif et assistance technique pour assurer la durabilité et la fiabilité de vos équipements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-blue-950 flex justify-center py-20 relative '>
                <div className='w-4/5 flex  flex-col xl:flex-row gap-12'>
                    <div className='w-full xl:w-1/3'>
                        <div className='text-white space-y-4 my-10'>
                            <p className='text-orange-400'>Climax-Tech, spécialiste du froid et de la climatisation</p>
                            <p className='font-bold text-2xl'>
                                Nos solutions
                                thermiques
                            </p>
                            <p className='text-sm'>
                                Nous proposons des solutions complètes en climatisation et froid commercial ou industriel, alliant performance, économie d’énergie et fiabilité pour répondre aux besoins des particuliers et des entreprises.
                            </p>
                        </div>

                        <div className='text-white space-y-4 border-r-8 border-t-8 border-orange-400 p-10'>
                            <p className='font-bold text-2xl'>
                                Innovation & expertise
                                au service de votre confort
                            </p>
                            <Link to='/contact#form' className='w-full flex items-center justify-center font-bold h-20 p-4 border-2 border-white cursor-pointer'>
                                Demarrer un projet
                            </Link>
                        </div>

                        <img
                            className='absolute hidden lg:flex top-130 left-40 z-40  h-80 w-100'
                            sizes='40'
                            src="https://mehedi.asiandevelopers.com/demo/erdunt/assets/images/shape/factory.png"
                            alt=""
                        />
                    </div>

                    <div className='w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2  gap-8 text-white'>
                        {
                            serviceTabs.map((tab, i) => (
                                <div key={i} className='w-full h-full space-y-4'>
                                    <img className='w-full h-50 object-cover' src={tab.image} alt="" />
                                    <p className='font-bold'>{tab.title}</p>
                                    <p>{tab.content}</p>
                                    <button className='underline text-orange-400 flex items-center gap-4 cursor-pointer'><ArrowRight size={20} /> Read more</button>
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