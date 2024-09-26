import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <h1 className='font-bold bg-gray-400'>This is a Footer page</h1><br />
      <Link href='/'>Back to home page</Link> <br /><br />
      <Link href={'/about'}>Go to About page</Link> <br /> <br />
   <Link href={'/contact'}>Go to Contact page</Link> <br /> <br />
    </div>
  )
}

export default Footer
