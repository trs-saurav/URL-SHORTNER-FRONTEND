import React from 'react'

import { useForm } from 'react-hook-form';

function Signup() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  
    const password = watch("password");
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <div className='flex justify-center items-center'>
        <div className="bg-white p-6 rounded-md shadow-md w-96">
  
          <form onSubmit={handleSubmit(onSubmit)}>
  
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

  
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-800">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 border rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
  
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-800">
                Password
              </label>
              <input type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-3 py-2 border rounded-md"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
  

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
  
  
            <button
              type="submit"
              className="w-full bg-orange-700 text-white py-2 rounded-md hover:bg-orange-500 transition"
            >
              Register
            </button>
  
          </form>
 
        </div>
      </div>
    );
}

export default Signup
