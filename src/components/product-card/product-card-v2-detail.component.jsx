import { MyButton } from "../button/button.component";
import "../product-card/product-card.styles.scss";
import { useContext } from "react";
import {CartContext} from '../../components/contexts/cart.context';
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemsReducer } from "../../store/cart/cart.selector";
import { addItemToCartAction, setCurrentCartCount } from "../../store/cart/cart.action";

const ProductCardV2Detail = ({item}) => {
    const {id, name, imageUrl, price} = item;

    const productChosen = useSelector(selectCartItemsReducer);
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(addItemToCartAction(item, productChosen));
        // dispatch(setCurrentCartCount());
    }
    return(
        <>
            <div className='product-card-container'>
                <img src={`${imageUrl}`} />
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
                </div>
                <MyButton buttonName='Add to cart' typeName='button' buttonType='inverted' onClickHandler={onClickHandler} />
            </div>
        </>
    );
}
export default ProductCardV2Detail;