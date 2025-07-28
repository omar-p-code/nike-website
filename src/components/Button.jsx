import React from 'react'

function Button({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) {
   return (
      <button className={`flex items-center justify-center gap-2 py-4 text-lg leading-none ${textColor || 'text-white'} rounded-full px-7 font-montserrat ${backgroundColor || 'bg-coral-red hover:bg-coral-red/70'} ${borderColor || 'border-coral-red border'} transition-all duration-300 ease-in-out ${fullWidth && 'w-full'}`}>
         {label}
         
         {iconURL && <img src={iconURL} alt="Arrow Right Icon" className='w-5 h-5 ml-2 rounded-full' />}
      </button>
   )
}

export default Button