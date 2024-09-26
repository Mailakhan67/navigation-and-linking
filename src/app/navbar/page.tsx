import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h1 className='font-bold bg-blue-300'>This is Navbar page</h1> <br />
      <Link href='/'>Back to home page</Link> <br /><br />
      <Link href={'/about'}>Go to About page</Link> <br /> <br />
   <Link href={'/contact'}>Go to Contact page</Link> <br /> <br />
   <Link href={'/footer'}>Go to Footer page</Link>

    </div>
  )
}

export default Navbar
