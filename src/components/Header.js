import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const disPatch = useDispatch();

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        disPatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen p-5 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48   cursor-pointer"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      {user && (
        <div className="flex justify-between m-2 pr-10">
          <img
            className="cursor-pointer w-24 py-4"
            src={user.photoURL}
            alt="User_Icon"
          />
          <button
            onClick={handleSignOut}
            className="text-white text-3xl font-bold "
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
