import React, { useRef } from 'react';

const Navbar = ({ setActiveComponent }) => {

    const about = useRef(null);
    const resume = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const listClick = (e) => {
        setActiveComponent(e.target.innerText.toLowerCase());
        about.current.classList.remove('text-orange');
        resume.current.classList.remove('text-orange');
        projects.current.classList.remove('text-orange');
        contact.current.classList.remove('text-orange');
        e.target.classList.add('text-orange');
    };

    return (
        <nav className='fixed bottom-0 left-0 w-full bg-gray2 border-jet rounded-t-2xl p-4 shadow-md z-10'>
            <ul className='flex justify-center items-center gap-7 md:gap-10'>
                <li className='cursor-pointer text-orange' ref={about} onClick={e => listClick(e)}>About</li>
                <li className='cursor-pointer' ref={resume} onClick={e => listClick(e)}>Resume</li>
                <li className='cursor-pointer' ref={projects} onClick={e => listClick(e)}>Projects</li>
                <li className='cursor-pointer' ref={contact} onClick={e => listClick(e)}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;