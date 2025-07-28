import { star } from '../assets/icons';

function PopularProductCard({ imgURL, name, price }) {
   return (
      <div className='flex flex-col flex-1 w-full max-sm:w-full '>
         <img 
            src={imgURL} 
            alt={name}
            className='w-[280px] h-[280px] hover:scale-105 transition-all duration-300' />
            <div className='mt-8 flex justify-start gap-2.5 '>
               <img 
                  src={star} 
                  alt="rating"
                  width={24} height={24} />
                  <p className='text-xl leading-normal font-montserrat text-slate-gray'>(4.5)</p>
            </div>
            <h3 className='mt-2 text-2xl font-semibold leading-normal font-palaquin'>{name}</h3>
            <p className='mt-2 text-xl font-semibold leading-normal font-montserrat text-coral-red'>{price}</p>
      </div>
   )
}

export default PopularProductCard