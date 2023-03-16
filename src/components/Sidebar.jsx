import { NavLink } from 'react-router-dom'
import { dataAlbumNav, dataUserNav, imgLogo } from '../constants/appConstant'
import { useState } from 'react'
import { RiCloseLine, RiMenuFill } from 'react-icons/ri'

// Constance pour générer les différents onglets de la sidebar a partir de appConstant
const NavLinks = ({ handleClick }) => {
    return (
        <>
            <div className='mt-10'>
                {/* On va mapper sur le tableau dataAlbumNav */}
                {
                    dataAlbumNav.map((item) => (
                        <NavLink
                            key={item.title}
                            to={item.path}
                            end
                            className={
                                'flex flex-row p-3 items-center justify-start font-medium text-sm text-white hover:bg-green_06'
                            }
                            onClick={() => handleClick && handleClick()}
                        >
                            <item.icon
                                className='w-6 h-6 mr-2'
                            />
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>
            <div className='mt-5'>
                {/* On va mapper sur le tableau dataUserNav */}
                {
                    dataUserNav.map((item) => (
                        <NavLink
                            key={item.title}
                            to={item.path}
                            end
                            className={
                                'flex flex-row p-3 items-center justify-start font-medium text-sm text-white hover:bg-green_06'
                            }
                            onClick={() => handleClick && handleClick()}
                        >
                            <item.icon
                                className='w-6 h-6 mr-2'
                            />
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>
        </>
    )
}

const Sidebar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <div
                className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-black'
            >
                <img
                    src={imgLogo}
                    alt="Logo"
                    className='w-full h-14 object-contain'
                />
                {/* Constante de la sidebar */}
                <NavLinks />
            </div>

            {/* Gestion des icones pour ouvrir / fermer le menu pour le mobile */}
            <div
                className='absolute md:hidden block top-6 right-3'
            >
                {
                    mobileMenu ? (
                        <RiCloseLine
                            className='w-6 h-6 text-white mr-2'
                            onClick={() => setMobileMenu(false)
                            }
                        />
                    ) : (
                        <RiMenuFill
                            className='w-6 h-6 text-white mr-2'
                            onClick={() => setMobileMenu(true)
                            }
                        />
                    )
                }
            </div>
            <div
                className={
                    `z-20 absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#1d1d1d] 
                    backdrop-blur-lg p-6 md:hidden smooth-transition ${mobileMenu ? 'left-0' : '-left-full'}`
                }
            >
                <img
                    src={imgLogo}
                    alt="Logo"
                    className='w-full h-14 object-contain'
                />
                <NavLinks handleClick={() => setMobileMenu(false)} />
            </div>
        </>
    )
}

export default Sidebar