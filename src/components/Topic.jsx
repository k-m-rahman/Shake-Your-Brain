import {  Card } from 'flowbite-react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo,total} = topic ;

    const navigate = useNavigate() ;

    const handleNavigate = () => {
        navigate(`/topic/${id}`);
    }
    return (
        <div className="max-w-sm">
            <Card
                // imgAlt={name}
                // imgSrc={logo}
            >   
                <img src={logo} className="rounded-lg shadow-md bg-slate-200" alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
                </h5>
                <p className='font-medium'>Total number of Quiz: {total}</p>
                <button onClick={handleNavigate} className="w-full bg-indigo-400 hover:bg-indigo-500 font-semibold  py-2 rounded-lg mx-auto flex gap-2 justify-center items-center" >
                    <span>Start Practice</span>
                 <FontAwesomeIcon icon={faArrowRight} />
            </button>
            </Card>
        </div>
    );
};

export default Topic;