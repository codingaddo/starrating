import React, { useState } from 'react'

const StarRating = (
    {fill,
        maxRating,
        defaultRating=0
        ,onSetRating,
        size=24
        ,color,
        message=[]

    }) => {
    const [rating,setRating] = useState(defaultRating)

    const containerStyle ={
        display: "flex",
        gap:'50px',
        alignItems:'center',
        fontSize:`${size}px`
    }

    const starContainer ={
        display:'flex',
        gap:'20px'
    }

  return (
    <div style={containerStyle}>
        <div style={starContainer}>
            {Array.from({length:maxRating},(_,i)=>(
                    <Star
                    key={i}
                    onSetRating={()=>setRating(i+1)}
                    fill={rating>=i+1}
                    size={size}
                    color={color}
                    />
                
            ))}
        </div>
        <span>{rating}</span>
    </div>
  )
}

export default StarRating

const Star = ({fill,onSetRating,size,color})=>{
    return(
        <div>
            {fill?
            <span onClick={onSetRating}>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} fill='' height={size} ><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/></svg>
            </span>
            :
            <span
            onClick={onSetRating}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill=''><g id="_01_align_center" data-name="01 align center"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453ZM12,15.346l3.658,2.689-1.4-4.344L17.937,11H13.39L12,6.669,10.61,11H6.062l3.683,2.691-1.4,4.344Z"/></g></svg>
            </span>
            }
        </div>
    )
}