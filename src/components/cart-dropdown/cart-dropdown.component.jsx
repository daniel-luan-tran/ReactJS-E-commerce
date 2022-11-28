import "../../components/cart-dropdown/cart-dropdown.styles.scss"
import { MyButton } from "../button/button.component";
import { useState } from "react";

const CartDropDown = (props) => {
    //const {props} = props;
    debugger
    return (
        <div className={`cart-dropdown-container ${props.props}`}>
            <div style={{height: '100'}}></div>
            <MyButton buttonName="Check out" buttonType="default" typeName="button" />
        </div>
    );
}

export default CartDropDown;