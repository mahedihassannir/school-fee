import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faContactBook, faContactCard, faHome, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div>
            <nav className=' px-20 flex justify-between items-center h-20 bg-gray-800 text-white'>
                <h1>digital work</h1>
                <ul className='flex '>
                    <Link className='pl-5' to="/">Home <span>
                        <FontAwesomeIcon icon={faHome} />

                    </span></Link>
                    <Link className='pl-5' to="/About">About <span>
                        <FontAwesomeIcon icon={faContactCard} />

                    </span></Link>
                    <Link className='pl-5' to="/Free Food">
                        Free Food <span>
                            <FontAwesomeIcon icon={faUtensilSpoon} />

                        </span> </Link>
                    <Link className='pl-5' to="/Contact">Contact <span>
                        <FontAwesomeIcon icon={faContactBook} />

                    </span></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;