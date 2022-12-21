import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cart.context";
import { MyButton } from "../button/button.component";
import "./check-out.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, DecreaseItemFromCart, selectCartItemsReducer, setNewProductChosen } from "../../store/cart/cart.selector";
import { addItemToCartAction, DecreaseItemFromCartAcion, setNewProductChosenAction } from "../../store/cart/cart.action";

const Checkout = () => {
    const productChosen = useSelector(selectCartItemsReducer);
    const dispatch = useDispatch();
    const totalPrice = (productChosen) => {
        return productChosen.reduce((acc, product) => {
            let rs = acc + (product.quantity * product.price)
            return rs
        }, 0);
    }

    const _setItemsRemoved = (product) => {
        let tempArray = [];
        productChosen.map((item) => {
            if(item.id != product.id) {
                tempArray.push(item);
            }
        });
        return tempArray;
    }

    const _setItems = (product, type) => {
        return productChosen.map((item) => {
            if (type == -1){
                const _product = item.id == product.id ? (item.quantity > 1 ? {...item, quantity: item.quantity+type} : {...item}) : {...item}
                return _product;
            } else{
                const _product = item.id == product.id ? {...item, quantity: item.quantity+type} : {...item};
                return _product;
            }
        });
    }

    const DecreaseQuantity = (product, type = -1) => {
        if(product.quantity > 1) {
            const productToDecreased = _setItems(product, type).filter(_ => _.id == product.id)[0];
            dispatch(DecreaseItemFromCartAcion(productToDecreased, productChosen))
        } else {
            if(window.confirm("Only 1 this item left in your cart. Do you want to remove it?")) {
                RemoveItem(product);
            } else {}
        }
    }// Nếu quantity giảm xuống 0 thì gọi hàm RemoveItem()

    const IncreaseQuantity = (product, type = +1) => {
        const productToIncreased = _setItems(product, type).filter(_ => _.id == product.id)[0];
        dispatch(addItemToCartAction(productToIncreased, productChosen))
    }

    const RemoveItem = (product) => {
        const productDeleted = _setItemsRemoved(product);
        dispatch(setNewProductChosenAction(productDeleted));
    }
    
    return(
        <div className="" style={{paddingTop: "85px", maxWidth: "70%", margin: "auto"}}>
            <div className="row justify-content-center py-3 border-bottom fw-bold">
                <div className="col-lg-2 d-flex justify-content-center align-items-center">Image</div>
                <div className="col-lg-3 d-flex justify-content-center align-items-center">Description</div>
                <div className="col-lg-2 d-flex justify-content-center align-items-center">Quantity</div>
                <div className="col-lg-2 d-flex justify-content-center align-items-center">Price/Item</div>
                <div className="col-lg-2 d-flex justify-content-center align-items-center">Price</div>
                <div className="col-lg-1 d-flex justify-content-center align-items-center">Remove</div>
            </div>
            {
                typeof productChosen != "undefined" && productChosen.length > 0
                ?
                (
                    productChosen.map((product) => {
                        return (
                        <div key={product.id} className="row justify-content-center py-3 border-bottom">
                            <div className="col-lg-2 d-flex justify-content-center align-items-center"><img className="check-out-img" src={`${product.imageUrl}`} /></div>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">{product.name}</div>
                            <div className="col-lg-2 d-flex justify-content-between align-items-center">
                                <MyButton buttonName="<" buttonType="default" typeName="button" styles={{maxWidth: "10px", minWidth: "10px", paddingLeft: "12px", paddingRight: "12px", height: "28px", alignItems: "center"}} onClickHandler={() => {DecreaseQuantity(product)}} />
                                {product.quantity}
                                <MyButton buttonName=">" buttonType="default" typeName="button" styles={{maxWidth: "10px", minWidth: "10px", paddingLeft: "12px", paddingRight: "12px", height: "28px", alignItems: "center"}} onClickHandler={() => {IncreaseQuantity(product)}} />
                            </div>
                            <div className="col-lg-2 d-flex justify-content-center align-items-center">${product.price}</div>
                            <div className="col-lg-2 d-flex justify-content-center align-items-center">${product.price * product.quantity}</div>
                            <div className="col-lg-1 d-flex justify-content-center align-items-center">
                                <MyButton buttonName="x" buttonType="default" typeName="button" styles={{maxWidth: "10px", minWidth: "10px", paddingLeft: "12px", paddingRight: "12px", height: "28px", alignItems: "center"}} onClickHandler={() => {RemoveItem(product)}} />
                            </div>
                        </div>
                        )
                    })
                )
                :
                <div className="fw-bold">Nothing in cart!!!</div>
            }
            <div className="row justify-content-center py-3 border-bottom">
                <div className="col-lg-9 d-flex justify-content-center align-items-center"></div>
                <div className="col-lg-2 d-flex justify-content-end align-items-center fw-bold">TotalPrice</div>
                <div className="col-lg-1 d-flex justify-content-center align-items-center fw-bold">{totalPrice(productChosen)}</div>
            </div>
        </div>
    );
}

export default Checkout;