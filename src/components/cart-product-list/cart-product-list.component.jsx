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
            <div style={{height: '100', fontWeight:'bold'}}>Nothing was added in cart</div>
    );
}
export default CartProductList;