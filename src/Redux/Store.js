import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/ProductSlice';
import authReducer from './Slices/AuthSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});

export default store;