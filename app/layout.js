'use client'
import '../styles/reset.css'
import '../styles/global.css'
import { Footer, Header } from '@/components';



export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className='container'>
        <Header/>
        <main>{children}</main>
        <Footer/>    
      </body>
    </html>
  );
}
