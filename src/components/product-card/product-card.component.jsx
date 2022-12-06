import { MyButton } from "../button/button.component";
import "../product-card/product-card.styles.scss";
import { useContext } from "react";
import {CartContext} from '../../components/contexts/cart.context';

const ProductCard = ({category, product, index, imgSize}) => {
    const {productChosen, setProductChosen, addItemToCart, cartCount} = useContext(CartContext);
    const {id, name, imageUrl, price} = product;
    console.log(productChosen);
    const onClickHandler = () => {
        addItemToCart(product);
        console.log(productChosen);
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