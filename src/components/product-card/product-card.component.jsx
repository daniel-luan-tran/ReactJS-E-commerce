import { Button } from "../button/button.component";
import "../product-card/product-card.styles.scss"

const ProductCard = ({product}) => {
    
    const {id, name, imageUrl, price} = product;
    return(
        <div key={`${id}`} className='product-card-container'>
            <img src={`${imageUrl}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonName='Add to cart' typeName='button' buttonType='inverted' />
        </div>
    );
}
export default ProductCard;