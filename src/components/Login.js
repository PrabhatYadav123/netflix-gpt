import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const disPatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isLoggedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/52679650?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              disPatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage("User is already registerd");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage("User is not register, Please Sign UP");
        });
    }
  };

  const handleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_image"
        />
      </div>

      <form
        className="text-white bg-black  rounded-lg bg-opacity-80 absolute my-36 p-12 mx-auto w-3/12 right-0 left-0"
        onClick={handleSubmit}
      >
        <h1 className="font-bold text-3xl my-2">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isLoggedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="bg-gray-700 p-2 my-4 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address or Phone"
          className="bg-gray-700 p-2 my-4 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="bg-gray-700 p-2 my-4 w-full"
        />
        <p className="text-red-700 font-bold">{errorMessage}</p>

        <button
          className="p-4 my-6 rounded-lg w-full bg-red-800"
          onClick={handleButtonClick}
        >
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={handleLoggedIn}>
          {isLoggedIn
            ? "New to Netflix? Sign up now."
            : " Already Sign Up? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
