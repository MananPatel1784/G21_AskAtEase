//This is the right part component of the main page 

import React from 'react';
import mobileapp from '../Components/Assets/mobileicon.jpg';
import quotaofquotes from '../Components/Assets/quotaofquotes.jpg';
import artartist from '../Components/Assets/artartist.jpeg';
import friedick from '../Components/Assets/friedick.jpeg';
import stockmarket from '../Components/Assets/stockmarket.jpeg';
import architecturalworld from '../Components/Assets/architecturalworld.jpeg';



const spaces = [
    {
        imgSrc: mobileapp,
        title: "Mobile App Programmer",
        link: "https://example.com/mobile-app-programmer",
        description: "The Best Mobile App Development company"
    },
    {
        imgSrc: quotaofquotes,
        title: "Quota of Quotes",
        link: "https://example.com/quota-of-quotes",
        description: "Daily dosage of unforgettable lines"
    },
    {
        imgSrc: artartist,
        title: "Art & Artist",
        link: "https://example.com/art-and-artist",
        description: "A space related to creating, practicing and exploring art..."
    },
    {
        imgSrc: friedick,
        title: "Friedrich Nietzsche",
        link: "https://example.com/friedrich-nietzsche",
        description: "A space dedicated to the great works of Nietzsche..."
    },
    {
        imgSrc: stockmarket,
        title: "Stock Market Strategies",
        link: "https://example.com/stock-market-strategies",
        description: "Everything about investing in stock..."
    },
    {
        imgSrc: architecturalworld,
        title: "Architectural World",
        link: "https://example.com/architectural-world",
        description: "All about civil architecture..."
    },
];

function SpacesToFollow() {
    return (
        <div className="bg-gray-300" style={{ width: "100%" }}>
            <div className="right_values bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] rounded-lg shadow">
                <h2 className="text-2xl font-bold p-4 text-button border-b-2 border-gray-400 text-center">
                    Spaces To Follow
                </h2>

                {spaces.map((space, index) => (
                    <section
                        key={index}
                        className={`p-4 flex items-start space-x-4 ${index < spaces.length - 1 ? 'border-b-2 border-white' : ''}`}
                    >
                        <img src={space.imgSrc} alt={space.title} className="h-14 w-14 rounded-full" />
                        <div>
                            <a href={space.link} className="font-bold hover:underline cursor-pointer">
                                {space.title}
                            </a>
                            <p className="text-black opacity-60 font-bold">
                                {space.description}
                            </p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default SpacesToFollow;
