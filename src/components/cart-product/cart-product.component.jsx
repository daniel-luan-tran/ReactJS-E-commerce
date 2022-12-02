import { useState } from "react";
import "../../components/cart-product/cart-product.styles.scss"

const CartProduct = ({item}) => {
    
    return (
    
        <ul className="cart-item" >
            <img className="cart-item-img" src={`${item.imageUrl}`} />
            <li>{item.name}</li>
            <li>${item.price}</li>
            <li>{item.quantity}</li>
        </ul>
    
    );
}

export default CartProduct;