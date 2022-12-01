import "../../components/cart-dropdown/cart-dropdown.styles.scss"
import { MyButton } from "../button/button.component";
import { useState, useContext, useEffect } from "react";
import {CartContext} from '../../components/contexts/cart.context';
import { ProductContext } from "../contexts/product.context";
import CartProductList from "../cart-product-list/cart-product-list.component";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
    var {productChosen, setProductChosen} = useContext(CartContext);
    var {isShowShop, setIsShowShop} = useContext(ProductContext);

    const navigate = useNavigate();
    const navigateHandler = () => {
        // navigate("/checkout");
        setIsShowShop(!isShowShop);
    }
    return (
        <div id="cart-dropdown" className="cart-dropdown-container collapse">
            <CartProductList productChosen={productChosen} />
            <MyButton buttonName={isShowShop ? `Check out` : `Back to shop`} buttonType="default" typeName="button" onClickHandler={navigateHandler} />
        </div>
    );
}

export default CartDropDown;