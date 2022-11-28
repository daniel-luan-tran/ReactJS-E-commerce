import "../../components/cart-icon/cart-icon.styles.scss"
import { useState } from "react";
import{ ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const CartIcon = () => {
    const [_class, setClass] = useState("d-none");

    const showHideHandler = () => {
        setClass(_class == "" ? "d-none" : "");
    }

    return (
        <>
        <div className="cart-icon-container" onClick={showHideHandler}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
        <CartDropDown props={_class} />
        </>
    );
}

export default CartIcon;