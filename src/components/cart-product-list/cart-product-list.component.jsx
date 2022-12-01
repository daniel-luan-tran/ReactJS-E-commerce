import CartProduct from "../cart-product/cart-product.component";

const CartProductList = (props) => {
    const {productChosen} = props;
    debugger
    return(
            (typeof productChosen != 'undefined' && productChosen.length > 0)
            ? 
            productChosen.map((item) => {
                debugger
                return(<CartProduct key={item.id} item={item} />);
            })
            : 
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}><span style={{fontWeight: "bold", textAlign: "center"}}>Nothing in cart</span></div>
    );
}

export default CartProductList;