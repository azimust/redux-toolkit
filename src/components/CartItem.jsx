import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { removeItem, increaseItem, decreaseItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button onClick={() => dispatch(removeItem(id))} className='remove-btn'>remove</button>
            </div>
            <div>
                <button className='amount-btn' onClick={() => dispatch(increaseItem({ id }))}><ChevronUp /></button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={() => {
                    if(amount === 0 ) {
                        dispatch(removeItem(id))
                        return
                    }
                    dispatch(decreaseItem({ id }))
                }}><ChevronDown /></button>
            </div>
        </article>
    )
}

export default CartItem