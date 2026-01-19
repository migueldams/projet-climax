
import { bannier } from '@/constant'
import { redirectToWhatsapp } from '@/services/redirectToWhatsapp';
import { div } from 'framer-motion/client';
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';


function Bannier() {
    const [isScroll, setIsScroll] = useState<Boolean>(false)
    const [fondH, setFondH] = useState(0)

    useEffect(() => {
        const SlideIntervale = setInterval(() => {
            setFondH((prev) => (prev === bannier.length - 1 ? 1 : prev + 1));
        }, 10000);

        return () => clearInterval(SlideIntervale);
    }, []);

    useEffect(() => {

        const SlideIntervale = setInterval(() => {
            setIsScroll(true)
        }, 8000)

        return clearInterval(SlideIntervale)
    })

    return (
        <div className='w-full h-screen overflow-hidden relative '>
            <div>
                <div className="w-full h-[800px] absolute z-4 left-0 top-0 bg-[rgba(0,0,0,0.6)] "></div>
                {bannier.map((ban, i) => (
                    <div key={i} className={`${i !== fondH && "hidden"}  `} >
                        <img src={ban.fond} className='w-screen h-[800px] object-cover' alt="" />
                    </div>
                ))
                }
                <div className='absolute z-30 flex flex-col justify-center items-center w-full text-center gap-10 top-80 text-white'>
                    <div  className='w-1/2 flex flex-col gap-10'>
                        <p className='md:text-xl font-semibold'>{bannier[0].title} </p>
                        <p className='text-2xl md:text-5xl font-semibold'>{bannier[0].content} </p>
                    </div>
                    <div className="flex items-center gap-10">
                        <button
                            className="w-45 bg-green-600 h-12 text-white flex justify-evenly items-center font-semibold rounded-sm"
                            onClick={redirectToWhatsapp}
                        >
                            Contact Us <FaWhatsapp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannier