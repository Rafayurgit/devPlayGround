import React from 'react'
import Lottie from 'lottie-react';
import loader from "../assets/animation/loader.json"




function Loader() {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-slate-950 ' >
        <div className='w-40 h-40'>
            <Lottie animationData={loader} loop={true} />
        </div>
    </div>
  )
}

export default Loader
