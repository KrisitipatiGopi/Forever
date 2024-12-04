import React from 'react'
import { useSelector } from 'react-redux';

const CartTotal = () => {
    const totalPrice = useSelector((store) => store.cart.price);
    console.log(totalPrice)
  return (
    <div className='flex justify-end mt-8 px-4'>
       <div className='flex flex-col items-end'>
            <p className='text-xl font-semibold text-gray-800'>Total Price: ${totalPrice}</p>
       </div>
    </div>
  )
}

export default CartTotal
