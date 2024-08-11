import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => {

    const [activeComponent, setActiveComponent] = useState('about');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'about':
                return <About />;
                break;
            case 'resume':
                return <Resume />;
                break;
            case 'projects':
                return <Projects />
                break;
            case 'contact':
                return <Contact />;
                break;
            default: return null;
                break;
        };
    };

    return (
        <div className='pb-14 lg:max-h-full lg:overflow-auto no-scrollbar'>
            <Navbar setActiveComponent={setActiveComponent} />
            {renderComponent()}
        </div>
    )
}

export default Main