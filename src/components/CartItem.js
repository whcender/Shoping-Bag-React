import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { removeItem, increaseAmount, decreaseAmount  } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, img,title, price, amount}) => {

  const dispatch = useDispatch();



  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className='remove-btn' onClick={()=>{dispatch(removeItem(id))}} >
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={()=>{dispatch(increaseAmount(id))}} >
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={()=>{dispatch(decreaseAmount(id))}}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem