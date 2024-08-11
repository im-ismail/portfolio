import React from 'react';
import Info from '../components/Info';
import '../custom.css';
import Main from '../components/Main';

const Home = () => {
    return (
        <main className='h-[100dvh] overflow-auto no-scrollbar bg-dark p-4 text-gray-300 flex flex-col gap-6 transition-opacity duration-500 lg:flex-row'>
            <Info />
            <Main />
        </main>
    )
}

export default Home;