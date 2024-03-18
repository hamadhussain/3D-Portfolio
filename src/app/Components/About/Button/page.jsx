import React from 'react'
import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa";

const page = () => {
  return (
    <div className=' hover:animate-pulse'>
      <Button variant="outline" className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:gap-0.5">Let's Talk <FaArrowRight /></Button>
    </div>
  )
}

export default page
