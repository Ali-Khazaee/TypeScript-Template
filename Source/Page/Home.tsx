import React from "react";

import StarComponent from "../Component/Home/Star";

const StarMap: React.ReactNode[] = [ ];

for (let K = 0; K < 512; K++) {
    StarMap.push(<StarComponent key={ K } X={ Math.random() * document.body.scrollWidth } Y={ Math.random() * document.body.scrollHeight } Size={ Math.random() * 2.6 + 1 } Delay= { Math.random() * 4 } />);
}

let AA =
{


};

export default function Home()
{
    return (
        <div className='h-screen w-screen bg-black'>
            <div className="bg-red-200 absolute">
                {
                    ...StarMap
                }
            </div>
            <div className='m-auto flex flex-col  text-white rounded-lg bg-blue-950'>
                <p className='text-center text-4xl p-14'>Good deeds, Good words, Good thoughts</p>
                <p className='text-center text-4xl p-14'>Start your journey ❤️</p>
            </div>
        </div>
    );
}
