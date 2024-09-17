import React from 'react'

const CustomOverlappingCards = ({image,className,...props}) => {
  return (
         <div className="w-1/2 z-10">
          <div className={`w-[35rem] h-[30rem] absolute border-2 hover:scale-105 duration-300 transition-all rounded-2xl z-30 object-cover m-auto ${className}`} {...props} >  
            <img
              src={image}
              loading="lazy"
              className="w-full h-full bg-cover rounded-2xl"
              alt="This is an about image"
            /></div>
            <div className={`w-[35rem] h-[30rem] absolute hover:scale-105 duration-300 transition-all mt-10 -ml-10 bg-[#db4a2b] rounded-2xl ${className}`} {...props}></div>
          </div>
  )
}

export default CustomOverlappingCards;