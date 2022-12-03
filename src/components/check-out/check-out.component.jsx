import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cart.context";
import { MyButton } from "../button/button.component";
import "./check-out.styles.scss"

const Checkout = () => {
    const {productChosen, setProductChosen, cartCount, setCartCount} = useContext(CartContext);

    const totalPrice = (productChosen) => {
        return productChosen.reduce((acc, product) => {
            debugger
            let rs = acc + (product.quantity * product.price)
            return rs
        }, 0);
    }

    const _setCartCount = () => {
        let count = cartCount;
        count--;
        setCartCount(count);
    }

    const _setItemsRemoved = (product) => {
        let tempArray = [];
        productChosen.map((item) => {
            if(item.id != product.id) {
                tempArray.push(item);
            }
        });
        _setCartCount();
        return tempArray;
    }

    const _setItems = (product, type) => {
        return productChosen.map((item) => {
            if (type == -1)
                return item.id == product.id ? (item.quantity > 1 ? {...item, quantity: item.quantity+type} : {...item}) : {...item}
            else
                return item.id == product.id ? {...item, quantity: item.quantity+type} : {...item}
        });
    }

    const DecreaseQuantity = (product, type = -1) => {
        if(product.quantity > 1)
            setProductChosen(_setItems(product, type));
        else {
            if(window.confirm("Only 1 this item left in your cart. Do you want to remove it?")) {
                RemoveItem(product);
            } else {}
        }
    }// Nếu quantity giảm xuống 0 thì gọi hàm RemoveItem()

    const IncreaseQuantity = (product, type = +1) => {
        setProductChosen(_setItems(product, type));
    }

    const RemoveItem = (product) => {
        const x = _setItemsRemoved(product);
        setProductChosen(x);
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
                                <MyButton buttonName="<" buttonType="default" typeName="button" styles={{width: "5px", minWidth: "5px"}} onClickHandler={() => {DecreaseQuantity(product)}} />
                                {product.quantity}
                                <MyButton buttonName=">" buttonType="default" typeName="button" styles={{width: "5px", minWidth: "5px"}} onClickHandler={() => {IncreaseQuantity(product)}} />
                            </div>
                            <div className="col-lg-2 d-flex justify-content-center align-items-center">${product.price}</div>
                            <div className="col-lg-2 d-flex justify-content-center align-items-center">${product.price * product.quantity}</div>
                            <div className="col-lg-1 d-flex justify-content-center align-items-center">
                                <MyButton buttonName="x" buttonType="default" typeName="button" styles={{width: "5px", minWidth: "5px"}} onClickHandler={() => {RemoveItem(product)}} />
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
                {/* <div className="col-lg-3 d-flex justify-content-center align-items-center">Description</div>
                <div className="col-lg-3 d-flex justify-content-center align-items-center">Quantity</div> */}
                <div className="col-lg-2 d-flex justify-content-end align-items-center fw-bold">TotalPrice</div>
                <div className="col-lg-1 d-flex justify-content-center align-items-center fw-bold">{totalPrice(productChosen)}</div>
            </div>
        </div>
    );
}

export default Checkout;