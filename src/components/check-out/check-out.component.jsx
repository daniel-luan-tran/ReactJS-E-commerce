import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cart.context";
import { MyButton } from "../button/button.component";

const Checkout = () => {
    const {productChosen, setProductChosen} = useContext(CartContext);
    const DecreaseQuantity = (product) => {
        // setProductChosen({...product, quantity: product.quantity--});
    }
    const IncreaseQuantity = (product) => {
        // setProductChosen({...product, quantity: product.quantity++});
    }
    return(
        <div>
            {
                typeof productChosen != "undefined" && productChosen.length > 0
                ?
                productChosen.map((product) => {
                    return (
                    <div key={product.id} className="row">
                        <div className="col-lg-4"><img src={`${product.imageUrl}`} /></div>
                        <div className="col-lg-4">
                            <MyButton buttonName="<" buttonType="default" typeName="button" onClickHandler={DecreaseQuantity(product)} />
                            {product.quantity}
                            <MyButton buttonName=">" buttonType="default" typeName="button" onClickHandler={IncreaseQuantity(product)} />
                        </div>
                        <div className="col-lg-4">${product.price * product.quantity}</div>
                    </div>
                    )
                })
                :
                <div>Nothing in cart!!!</div>
            }
        </div>
    );
}

export default Checkout;