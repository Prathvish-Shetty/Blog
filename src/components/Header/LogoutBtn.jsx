
import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import Button from '../Button';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition" onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
