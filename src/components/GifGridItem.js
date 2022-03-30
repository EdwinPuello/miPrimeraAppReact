import React from 'react'
import 'animate.css';

export const GifGridItem = ( {id,title,url} ) => {
  return (
    <div className='animate__animated animate__fadeInDown card'>
        <img src={url} title={title} alt={title}/>
    </div>
  )
}
