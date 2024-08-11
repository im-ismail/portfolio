import React, { useState } from 'react';
import logoImage from '/images/my-avatar.png';

const Info = () => {

    const [stretchAside, setStretchAside] = useState(false);

    return (
        <aside className='bg-dark1 p-4 border-jet rounded-2xl shadow-md relative lg:max-h-full lg:w-full lg:max-w-sm lg:overflow-auto no-scrollbar'>
            <div className='flex items-center gap-4'>
                <figure className='bg-gray rounded-2xl'>
                    <img src={logoImage} alt="logo" className='w-20' />
                </figure>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl text-white ml-3'>Ismail Sk</h1>
                    <p className='bg-gray1 px-3 py-1 rounded-lg text-sm'>Full Stack Developer</p>
                </div>
                <button className='absolute -top-px -right-px px-3 py-1 border-jet rounded-tr-2xl rounded-bl-2xl bg-onyx hover:bg-yellow lg:hidden' onClick={() => setStretchAside(!stretchAside)}>
                    <i className={`fa-solid fa-chevron-down text-orange ${stretchAside ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}></i>
                </button>
            </div>
            <div className={`max-lg:overflow-hidden ${stretchAside ? 'max-h-[800px]' : 'max-h-0'} transition-height duration-500 lg:max-h-full`}>
                <div className="w-full my-4 h-px bg-jet"></div>
                <ul className='flex flex-col gap-5'>
                    <li className='flex gap-4 items-center'>
                        <div className='bg-onyx px-3 py-2 rounded-xl'>
                            <i className="fa-regular fa-envelope text-xl text-orange"></i>
                        </div>
                        <div>
                            <p className='text-sm'>EMAIL</p>
                            <a href={`mailto:${import.meta.env.VITE_APP_CONTACT_EMAIL}`} className='text-white'>{import.meta.env.VITE_APP_CONTACT_EMAIL}</a>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <div className='bg-onyx px-3 py-2 rounded-xl'>
                            <i className="fa-solid fa-location-dot text-xl text-orange"></i>
                        </div>
                        <div>
                            <p className='text-sm'>LOCATION</p>
                            <address className='text-white'>{import.meta.env.VITE_APP_CONTACT_ADDRESS}</address>
                        </div>
                    </li>
                </ul>
                <div className="w-full my-4 h-px bg-jet"></div>
                <ul className='flex gap-4 py-2'>
                    <li className='bg-onyx hover:bg-yellow rounded-xl'>
                        <a href={import.meta.env.VITE_APP_GITHUB_URL} target='_blank'>
                            <i className="fa-brands fa-github text-3xl p-2"></i>
                        </a>
                    </li>
                    <li className='bg-onyx hover:bg-yellow rounded-xl'>
                        <a href={import.meta.env.VITE_APP_LINKEDIN_URL} target='_blank'>
                            <i className="fa-brands fa-linkedin text-3xl p-2"></i>
                        </a>
                    </li>
                    <li className='bg-onyx hover:bg-yellow rounded-xl'>
                        <a href={import.meta.env.VITE_APP_FACEBOOK_URL} target='_blank'>
                            <i className="fa-brands fa-facebook text-3xl p-2"></i>
                        </a>
                    </li>
                    <li className='bg-onyx hover:bg-yellow rounded-xl'>
                        <a href={import.meta.env.VITE_APP_INSTAGRAM_URL} target='_blank'>
                            <i className="fa-brands fa-instagram text-3xl p-2"></i>
                        </a>
                    </li>
                    <li className='bg-onyx hover:bg-yellow rounded-xl'>
                        <a href={import.meta.env.VITE_APP_X_URL} target='_blank'>
                            <i className="fa-brands fa-x-twitter text-3xl p-2"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Info;