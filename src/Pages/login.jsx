import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, setLoading, setError } from '../Redux/Slices/AuthSlice';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth); 

  const handleLogin = () => {
    dispatch(setLoading(true));
    const user = {
      name: "Shahmeer",
      username: "admin",
      password: "admin123",
    };

    setTimeout(() => {
      if (username === user.username && password === user.password) {
        const userData =  user;
        dispatch(setUser(userData)); 
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/products'); 
      } else {
        dispatch(setError('Invalid credentials')); 
      }
    }, 1000); 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 border rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mt-2">{error}</div>} 
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-2 bg-blue-500 text-white rounded"
          onClick={handleLogin}
          disabled={loading} 
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
}