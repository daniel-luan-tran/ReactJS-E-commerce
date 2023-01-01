import { MyButton } from "../button/button.component";
import "../product-card/product-card.styles.scss";
import { useContext, useState } from "react";
import {CartContext} from '../../components/contexts/cart.context';
import { addItemToCart, selectCartItemsReducer } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCartAction, setCurrentCartCount } from "../../store/cart/cart.action";
import { Alert, Snackbar, Stack } from "@mui/material";
import FadeIn from "react-fade-in/lib/FadeIn";

const ProductCard = ({category, product, index, imgSize}) => {
    /* Notification */
    const [typeNotify, setTyeNotify] = useState("success");
    const [openNotify, setOpenNotify] = useState(false);
    const mess = typeNotify == "success" ? "Added!" 
    : typeNotify == "error" ? "Error!" 
    : typeNotify == "warning" ? "Removed!" 
    : typeNotify == "info" ? "Information!" 
    : "Success!";
    const triggerNotify = (isOpen, type) => {
        setTyeNotify(type);
        setOpenNotify(isOpen);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenNotify(false);
    };
    /* Notification */
      
    const {id, name, imageUrl, price} = product;
    const productChosen = useSelector(selectCartItemsReducer);
    const dispatch = useDispatch();
    const onClickHandler = () => {
        const item = addItemToCartAction(product, productChosen)
        dispatch(item);
        triggerNotify(true, "success");
    }
    
    return(
        <>
        <Snackbar open={openNotify} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={typeNotify} sx={{ width: '100%' }}>
                {mess}
            </Alert>
        </Snackbar>
        {index == 0 && <div className="category-name text-uppercase">
            <FadeIn><h1>{category}</h1></FadeIn>
        </div>}
        <FadeIn>
            <div className='product-card-container'>
                <img src={`${imageUrl}`} style={imgSize} />
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
                </div>
                <MyButton buttonName='Add cart' typeName='button' buttonType='inverted' onClickHandler={onClickHandler} />
            </div>
        </FadeIn>
        </>
    );
}
export default ProductCard;