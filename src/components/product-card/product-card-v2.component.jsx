import { MyButton } from "../button/button.component";
import "../product-card/product-card.styles.scss";
import { useContext } from "react";
import {CartContext} from '../../components/contexts/cart.context';
import ProductCardV2Detail from "./product-card-v2-detail.component";

const ProductCardV2 = ({category, product}) => {
    return(
        <>
            <div className="category-name text-uppercase"><h1>{category}</h1></div>
            {
            product.map((item) => {
                return (
                    <ProductCardV2Detail item={item} />
                )
            })
            }

        </>
    );
}
export default ProductCardV2;