import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'; 

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log('Logout Clicked');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome, {user?.name || 'Guest'}
      </h1>

      <div className="relative flex items-center">
        <span className="text-gray-800 font-medium mr-2">{user?.username}</span>

        <button
          className="flex items-center focus:outline-none"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon
            icon={faCaretDown} 
            className="text-gray-600 hover:text-gray-800"
            size="lg" 
          />
        </button>

        {isDropdownOpen && (
          <ul
            className="absolute top-full mt-2 right-0 w-48 bg-white rounded-md shadow-lg z-20"
          >
            <li
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
