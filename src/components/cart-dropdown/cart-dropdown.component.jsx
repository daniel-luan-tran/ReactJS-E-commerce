import "../../components/cart-dropdown/cart-dropdown.styles.scss"
import { MyButton } from "../button/button.component";
import { useState, useContext, useEffect } from "react";
import {CartContext} from '../../components/contexts/cart.context';
import CartProductList from "../cart-product-list/cart-product-list.component";
import { useNavigate } from "react-router-dom";
// import { NavigationContext } from "../contexts/navigation.context";
import { setCurrentNavigation } from "../../store/navigation/navigation.action";
import { useDispatch, useSelector } from "react-redux";

const CartDropDown = () => {
    var {productChosen} = useContext(CartContext);
    // const {navigation, setNavigation} = useContext(NavigationContext);
    // const location = window.location.href;
    // setNavigation(location);
    const dispatch = useDispatch();

    useEffect(() => {
        window.history.pushState({}, '', window.location.href);
        console.log(window.location.href);
        const location = window.location.href;
        dispatch(setCurrentNavigation(location));
    }, [window.location.href]);

    const currentNavigation = useSelector((state) => {
        return state.navigation.currentNavigation;
    })

    const navigate = useNavigate();
    const navigateBackToShopHandler = () => {
        navigate("/shop");
    }
    const navigateCheckoutHandler = () => {
        navigate("/checkout");
    }
    return (
        <div id="cart-dropdown" className="cart-dropdown-container collapse">
            <CartProductList productChosen={productChosen} />
            {
                currentNavigation &&
                !currentNavigation.includes("/shop") &&
                <MyButton buttonName={`Back to shop`} buttonType="default" typeName="button" onClickHandler={navigateBackToShopHandler} styles={{height : "25px", display: "flex", alignItems: "center", borderBottom: "0.5px solid white"}} />
            }
            <MyButton buttonName={`Check out`} buttonType="default" typeName="button" onClickHandler={navigateCheckoutHandler} styles={{height : "25px", display: "flex", alignItems: "center", borderTop: "0.5px solid white"}} />
        </div>
    );
}

export default CartDropDown;