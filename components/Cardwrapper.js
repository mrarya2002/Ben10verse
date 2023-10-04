"use client"
import React from 'react'
import Image from 'next/image'

const Cardwrapper = (props) => {
    const {content,data} = props
  return (
    <div class="container mx-auto px-2 mt-6">
            <h1 class="text-4xl font-bold my-3">{content}</h1>
            <div class="wrapper grid grid-cols-2 md:grid-cols-5 gap-6">
                {data?.map((ele,index)=>{
                    return (
                        <div key={index} class="card w-full p-2 md:p-4 bg-[#000]">
                    <div class="patti">
                        <h1 class="text-lg font-bold text-[#02a302] tracking-widest">OMNITRIX</h1>
                    </div>
                    <div class="img w-full h-48 md:h-64 relative">
                        <Image class="w-full h-full" layout='fill' src={ele.img} alt="character image" />
                    </div>
                    <div class="content">
                        <p class="text-center text-md font-bold mt-2">{ele.name}</p>
                    </div>
                </div>
                    )
                })}
                {/* <div class="card w-full p-2 md:p-4 bg-[#000]">
                    <div class="patti">
                        <h1 class="text-lg font-bold text-[#02a302] tracking-widest">OMNITRIX</h1>
                    </div>
                    <div class="img w-full h-48 md:h-64">
                        <Image class="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNZnLvHldo7nAVIFdMVNTCgSThFam-Em7bQ&usqp=CAU" alt="" />
                    </div>
                    <div class="content">
                        <p class="text-center text-md font-bold mt-2">Kevin Levin</p>
                    </div>
                </div> */}
            </div>
        </div>
  )
}

export default Cardwrapper
