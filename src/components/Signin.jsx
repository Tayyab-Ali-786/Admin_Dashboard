import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.Email === data.Email &&
      storedData.Password === data.Password
    ) {
      localStorage.setItem("isAuthenticated", true);
      alert("Sign in successful");
      navigate("/home");
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h2>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("Email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.Email && (
            <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("Password", {
              required: "This field is required",
              minLength: { value: 6, message: "Minimum length is 6" },
              maxLength: { value: 20, message: "Maximum length is 20" },
            })}
          />
          {errors.Password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.Password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold mt-4"
        >
          Sign In
        </button>
        <p className="text-gray-600 text-sm mt-4 text-center">
          Don't have an account?{" "}
          <NavLink to="/" className="text-blue-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signin;
