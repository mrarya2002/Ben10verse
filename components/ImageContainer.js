import Image from 'next/image'
import React from 'react'
import like from '@/public/heart.svg'
import copy from '@/public/copy.svg'
import download from '@/public/download.svg'

const ImageContainer = (props) => {
    const {photo,id} = props
    const widthHeightRatio = photo.height/photo.width
    const galleryHeight = Math.ceil(250*widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight/10)+1
  return (
    <div key={id} className='md:w-[250px] justify-self-center'
        style={{gridRow:`span ${photoSpans}`}}
    >
      <div className='rounded-xl overflow-hidden group w-full relative'>
        <Image width={250} sizes='250px' height={galleryHeight}  src={photo.img} alt='hello images' />
        <div className="absolute backdrop-brightness-50 top-0 left-0 opacity-0 group-hover:opacity-100 w-full h-full p-3 flex flex-col justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <a className='px-3 py-2 rounded-lg bg-white'>
            <Image src={copy} width={20} alt='Copy'/>
            </a>
            <a className='px-3 py-2 rounded-lg bg-white'>
            <Image src={like} width={20} alt='like'/>
            </a>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className='w-full text-md truncate'>{photo.name}</p>
            <a className='px-3 py-2 rounded-lg bg-white'>
              <Image src={download} width={20} alt='download'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageContainer
