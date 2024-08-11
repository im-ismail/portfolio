import React from 'react';

const Contact = () => {
    return (
        <section className='py-5 px-4 bg-dark2 border-jet rounded-2xl shadow-md flex flex-col gap-7 w-full'>
            <div>
                <h2 className='text-2xl mb-6 relative bt-line text-white font-semibold'>Contact</h2>
                <p>Feel free to reach out for collaborations or inquiries. Whether you have a project in mind, need assistance, or just want to connect, I'd love to hear from you. I'm always open to new opportunities and enjoy meeting new people.</p>
            </div>

            <main className="flex flex-col items-center w-full p-4">
                <section className="w-full max-w-4xl mb-8">
                    <h2 className="text-xl font-bold mb-2">Contact Information</h2>
                    <p>Email: <a href={`mailto:${import.meta.env.VITE_APP_CONTACT_EMAIL}`} className='text-white'>{import.meta.env.VITE_APP_CONTACT_EMAIL}</a></p>
                    <p>Address: <span className='text-white'>{import.meta.env.VITE_APP_CONTACT_ADDRESS}</span></p>
                </section>

                <section className="w-full max-w-4xl mb-8">
                    <h2 className="text-xl font-bold mb-2">Social Media Handles</h2>
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
                </section>

                <section className="w-full max-w-4xl">
                    <h2 className="text-xl font-bold mb-4">Find Me</h2>
                    <div className='overflow-hidden max-w-full w-[500px] h-[500px]'>
                        <div id="embed-ded-map-canvas" className='max-w-full w-full h-full'>
                            <iframe
                                className='w-full h-full border-none'
                                src={import.meta.env.VITE_APP_MAP_URL}
                                loading='lazy'
                                allowFullScreen
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white w-full py-4 text-center">
                <p>&copy; 2024 Ismail Sk. All rights reserved.</p>
            </footer>
        </section>
    )
}

export default Contact;