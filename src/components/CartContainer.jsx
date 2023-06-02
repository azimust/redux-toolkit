import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    if (amount < 0) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <div className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item}/>
                })}
            </div>
            <footer>
                <div className="cart-total">
                    <hr />
                    <h4>total <span>${total.toFixed(2)}</span></h4>
                </div>
                <button onClick={() => dispatch(openModal())} className='btn clear-btn'>clear cart</button>
            </footer>
        </div>
    )
}

export default CartContainer