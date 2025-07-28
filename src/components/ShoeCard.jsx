import React from 'react'

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImage }) {
   const handleClick = React.useCallback(() => {
      if (bigShoeImage !== imgURL.bigShoe) {
         changeBigShoeImage(imgURL.bigShoe)
      }

   }, [bigShoeImage, imgURL.bigShoe, changeBigShoeImage])

   return (
      <div className={`border-2 rounded-xl
         ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1 transition-all duration-300`}
      onClick={handleClick}>
         <div className="flex items-center justify-center bg-center bg-cover bg-card sm:w-50 sm:h-40 rounded-xl max-sm:p-4">
            <img 
               src={imgURL.thumbnail} 
               alt="shoe collection"
               width={127}
               height={103}
               className='object-contain hover:scale-125 transition-all duration-300'/>
         </div>
      </div>
   )
}

export default ShoeCard