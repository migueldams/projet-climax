
import aboutImg from '@/assets/about.jpg'

function Bannier() {
    return (
        <div className='w-full h-100'>
            <div className='relative'>
                <img src={aboutImg} className='w-full h-100 object-cover relative z-1' alt="" />
                <div className='absolute w-full h-100 z-10 top-0 bg-[rgba(0,0,0,0.5)] '></div>
                <div className='absolute w-full h-100 z-18 top-0 px-20 flex flex-col justify-center gap-10'>
                    <div className='font-bold text-4xl text-white'>
                        About Us
                    </div>
                    <div className='w-50 bg-white h-20 font-semibold p-2 flex justify-center gap-4 items-center '>
                       <p>Home </p>  |  <p>About</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannier