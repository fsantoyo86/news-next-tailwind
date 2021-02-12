import Head from 'next/head'
import { Toolbar } from '../components/toolbar'

export default function Home() {
  return (
   <>
   <div className="page-container">
     <Toolbar></Toolbar>
     <div className=" flex grid grid-rows-2 justify-items-center items-center font-news">
       <h1 className="lg:text-5xl md:text-5xl sm:text-3xl text-3xl lg:mt-40 md:mt-30 sm:mt-20 mt-20 mb-0">News at every minute</h1>
       <h3 className="lg:text-xl md:text-lg sm:text-lg text-lg p-0 mt-0">The latest events at one click away</h3>
     </div>
   </div>
   </>
  )
}
