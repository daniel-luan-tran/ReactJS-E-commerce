import "../../components/cart-icon/cart-icon.styles.scss"
import { useState } from "react";
import{ ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const showHideHandler = () => {

}

const CartIcon = () => {
    debugger
    const [_class, setClass] = useState("d-none");
    //const {__class} = _class;
    setClass(
        () => {
            if (_class)
                if (_class.includes("d-none"))
                    _class.replace("d-none", "");
            else
                _class += "d-none";
        }
        //{[_class] : (_class.includes("d-none") ? _class.replace("d-none", "") : (_class += "d-none"))}
    );

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