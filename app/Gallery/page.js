"use client"
import { useEffect,useState } from "react";
import { getAllgallery } from "@/lib/character";
import ImageContainer from "@/components/ImageContainer";
import Header from "@/components/Header";

const page = () => {
  const [visibleData, setVisibleData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [mdata,setData] = useState([])
  const itemsPerPage = 10;

  const fetchData = async ()=>{
    const data = await getAllgallery()
    setData(data.data)
  }


  const loadMoreData = () => {
    const newStartIndex = startIndex + itemsPerPage;
    const newVisibleData = mdata.slice(startIndex, newStartIndex);
    setVisibleData([...visibleData, ...newVisibleData]);
    setStartIndex(newStartIndex);
  };

  
  useEffect(() => {
    fetchData()
    loadMoreData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleData]);
  return (
    <>
    <Header/>
    <div className="banner">
        <div className="max-w-[700px] p-3">
            <h1 className="text-3xl my-4">The best free png Ben 10 photos, royalty images shared by creators</h1>
            <div className="flex w-100 h-12">
                <input className="w-full h-100 outline-0 border-0 font-bold rounded-l-lg text-black ps-3" type="text" placeholder="search here..." />
                <a className="rounded-r-lg px-3 h-full bg-white flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search text-black font-bold" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                </a>
            </div>
        </div>
    </div>
     <div className="mt-6 container mx-auto min-h-screen">
      <h1 className="text-2xl font-bold text-center">Image Gallery</h1>
      <section className="px-2 my-3 grid-cols-1 grid md:grid-cols-4 auto-rows-[10px]">
        {visibleData?.map((images)=>{
            return (
                <ImageContainer photo={images} />
            )
        })}
      </section>
    </div>
    </>
  );
};

export default page;
