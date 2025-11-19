import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

const {signup,logout}=useContext(AuthContext)
const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };
    console.log(user);

    signup(email,password)
    .then(result =>{
      console.log("Successfully registerd ",result.user)
      alert("Successfully Register Complete, You can now login")
      return logout ()
    })
    .then(()=>{

        navigate("/login")
    })

     .catch(error=>console.log(error.message))


  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 
      bg-gradient-to-br from-teal-700 via-emerald-600 to-cyan-700"
    >
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-lg mt-1 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-lg mt-1 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            className="w-full py-3 rounded-lg text-white font-semibold shadow-md 
            bg-emerald-500 hover:bg-emerald-400 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to={'/login'} className="text-teal-600 font-semibold hover:underline" href="#">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
