import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); 
    localStorage.removeItem('isAuthenticated'); 
    navigate('/Login'); 
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Logout
    </button>
  );
}