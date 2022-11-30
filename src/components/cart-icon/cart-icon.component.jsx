import "../../components/cart-icon/cart-icon.styles.scss"
import { useState } from "react";
import{ ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CartIcon = () => {
    const {toggleShow, setToggleShow, cartCount} = useContext(CartContext);
    debugger
    const showHideHandler = () => {
        setToggleShow(!toggleShow);
    }
    return (
        <div className="cart-icon-container" onClick={showHideHandler}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    );
}

export default CartIcon;