import React from 'react'
import { useState,useEffect } from 'react'
import {copy,linkIcon,loader,tick} from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'
const Demo = () => {
    const [article,setArticle] =useState({url:'',
   summary:'',
    });
    const [getSummary,{error,isFetching}]=useLazyGetSummaryQuery();

    const handleSubmit=async(e)=>{
      e.preventDefault();

     const {data} =await getSummary({articleUrl:article.url});
     if(data?.summary){
      const newArticle ={...article, summary:data.summary};
      setArticle(newArticle);
      console.log(newArticle);
     }
    }


  return (
    <section className='deo'>
    <div  className='op2'>

   
    <form  className='rel' onSubmit={handleSubmit}>
   
   <input  type='url'    value={article.url} onChange={(e)=>setArticle({... article,
   url:e.target.value})}
    required
    className='urlf'
   />
   <button  type='submit'  className='submitf'>
    submit
   </button>
    </form>
      {/* url his */}
      </div>
       <div className='sum2 '>
        {isFetching ? (<img src={loader}  />) : error ? (<p>that is not suppo to happen </p>):
        (article.summary && (<div className='ps'>
              <h2> Article summanry</h2>

           <div className='sumbox'> 
           <p>
           {article.summary}
           </p>
           </div>
        </div>)) }
       </div>
    </section>
  )
}

export default Demo