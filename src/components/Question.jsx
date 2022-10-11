import React from 'react';
import Option from './Option';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({questionItem ,idx}) => {
    const {correctAnswer,options,question} = questionItem ;
   

    let questionText = question.replace( /(<([^>]+)>)/ig, ''); ;
    let questionText2 = questionText.replace(/\&nbsp;/g,' ');

    const handleCorrectAnswer = (option) => {
        console.log(option ,correctAnswer)
        if(option === correctAnswer){
            toast.success("Correct Answer!",{autoClose:800});
        }
        else{
            toast.error("Oops! Wrong Answer, please try again.",{autoClose: 800})
        }
    }


    return (
        <div className='shadow-lg bg-white p-4 rounded-lg mb-4'>
           <div>
               <p className='text-xl font-semibold'>Quiz {idx+1} : {questionText2}</p> 
           </div>
           <div id='checkbox' className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-3 mt-10'>
                {
                    options.map((option,idx) => <Option key={idx} option={option} handleCorrectAnswer={handleCorrectAnswer} question={question}></Option>)
                }          
           </div>
        </div>
    );
};

export default Question;