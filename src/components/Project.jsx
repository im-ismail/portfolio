import React, { useState } from 'react';

const Project = ({ project }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = project.images;

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-slate-500 text-white shadow-lg rounded-lg overflow-hidden">
            <div className="pt-2 px-4 pb-3">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-200 text-blue-800 text-xs font-semibold rounded-lg px-2 py-0.5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative">
                <div className='flex justify-center items-center'>
                    <img
                        src={images[currentImage]}
                        alt={project.name}
                        className="max-w-full max-h-full"
                    />
                </div>
                {images.length > 1 && <>
                    <button
                        onClick={prevImage}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 text-2xl"
                    >
                        ◀
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 text-2xl"
                    >
                        ▶
                    </button>
                </>}
            </div>
            <div className="py-2 px-4">
                <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
            <div className="px-4 pb-4 pt-2 flex justify-between">
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    Live Link
                </a>
                <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Source Code
                </a>
            </div>
        </div>
    );
};

export default Project;
