import "../../components/cart-dropdown/cart-dropdown.styles.scss"
import { MyButton } from "../button/button.component";
import { useState, useContext, useEffect } from "react";
import {CartContext} from '../../components/contexts/cart.context';
import CartProductList from "../cart-product-list/cart-product-list.component";

const CartDropDown = () => {
    debugger
    const {productChosen} = useContext(CartContext);
    return (
        <div className={`cart-dropdown-container`}>
            <CartProductList productChosen={productChosen} />
            <MyButton buttonName="Check out" buttonType="default" typeName="button" />
        </div>
    );
}

export default CartDropDown;