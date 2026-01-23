
import { bannier } from '@/constant'
import { redirectToWhatsapp } from '@/services/redirectToWhatsapp';
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';


function Bannier() {
    const [fondH, setFondH] = useState(0)

    useEffect(() => {
        const SlideIntervale = setInterval(() => {
            setFondH((prev) => (prev === bannier.length - 1 ? 1 : prev + 1));
        }, 10000);

        return () => clearInterval(SlideIntervale);
    }, []);


    return (
        <div className='w-full h-screen max-[600px]:h-[400px] overflow-hidden relative'>
            <div className='h-full'>
                <div className="w-full h-full absolute z-4 left-0 top-0 bg-[rgba(0,0,0,0.6)] "></div>
                {bannier.map((ban, i) => (
                    <div key={i} className={`${i !== fondH && "hidden"}  h-full`} >
                        <img src={ban.fond} className='w-screen h-full object-cover' alt="" />
                    </div>
                ))
                }
                <div className='absolute z-30 flex flex-col justify-center items-center w-full text-center gap-10 top-80 text-white max-[600px]:top-0 max-[600px]:h-full max-[600px]:gap-8'>
                    <div  className='w-1/2 max-[600px]:w-[80%] flex flex-col gap-10'>
                        <p className='text-xl font-semibold'>{bannier[0].title} </p>
                        <p className='text-3xl md:text-5xl font-semibold'>{bannier[0].content} </p>
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