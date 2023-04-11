import React from 'react';


const Cart = ({ btn, removebtn }) => {

    return (
        <div className='text-center'>
            <h1 className=''>{btn.length}</h1>

            {
                btn.map(res2 => <p className='' key={res2.idMeal}>{res2.idMeal} <span className='pl-4' ><button onClick={() => removebtn(res2.idMeal)} className='text-2xl'>x</button></span> </p>)
            }
        </div>
    );
};

export default Cart;