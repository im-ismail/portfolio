import React from 'react';

const Resume = () => {
    return (
        <section className='py-5 px-4 bg-dark2 border-jet rounded-2xl shadow-md flex flex-col gap-7'>
            <h2 className='text-2xl mb-6 relative bt-line text-white font-semibold'>Resume</h2>
            <div>
                <div className='flex gap-2 items-center'>
                    <div className='py-2 px-3 bg-onyx rounded-xl'><i className="fa-solid fa-book-open text-orange"></i></div>
                    <h3 className='font-semibold text-lg text-white'>Education</h3>
                </div>
                <ol>
                    <li className='ml-12 flex flex-col gap-1 my-4 relative'>
                        <h4 className='font-semibold text-white left-line'>Bachelor of Economics (Honours)</h4>
                        <p className='text-orange'><span>Krishnath College, </span><span>2020 - 2023</span></p>
                        <p>I earned my Bachelor's degree with Honours in Economics from Krishnath College, where I deepened my understanding of economic principles and honed strong analytical and critical thinking skills. This education has profoundly shaped my perspective on economic dynamics, inspiring both my academic and professional pursuits.</p>
                    </li>
                    <li className='ml-12 flex flex-col gap-1 my-4 relative'>
                        <h4 className='font-semibold text-white left-line'>Self-Taught Full Stack Developer</h4>
                        <p className='text-orange'>2021 - Present</p>
                        <p>I'm a self-taught full-stack developer, passionate about mastering both front-end and back-end technologies. My journey demonstrates my dedication to continuous learning and my ability to deliver innovative solutions.</p>
                    </li>
                    <li className='ml-12 flex flex-col gap-1 my-4 relative'>
                        <h4 className='font-semibold text-white left-line'>Higher Secondary Education</h4>
                        <p className='text-orange'><span>Srikantabati P.S.S. Sikshaniketan, </span><span>2018 - 2020</span></p>
                        <p>During my higher secondary education, I continued to build a strong academic foundation. This phase of my educational journey further nurtured my curiosity and commitment to learning, providing the essential stepping stones for my subsequent academic pursuits.</p>
                    </li>
                    <li className='ml-12 flex flex-col gap-1 my-4 relative'>
                        <h4 className='font-semibold text-white left-line'>Secondary Education</h4>
                        <p className='text-orange'><span>Saidpur U.N. High School, </span><span>2012 - 2018</span></p>
                        <p>My secondary education provided the fundamental building blocks of my academic journey. These formative years instilled discipline and a thirst for knowledge, setting the early stage for my educational and personal development.</p>
                    </li>
                </ol>
            </div>
            <div>
                <div className='flex gap-2 items-center'>
                    <div className='py-2 px-3 bg-onyx rounded-xl'><i className="fa-solid fa-certificate text-orange"></i></div>
                    <h3 className='font-semibold text-lg text-white'>Certifications</h3>
                </div>
                <ol>
                    <li className='ml-12 flex flex-col gap-1 my-4 relative'>
                        <h4 className='font-semibold text-white left-line'>Master HTML and CSS by building real world projects</h4>
                        <p><span className='text-white'>Instructors </span><span className='text-orange font-semibold'>Anisul Islam</span></p>
                        <p>Completed on 2023</p>
                        <button className='w-max bg-blue-700 text-white py-1 px-3 rounded-lg hover:bg-blue-600'><a href="https://www.udemy.com/certificate/UC-d49219de-09e8-4cc7-a59c-851322cd37a2/" target='_blank'>View Certificate</a></button>
                    </li>
                    <li className='ml-12 flex flex-col gap-1 my-4 relative'>
                        <h4 className='font-semibold text-white left-line'>Master Git and Github - Beginner to Expert</h4>
                        <p><span className='text-white'>Instructors </span><span className='text-orange font-semibold'>Anisul Islam</span></p>
                        <p>Completed on 2023</p>
                        <button className='w-max bg-blue-700 text-white py-1 px-3 rounded-lg hover:bg-blue-600'><a href="https://www.udemy.com/certificate/UC-0877ca97-1388-4434-85ff-2c38b2a4e3ce/" target='_blank'>View Certificate</a></button>
                    </li>
                </ol>
            </div>
            <div>
                <h2 className='text-xl mb-6 relative bt-line text-white font-semibold'>My Skills</h2>
                <ul className='bg-onyx px-7 py-5 rounded-2xl shadow-md flex flex-col gap-5'>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>HTML</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[90%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>CSS</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[80%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>JavaScript</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[85%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>Bootstrap</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[75%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>Tailwind CSS</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[85%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>React</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[85%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>Redux Toolkit</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[80%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>Git & Github</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[75%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>Node.js</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[80%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>Express</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[85%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                    <li className='flex flex-col gap-1'>
                        <h3 className='text-lg text-white font-semibold'>MongoDB</h3>
                        <div className='w-full h-3 bg bg-jet rounded-xl'>
                            <div className='w-[75%] h-full bg-orange rounded-xl'></div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;