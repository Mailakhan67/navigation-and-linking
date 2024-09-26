import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='font-bold'>this is About Page</h1> <br />
      <Link href='/'>Back to home page</Link> <br /><br />
   <Link href={'/contact'}>Go to Contact page</Link> <br /> <br />
   <Link href={'/footer'}>Go to Footer page</Link>

    </div>
  )
}

export default About
