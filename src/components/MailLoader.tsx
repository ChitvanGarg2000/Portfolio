import React from 'react'
import {toast, TypeOptions, ToastPosition } from 'react-toastify';
import Lottie from 'lottie-react';
import mailAnimation from '../data/contact-email.json'

interface ToastProp{
    type: TypeOptions,
    message: string,
    position: ToastPosition,
}

const MailLoader: React.FC<ToastProp> = ({type, message, position}) => {

    const notify = () => toast(message, {
        type,
        position,
    })

    return (
        <div className='h-screen w-screen flex justify-center items-center bg-white fixed top-0 left-0'>
            <Lottie animationData={mailAnimation} onComplete={notify} style={{width:320}}/>
        </div>
    )
}

export default MailLoader