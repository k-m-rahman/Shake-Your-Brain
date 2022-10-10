import { Carousel } from 'flowbite-react';
import React from 'react';

const Slider = () => {
    return (
        <div className="h-56  sm:h-96 rounded-none mx-2 lg:mx-8 mt-4">
            <Carousel slideInterval={5000}>
                <div className="h-full bg-no-repeat text-white bg-cover bg-[url('https://i.ibb.co/3yVqH4g/1.jpg')] flex justify-center items-center">
                    <h2 className='text-5xl font-bold bg-gray-500/[.3] p-5'>Stay Consistent In your Studying </h2>
                    
                </div>

                <div className="h-full bg-no-repeat bg-cover bg-[url('https://i.ibb.co/7W2Cmyc/2.jpg')] flex justify-center items-center text-white">
                    <h2 className='text-5xl font-bold bg-gray-500/[.3] p-5'>Make Each Day A Little Better Tan Before </h2>
                </div>


                <div className="h-full bg-no-repeat bg-cover bg-[url('https://i.ibb.co/47rtsdb/3.jpg')] lg:bg-[url('https://i.ibb.co/GcB8zV2/3-2.jpg')] flex justify-center items-center text-white">
                    
                    <h2 className='text-5xl font-bold bg-gray-500/[.3] p-5'>Don’t Be Afraid To Make Mistakes </h2>
                    
                </div>
             
               
             
              
{/*                 
                <img
                src="https://i.ibb.co/r0wt4bB/3.jpg"
                alt="..."
                /> */}
                
            </Carousel>
        </div>
    );
};

export default Slider;