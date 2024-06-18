import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username,
        email,
        password,
      });
      if (response.data.message === "Success") {
        alert("User Registered Successfully");
        navigate("/login");
      }else if(response.data.message === "Exists"){
        alert("User Already Exists");
      }
       else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="flex p-6 lg:p-0 bg-blue-500 flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <div className='w-full text-center mb-4'>
      <div className='font-bold text-2xl cursor-pointer flex items-center justify-center text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-2 pt-2'>
          <ion-icon name="book-outline"></ion-icon>
        </span>
        College Space
      </div>
    </div>
    <h2 className="text-2xl font-bold text-blue-500 text-center mb-4">Register</h2>
        <form className="flex flex-col" onSubmit={handleRegister}>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Username"
          />
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
          />
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-gray-900">
              {" "}
              Already have an account?{" "}
              <a
                href="/login"
                className="underline text-blue-500 -200 hover:underline mt-4"
              >
                Login
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
