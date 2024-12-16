import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,  
    error: null,     
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;  
        state.error = null
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false; 
        state.error = null
      },
      setLoading: (state, action) => {
        state.loading = action.payload;  
        state.error = null
      },
      setError: (state, action) => {
        state.error = action.payload;  
        state.loading = false;         
      },
    },
  });
  
  export const { setUser, logout, setLoading, setError } = authSlice.actions;
  
  export default authSlice.reducer;