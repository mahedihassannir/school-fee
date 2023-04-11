import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <section className='flex items-center h-screen'>
                <div className='w-1/2 pl-20'>
                    <h4 className='text-4xl font-bold'>My name is Mahedi Hassan
                    </h4>
                    <p className=' py-5 w-11/12'><span className='text-orange-500'>Lorem ipsum dolor</span> sit, amet consectetur adipisicing elit. Quia, maiores laborum voluptatibus sequi dolor perspiciatis illo, natus repellat sint numquam tempore rem officiis ut ipsam possimus, nobis doloremque quas at similique voluptates asperiores quisquam! A, voluptatum explicabo!</p>
                    <div>
                        <button className='py-3 px-7 bg-gray-700 rounded-lg text-white  '>read more</button>
                    </div>
                </div>
                <div className='w-1/2'>

                </div>
            </section>


        </div>
    );
};

export default Banner;