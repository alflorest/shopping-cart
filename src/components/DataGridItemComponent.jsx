import React from 'react'

export const DataGridItemComponent = ({title, image, category, price}) => {
  return (
    <div className="items-center content-center bg-white rounded-2xl shadow-2xl flex flex-col justify-center mb-5 mr-9 line-clamp-5"> 
        <h1 className='text-center'>{title}</h1>
        <img src={image} alt={title} className=' h-80 mx-6'></img>
        <h2>Price: {price}</h2>
        <h2>Category: {category}</h2>        
    </div>

    )
}
