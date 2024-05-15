import './footer.css'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      Made with by 
      <Link href='https://github.com/EnesArslan8' target='_blank' style={{margin:'0 10px'}}>Enes Arslan</Link>
    </footer>
  )
}

export  {Footer}