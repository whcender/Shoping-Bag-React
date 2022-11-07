import React from 'react'
import CardItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { clearItems } from '../features/cartSlice'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {

    const { cartItems, total, amount } = useSelector((store) => store.cart)
    const dispatch = useDispatch();



    if (amount >= 1) {
        return (
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                </header>
                <div>
                    {cartItems.map((item) => {
                        return <CardItem key={item.id} {...item} />
                    }
                    )}
                </div>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>
                            total <span>${total}</span>
                        </h4>
                    </div>
                    <button className="btn clear-btn" onClick={() => { dispatch(openModal()) }}>clear cart</button>
                </footer>

            </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
    )
}

export default CartContainer