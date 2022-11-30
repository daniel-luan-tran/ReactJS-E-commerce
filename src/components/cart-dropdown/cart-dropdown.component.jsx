import "../../components/cart-dropdown/cart-dropdown.styles.scss"
import { MyButton } from "../button/button.component";
import { useState, useContext, useEffect } from "react";
import {ProductChosenContext} from '../../components/contexts/productChosen.context';
import CartProductList from "../cart-product-list/cart-product-list.component";

const CartDropDown = (props) => {
    const {productChosen, setProductChosen} = useContext(ProductChosenContext);
    const [_productChosen, _setProductChosen] = useState(productChosen);
    useEffect(
        () => {
            debugger
            _setProductChosen(productChosen)
        },
        productChosen
    );
    debugger
    return (
        <div className={`cart-dropdown-container ${props.props}`}>
            <CartProductList productChosen={_productChosen} />
            <MyButton buttonName="Check out" buttonType="default" typeName="button" />
        </div>
    );
}

export default CartDropDown;