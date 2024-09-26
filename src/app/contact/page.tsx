import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div >
     <h1 className='bg-slate-300 font-bold'> This is a Contact Page </h1><br /> 
      <Link href='/' className='bg-green-200'>Go to home page Back</Link> <br />
      <Link href={'/about'}>Go to About page</Link> <br /> 
   <Link href={'/footer'}>Go to Footer page</Link>

    </div>
  )
}

export default Contact
