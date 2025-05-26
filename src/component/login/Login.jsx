

import React from 'react'
import { useForm } from 'react-hook-form';

function Login() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [name, setName] = React.useState("");

  const password = watch("password");

  const url = import.meta.env.VITE_URL || "http://localhost:8001/";

const onSubmit = async (data) => {
    try {
        const response = await fetch(url + "api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({ email: data.email, password: data.password }).toString(),
            credentials: "include",
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.error || "Invalid email or password");
            throw new Error(`Response status: ${response.status}`);
        }

        console.log("Login Successful");

        window.location.href = "/";
    } catch (error) {
        console.error("Login Error:", error);
    }
};

  return (
    <div className='flex justify-center items-center'>
      <div className="bg-white p-6 rounded-md shadow-md w-96">


        <form onSubmit={handleSubmit(onSubmit)}>

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


          <button
            type="submit"
            className="w-full bg-orange-700 text-white py-2 rounded-md hover:bg-orange-500 transition"
          >
             "Login" 
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login

