import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // Initialize navigate hook
  const { products } = useSelector((state) => state.products); // Fetch products from Redux
  const product = products.find((item) => item.id === parseInt(id)); // Find product by ID

  // Handle Back to Products
  const handleBack = () => {
    navigate('/products'); 
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Product not found!</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-lg mt-6 font-bold text-gray-900">${product.price}</p>

          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Add to Cart
            </button>
            <button
              onClick={handleBack} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
