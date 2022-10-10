import { Button, Card } from 'flowbite-react';
import React from 'react';

const Topic = ({topic}) => {
    const {id,name,logo,total} = topic ;
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
                <p>Total number of Quiz: {total}</p>
                <Button className="w-1/2" color="purple">
                Start Practice
            </Button>
            </Card>
        </div>
    );
};

export default Topic;