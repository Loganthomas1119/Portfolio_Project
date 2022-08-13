import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../app/shared/PRODUCTS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch(baseUrl + 'products');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    productsArray: [],
    isLoading: true,
    errMsg: '',
};

const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const productsReducer = ProductsSlice.reducer;

export const selectAllProducts = (state) => {
    return state.products.productsArray;
};

export const selectProductById = (id) => (state) => {
    return state.products.productsArray.find(
        (product) => product.id === parseInt(id)
    );
};




// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };