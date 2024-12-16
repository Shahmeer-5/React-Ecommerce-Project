import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;  
    },
    setLoading: (state, action) => {
      state.loading = action.payload;  
    },
    setError: (state, action) => {
      state.error = action.payload;    
      state.loading = false;            
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export default productsSlice.reducer;