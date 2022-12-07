import { MyButton } from "../button/button.component";
import "../product-card/product-card.styles.scss";
import { useContext } from "react";
import {CartContext} from '../../components/contexts/cart.context';

const ProductCardV2Detail = ({item}) => {
    const {productChosen, setProductChosen, addItemToCart, cartCount} = useContext(CartContext);
    const {id, name, imageUrl, price} = item;
    
    const onClickHandler = () => {
        addItemToCart({id, name, imageUrl, price});
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