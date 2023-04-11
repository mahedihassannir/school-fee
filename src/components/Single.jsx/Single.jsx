import React from 'react';

const Single = ({ data, btn }) => {

    let { strMealThumb, strArea, strCategory, strYoutube } = data
    return (
        <div>

            <div className='w-[400px] h-[500px] rounded-lg relative shadow-lg border-2'>
                <div>
                    <img className='p-2 h-[240px] w-full' src={strMealThumb} alt="" />
                </div>

                <div className='mt-5 text-center'>
                    <p>{strArea}</p>
                    <p className='py-3'>{strCategory}</p>
                    <p>{strYoutube}</p>
                </div>

                <div>
                    <button onClick={() => btn(data)} className='text-white font-bold py-3 px-5 w-full bg-orange-700 absolute bottom-0 '>add to cart now</button>
                </div>

            </div>


        </div>
    );
};

export default Single;