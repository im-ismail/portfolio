import React from 'react';

const About = () => {
    return (
        <section className='py-5 px-4 bg-dark2 border-jet rounded-2xl shadow-md flex flex-col gap-7'>
            <div>
                <h2 className='text-2xl mb-6 relative bt-line text-white font-semibold'>About Me</h2>
                <p>Hello, I'm Ismail Sk, an economics graduate student with a passion for web development and a strong foundation in economics and data analysis. I bridge the worlds of economics and technology to create meaningful solutions and insights.</p>
            </div>
            <div>
                <h2 className='text-xl mb-6 relative bt-line text-white font-semibold'>My Journey</h2>
                <p>My journey in economics started with my studies at Krishnath College, where I developed a deep understanding of economic theories, data analysis, and research methodologies. As I delved deeper into the field, I realized the potential of technology to enhance economic analysis and decision-making.</p>
                <br />
                <p>Parallel to my economics journey, I ventured into the world of web development. What began as a curiosity quickly evolved into a full-blown passion. I honed my skills in front-end and back-end development, becoming a proficient full-stack web developer.</p>
            </div>
            <div>
                <h2 className='text-xl mb-6 relative bt-line text-white font-semibold'>Bringing Economics and Web Development Together</h2>
                <p>Today, I bring my unique blend of skills to the table. I leverage data-driven insights and economic principles to develop web applications that solve real-world problems. Whether it's building interactive data visualizations, optimizing user experiences, or creating e-commerce platforms, I thrive on the intersection of economics and technology.</p>
            </div>
            <div>
                <h2 className='text-xl mb-6 relative bt-line text-white font-semibold'>Education and Skills</h2>
                <p>I hold a Honours degree in Economics from University of Kalyani. In addition to my economics background, my technical expertise includes:</p>
                <ul className='ml-3'>
                    <li>
                        <span className='text-indigo-500 text-lg font-semibold'>Front-End Development: </span>
                        <span>Proficiency in HTML, CSS, JavaScript, and modern front-end frameworks.</span>
                    </li>
                    <li>
                        <span className='text-indigo-500 text-lg font-semibold'>State Management: </span>
                        <span>Expertise in state management using Redux, ensuring smooth data flow in web applications.</span>
                    </li>
                    <li>
                        <span className='text-indigo-500 text-lg font-semibold'>Back-End Development: </span>
                        <span>Strong skills in server-side scripting, databases, and API development.</span>
                    </li>
                    <li>
                        <span className='text-indigo-500 text-lg font-semibold'>Version Control: </span>
                        <span>Proficiency in Git and GitHub for collaborative development and version control.</span>
                    </li>
                    <li>
                        <span className='text-indigo-500 text-lg font-semibold'>Data Analysis: </span>
                        <span>Experience in data cleaning, visualization, and statistical analysis.</span>
                    </li>
                    <li>
                        <span className='text-indigo-500 text-lg font-semibold'>Problem Solving: </span>
                        <span>A knack for solving complex problems through code and analytics.</span>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl mb-6 relative bt-line text-white font-semibold'>Interests</h2>
                <p>Outside of work, I enjoy playing cricket and exploring new destinations through travel. These experiences not only refresh my mind but also inspire creativity.</p>
            </div>
            <div>
                <h2 className='text-xl mb-6 relative bt-line text-white font-semibold'>Let's Connect</h2>
                <p>I'm always eager to explore new opportunities and collaborate on exciting projects.</p>
                <p>Whether you have an exciting project in mind, want to discuss research opportunities, or simply want to connect, please feel free to reach out to me at <a href={`mailto:${import.meta.env.VITE_APP_CONTACT_EMAIL}`} className='text-blue-500'>{import.meta.env.VITE_APP_CONTACT_EMAIL}</a></p>
                <br />
                <p>
                    Thank you for visiting my portfolio, and I look forward to connecting with you!
                </p>
            </div>
        </section>
    )
}

export default About;