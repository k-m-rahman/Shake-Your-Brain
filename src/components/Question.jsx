
import React from 'react';
import Option from './Option';


const Question = ({questionItem ,idx}) => {
    const {correctAnswer,options,question} = questionItem ;
   

    let questionText = question.replace( /(<([^>]+)>)/ig, ''); ;
    let questionText2 = questionText.replace(/\&nbsp;/g,' ');




    return (
        <div className='shadow-lg bg-white p-4 rounded-lg mb-4'>
           <div>
               <p className='text-xl font-semibold'>Quiz {idx+1} : {questionText2}</p> 
           </div>
           <div id='checkbox' className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-3'>
                {
                    options.map((option,idx) => <Option key={idx} option={option}></Option>)
                }
             
           </div>
        </div>
    );
};

export default Question;