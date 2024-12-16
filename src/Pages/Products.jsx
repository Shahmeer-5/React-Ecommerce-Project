import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading, setProducts, setError } from '../Redux/Slices/ProductSlice';
import { fetchProductsData } from '../Services/API';
import ProductCard from '../Components/Productcard';
import Loader from '../Components/Loader';
import Navbar from '../Components/Navbar';

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }

    if (products.length === 0) {
      const fetchData = async () => {
        dispatch(setLoading(true));
        try {
          const data = await fetchProductsData();
          dispatch(setProducts(data));
        } catch (error) {
          dispatch(setError(error.message));
        } finally {
          dispatch(setLoading(false));
        }
      };

      fetchData();
    }
  }, [dispatch, isAuthenticated, navigate, products]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {error ? (
        <div className="mt-6 text-red-600 text-lg font-bold text-center">
          Error: {error}
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
