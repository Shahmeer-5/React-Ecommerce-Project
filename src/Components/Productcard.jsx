import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`); // Navigate to product details page
  };

  return (
    <div
      onClick={handleCardClick}
      className="max-w-xs rounded overflow-hidden shadow-lg p-4 cursor-pointer hover:shadow-xl transition"
    >
      <img className="w-full h-56 object-cover" src={product.image} alt={product.title} />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="mt-2 text-lg font-bold">${product.price}</p>
      </div>
    </div>
  );
}
