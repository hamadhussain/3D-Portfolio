import React from 'react'
import Form from './Form/page'
import { IoMdContacts } from "react-icons/io";

const page = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-10 my-24' name="test3">
        <h1 className=' uppercase text-3xl flex justify-center gap-5  '>Contact Form <IoMdContacts /></h1>
      <Form/>
    </div>
  )
}

export default page
