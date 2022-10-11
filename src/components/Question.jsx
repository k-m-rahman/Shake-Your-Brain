import React from 'react';
import Option from './Option';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';


const Question = ({questionItem ,idx}) => {
    const {correctAnswer,options,question} = questionItem ;
   

    let questionText = question.replace( /(<([^>]+)>)/ig, ''); ;
    let questionText2 = questionText.replace(/\&nbsp;/g,' ');
    
    const handleCorrectAnswer = (option) => {
        if(option === correctAnswer){
            toast.success("Correct Answer!",{autoClose:800});
        }
        else{
            toast.error(`Wrong Answer, Please Try Again.`,{autoClose: 800})
        }
    }

    const showCorrectAnswer = () => {
        swal('Correct Answer :',
        `${correctAnswer}`,{button: "Close" , dangerMode: true});
    }


    return (
        <div className='shadow-lg bg-white p-4 rounded-lg mb-4'>
           <div className='grid grid-cols-1 md:grid-cols-12  p-3'>
               <p className='md:col-span-11 px-5 text-xl font-semibold'>Quiz {idx+1} : {questionText2}</p> 

               <button onClick={showCorrectAnswer} className='mt-4 md:mt-0  w-min mx-auto'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
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