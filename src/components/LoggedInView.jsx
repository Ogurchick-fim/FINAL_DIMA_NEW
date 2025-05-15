import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/loginFormSlice";

export default function LoggedInView() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.email);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-sm">
      <h2 className="text-2xl mb-4">Привет, {email}!</h2>
      <button
        onClick={() => dispatch(logout())}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}