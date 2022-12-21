import { MyButton } from "../button/button.component";
import "../product-card/product-card.styles.scss";
import { useContext } from "react";
import {CartContext} from '../../components/contexts/cart.context';
import { addItemToCart, selectCartItemsReducer } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCartAction, setCurrentCartCount } from "../../store/cart/cart.action";

const ProductCard = ({category, product, index, imgSize}) => {
    // const {addItemToCart} = useContext(CartContext);
    const {id, name, imageUrl, price} = product;
    const productChosen = useSelector(selectCartItemsReducer);
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(addItemToCartAction(product, productChosen));
        // dispatch(setCurrentCartCount(productChosen));
    }
    
    return(
        <>
            {index == 0 && <div className="category-name text-uppercase"><h1>{category}</h1></div>}
            <div className='product-card-container'>
                <img src={`${imageUrl}`} style={imgSize} />
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
                </div>
                <MyButton buttonName='Add to cart' typeName='button' buttonType='inverted' onClickHandler={onClickHandler} />
            </div>
        </>
    );
}
export default ProductCard;