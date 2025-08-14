import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='fl'
       >
        <img  src={logo} alt='sum logo' className='w-28 object-contain' />
    
    
      <button className='no' onClick={()=> window.open('https://github.com')}>
        Gihtub
      </button>
      
    
    </nav>
  <h1 className='lo'>
        Summarize Articles with  <br />
        <span className='j'>OpenAi
         GPT-4</span>
      </h1>
   
   <h3 className='desc'>
   Simplify your reading with thsi app ,
    an open source artice summarizer that transforms 
    lengthy articles into clear and concise summaries

   </h3>

    </header>
  )
}

export default Hero