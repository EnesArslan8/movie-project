import './footer.css'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      Made with  
      <Link href='/' target='_blank'>Enes Arslan</Link>
    </footer>
  )
}

export  {Footer}