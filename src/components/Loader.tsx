import React, { ReactElement, useState } from 'react'
import Lottie from 'lottie-react'
import LoaderData from '../data/Loading.json'

function Loader({ children }: { children: ReactElement }) {
    const [isComplete, setComplete] = useState<boolean>(false);

    const handleAnimationComplete = () => setComplete(true);
    return (
        <>
            {isComplete ? children : 
            <div className='h-screen w-screen justify-center flex items-center'>
                <Lottie animationData={LoaderData} loop={false} onComplete={handleAnimationComplete} style={{height: 250, width: 250, justifyContent: 'center', alignItems: 'center'}}/>
            </div>
            }
        </>
    )
}

export default Loader