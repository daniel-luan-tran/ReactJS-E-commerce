import CartProduct from "../cart-product/cart-product.component";
// export const CartProduct = (props) => {
//     debugger
//     const {item} = props;
//     <div>{item.name}</div>
// }

const CartProductList = (props) => {
    const {productChosen} = props;
    debugger
    return(
            (typeof productChosen != 'undefined' && productChosen.length > 0)
            ? 
            productChosen.map((item) => {
                debugger
                return(<CartProduct item={item} />);
            })
            : 
            <div style={{height: '100', fontWeight:'bold'}}>Nothing was added in cart</div>
    );
}
export default CartProductList;