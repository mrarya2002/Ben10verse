"use client"
import { useState,useEffect } from 'react'
import { getAllCharacters } from '@/lib/character'
import { getAllAliens } from '@/lib/character'
import { getAllVillains } from '@/lib/character'
import Header from '@/components/Header'
import Cardwrapper from '@/components/Cardwrapper'

export default function Home() {
  const [maincs,setMaincs] = useState([])
  const [villains,setVillains] = useState([])
  const [aliens,setAliens] = useState([])

  const fetchData = async ()=>{
    const main = await getAllCharacters()
    const villain = await getAllVillains()
    const aliens = await getAllAliens()

    setMaincs(main.data)
    setAliens(aliens.data)
    setVillains(villain.data)
  }

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <>
    <Header/>
    <Cardwrapper content={"Main Characters"} data={maincs}/>
    <Cardwrapper content={"Ben 10 Aliens"} data={aliens}/>
    <Cardwrapper content={"Ben 10 Villains"} data={villains}/>
    </>
  )
}
