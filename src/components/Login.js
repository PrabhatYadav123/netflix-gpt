import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_image"
        />
      </div>

      <form className="text-white bg-black  rounded-lg bg-opacity-80 absolute my-36 p-12 mx-auto w-3/12 right-0 left-0">
        {isLoggedIn ? (
          <h1 className="font-bold text-3xl my-2">Sign In</h1>
        ) : (
          <h1 className="font-bold text-3xl my-2">Sign Up</h1>
        )}
        {!isLoggedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="bg-gray-700 p-2 my-4 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address or Phone"
          className="bg-gray-700 p-2 my-4 w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 p-2 my-4 w-full"
        />
        {isLoggedIn ? (
          <button className="p-4 my-6 rounded-lg w-full bg-red-800">
            Sign In
          </button>
        ) : (
          <button className="p-4 my-6 rounded-lg w-full bg-red-800">
            Sign Up
          </button>
        )}
        {isLoggedIn ? (
          <p className="cursor-pointer" onClick={handleLoggedIn}>
            New to Netflix? Sign up now.
          </p>
        ) : (
          <p className="cursor-pointer" onClick={handleLoggedIn}>
            Already Sign Up? Sign In now.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
