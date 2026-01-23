

function ContactCom() {
    return (
        <div className='w-screen flex flex-col items-center gap-20 space-y-20 my-20'>
            <div className='lg:w-4/5 px-10 lg:px-0  space-y-20  grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-8 flex flex-col items w-full'>
                    <p className='text-orange-400 font-semibold'>Climax-Tech, Leader en Froid et Climatisation</p>
                    <p className='font-bold text-4xl'>
                        Spécialistes des systèmes de froid et climatisation
                        utilisant les dernières technologies
                    </p>
                    <p>
                        Contactez-nous pour toute demande ou visitez nos bureaux pour découvrir nos solutions en froid et climatisation.
                    </p>
                    <div className='w-full flex justify-col'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3971.3890062484675!2d10.39412107584507!3d5.509129334117449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzAnMzIuOSJOIDEwwrAyMyc0OC4xIkU!5e0!3m2!1sfr!2scm!4v1768645085779!5m2!1sfr!2scm"
                            width="500"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                <div id="form" className='w-full shadow-2xl h-200 p-10 '>
                    <form className="flex flex-col gap-8 h-full ">
                        <input type="text" className='w-full h-10 border px-5 border-gray-500 ' placeholder='Your Name..' />
                        <div className='grid grid-cols-2'>
                            <input type="text" className='w-full h-10 border border-gray-500 px-5' placeholder='Email..' />
                            <input type="text" className='w-full h-10 border border-gray-500 px-5' placeholder='Phone..' />
                        </div>
                        <input type="text" className='w-full h-10 border border-gray-500 px-5' placeholder='subject..' />
                        <input type="text-area" className='w-full h-80 border border-gray-500 px-5' placeholder='your Message..' />
                        <button className='bg-orange-400 text-white p-4 cursor-pointer'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactCom