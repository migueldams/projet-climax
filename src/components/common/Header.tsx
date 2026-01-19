import { useEffect, useState } from 'react'
import logo from '@/assets/logo.png'
import { email, phone } from '@/constant/generalInfo'
import { NavLink, socialLinks } from '@/constant'
import { redirectToWhatsapp } from '@/services/redirectToWhatsapp';
import { redirectToTikTok } from '@/services/redirectToTiktok';
import { redirectToFacebook } from '@/services/redirectToFacebook';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function Header() {
  const location = useLocation()
  const [isNav, setIsNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY >= 180) {
        setIsNav(true)
      }
      if (window.scrollY <= 180) {
        setIsNav(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className='w-screen h-20 flex flex-col items-center justify-center relative'>
      <div className='w-full h-20 hidden md:flex flex-col items-center'>
        <div className='w-4/5 flex justify-center'>
          <div className='w-1/3'>
            <img src={logo} sizes='40' alt="" />
          </div>
          <div className='w-2/3 flex items-center gap-5 lg:gap-10 text-xl lg:text-2xl font-bold justify-end'>
            <p>{phone} </p>
            |
            <p>{email} </p>
          </div>
        </div>
      </div>

      <div className='w-2/3 h-20 hidden md:flex items-center bg-blue-950 backdrop-blur-3xl absolute z-20 top-20'>
        {/* nav Desktop */}
        <div className='hidden w-3/4 lg:px-30 md:flex justify-around items-center'>
          {NavLink.map((link, i) => (
            <Link key={i} className='text-md font-semibold transition-colors duration-500' to={link.path}>
              {location.pathname === link.path ? <div className='p-2 rounded-md bg-orange-400 transition-colors duration-500 text-white'><link.icon /></div> : <p className='transition-colors duration-500 text-white'>{link.Labal}</p>}
            </Link>

          ))}
        </div>
        <div className='flex justify-center md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} >{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {/* socialLink */}
        <div className='w-1/4 hidden md:flex justify-around '>
          {socialLinks.map((link, i) => (
            <button key={i} className='text-md font-semibold cursor-pointer' onClick={() => handelIconClick(link.label)}><link.icon size={20} /></button>
          ))}
        </div>
      </div>
      {/* nav2 */}
      <div className={`flex ${isNav ? 'fixed' : 'md:hidden'} w-full h-20 justify-center items-center z-400 top-0 left-0 bg-[rgba(251,251,251,0.68)] backdrop-blur-2xl transition-all duration-500`}>
        <div className='w-1/3 h-full items-center justify-center'>
          <img src={logo} sizes='40' className=' h-15' alt="" />
        </div>
        <div className='w-2/3 flex items-center'>
          <div className='hidden w-3/4 lg:px-20 md:flex justify-around items-center'>
            {NavLink.map((link, i) => (
              <Link key={i} className='text-md font-semibold transition-colors duration-500' to={link.path}>
                {location.pathname === link.path ? <div className='p-2 rounded-md bg-orange-400 transition-colors duration-500 text-white'><link.icon /></div> : <p className='transition-colors duration-500 '>{link.Labal}</p>}
              </Link>
            ))}
          </div>
        </div>
        <div className='w-1/3 h-full flex justify-center items-center bg-blue-950 text-white'>
          <div className='w-1/2 items-center hidden md:flex justify-around'>
            {socialLinks.map((link, i) => (
              <button key={i} className='text-md font-semibold cursor-pointer' onClick={() => handelIconClick(link.label)}><link.icon size={20} /></button>
            ))}
          </div>
          <div className='flex justify-center md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} >{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-10 w-full bg-white border-t absolute top-20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4 ml-4">
                {NavLink.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm transition-colors hover:text-primary ${location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.Labal}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      onClick={() => handelIconClick(social.label)}
                      className="text-primary hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </button>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}

export default Header