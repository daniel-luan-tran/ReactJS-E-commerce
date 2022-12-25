import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchProductFailed, fetchProductStart, fetchProductSuccess } from "./product.action";

const dispatchAsync = async (dispatch) => {
    dispatch(fetchProductStart());
    try {
        const categoryMap = await getCategoriesAndDocuments();
        let arrayData = [];
        Object.entries(categoryMap).map((_) => {
            _[1].map((__) => {
                arrayData.push({...__, category: _[0]});
            });
        })
        dispatch(fetchProductSuccess({categoryMap, arrayData}));
    } catch (error) {
        dispatch(fetchProductFailed(error));
    }
}

export const fetchProductAsyncReduxThunk = (dispatch) => {
    return dispatchAsync(dispatch);
}

export const selectProductLoading = (state) => {
    return state.product.isLoading;
}