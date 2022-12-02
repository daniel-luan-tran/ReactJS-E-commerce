import "../../components/cart-icon/cart-icon.styles.scss"
import { useState, useEffect } from "react";
import{ ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CartIcon = () => {
    var {toggleShow, setToggleShow, cartCount, productChosen, setProductChosen} = useContext(CartContext);
    
    const showHideHandler = () => {
        //setToggleShow(!toggleShow);
    }


    return (
        <div className="cart-icon-container" data-bs-toggle="collapse" data-bs-target="#cart-dropdown" aria-expanded="false" aria-controls="cart-dropdown" onClick={showHideHandler}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    );
}

export default CartIcon;