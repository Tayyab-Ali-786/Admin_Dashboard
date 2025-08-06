import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("isAuthenticated", true);
    alert("Sign up successful");
    navigate("/home");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("FirstName", {
              required: "This field is required",
              minLength: { value: 3, message: "Minimum length is 3" },
              maxLength: { value: 20, message: "Maximum length is 20" },
            })}
          />
          {errors.FirstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.FirstName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("LastName", {
              required: "This field is required",
              minLength: { value: 3, message: "Minimum length is 3" },
              maxLength: { value: 20, message: "Maximum length is 20" },
            })}
          />
          {errors.LastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.LastName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold mt-2"
        >
          Submit
        </button>
        <NavLink
          to="/signin"
          className="text-blue-600 hover:underline text-center mt-4"
        >
          Already have an account? Sign In
        </NavLink>
      </form>
    </div>
  );
};

export default Signup;
