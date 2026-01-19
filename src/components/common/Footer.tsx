
import logo from '@/assets/logo.png'
import { NavLink, socialLinks } from '@/constant'
import { redirectToWhatsapp } from '@/services/redirectToWhatsapp';
import { redirectToTikTok } from '@/services/redirectToTiktok';
import { redirectToFacebook } from '@/services/redirectToFacebook';
import { Link } from 'react-router-dom';
import { email, phone } from '@/constant/generalInfo';
import { Mail, Phone } from 'lucide-react';

function Footer() {

  const handelIconClick = (icon: string) => {
    switch (true) {
      case icon == socialLinks[0].label:
        redirectToWhatsapp();
        break;
      case icon == socialLinks[1].label:
        redirectToTikTok();
        break;
      case icon == socialLinks[2].label:
        redirectToFacebook();
        break;
    }
  };

  return (
    <div className='w-full md:h-120 flex flex-col md:flex-row  border-t-2 '>
      <div className='w-full md:w-1/3 h-full flex flex-col justify-center items-center py-10 md:py-0  bg-gray-100'>
        <div className='w-2/3 flex flex-col gap-10'>
          <div className='w-full  '><img src={logo} alt="" /></div>
          <div className=' font-semibold  '>Significantly pushed und the frugal lemur one and meretricious lucrative inside before swept magnificently expand our Industries via. Lorem ipsum dolor sit amet adipscing.</div>
          <div className='grid grid-cols-2 w-full items-center'>
            <p>Connect Whith Us</p>
            <div className='flex gap-2 '>
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handelIconClick(social.label)}
                  className="text-primary rounded-full p-2 bg-gray-300 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-2/3 h-full flex flex-col justify-between  bg-blue-950' >
        <div className='flex flex-col md:flex-row gap-10  md:h-100 items-center py-10 pl-10'>
          <div className='flex flex-col w-full h-full md:w-1/3 gap-8'>
            <h1 className='font-bold text-2xl text-white'>Link</h1>
            <div className='flex flex-col gap-2'>
              {NavLink.map((link, i) => (
                <Link key={i} className='text-md font-semibold transition-colors duration-500' to={link.path}>
                  <p className='transition-colors duration-500 text-white'>{link.Labal}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-col w-full h-full md:w-1/3 gap-8'>
            <h1 className='font-bold text-2xl text-white'>Contact Us</h1>
            <div className='flex flex-col gap-4'>
                <div  className='text-xl text-white font-semibold transition-colors duration-500' >
                  <p className='transition-colors duration-500 flex gap-4'><Mail /> {email}</p>
                </div>
                <div  className='text-xl text-white font-semibold transition-colors duration-500' >
                  <p className='transition-colors duration-500 flex gap-4'><Phone />{phone}</p>
                </div>
            </div>
          </div>
        </div>
        <div className='font-semibold h-20 flex items-center border-t-2 px-10'>
          © 2021 Erdunt. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer