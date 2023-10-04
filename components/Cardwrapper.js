"use client"
import React from 'react'
import Image from 'next/image'

const Cardwrapper = (props) => {
    const {content,data} = props
  return (
    <div className="container mx-auto px-2 mt-6">
            <h1 className="text-4xl font-bold my-3">{content}</h1>
            <div className="wrapper grid grid-cols-2 md:grid-cols-5 gap-6">
                {data?.map((ele,index)=>{
                    return (
                        <div key={index} className="card w-full p-2 md:p-4 bg-[#000]">
                    <div className="patti">
                        <h1 className="text-lg font-bold text-[#02a302] tracking-widest">OMNITRIX</h1>
                    </div>
                    <div className="img w-full h-48 md:h-64 relative">
                        <Image className="w-full h-full" layout='fill' src={ele.img} alt="character image" />
                    </div>
                    <div className="content">
                        <p className="text-center text-md font-bold mt-2">{ele.name}</p>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
  )
}

export default Cardwrapper
