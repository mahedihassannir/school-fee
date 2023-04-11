import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import './food.css'
import Single from '../Single.jsx/Single';
import Cart from '../Cart.jsx/Cart';


import Swal from 'sweetalert2'


const Food = () => {
    let [api, setAPi] = useState([])
    useEffect(() => {


        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish&fbclid=IwAR1qe8Q8XDAeRX79KJOZrF_QakdNzidPt-HstbXgegNFkikUfWAN1MYTjkI
        `
        fetch(url)
            .then(res => res.json())
            .then(data => setAPi(data.meals))

    }, [])


    let [btn, setBtn] = useState([])

    let Mahedi = (res) => {
        let remaning = [...btn, res]
        setBtn(remaning)

        Swal.fire(
            'product added!',
            'You clicked the button!',
            'success'
        )


    }


    let removebtn = (idMeal) => {
        let remaning2 = btn.filter(ts => ts.idMeal !== idMeal)

        setBtn(remaning2)


    }


    return (
        <div className='gridm'>
            <div className='grid md:grid-cols-3 gap-5'>

                {
                    api.map(res => <Single

                        key={res.idMeal}

                        data={res}

                        btn={Mahedi}

                    ></Single>)

                }
            </div>
            <div>
                <Cart

                    btn={btn}
                    removebtn={removebtn}
                ></Cart>
            </div>
        </div>
    );
};

export default Food;