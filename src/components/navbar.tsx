import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex items-center justify-center gap-x-4 bg-slate-300 font-bold'>
        <Link href={'/'}>home</Link>
        <Link href={'/about'}>about</Link>
        <Link href={'/contact'}>contact</Link>
        
      </ul>
    </div>
  )
}

export default Navbar
