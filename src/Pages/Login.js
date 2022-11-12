import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { login, logOut, user, handleGoogleSignIn } = useContext(AuthContext);

  return (
    <div>
      {user?.uid ? (
        <button onClick={logOut} class="btn btn-success m-5">
          Sign Out
        </button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn} class="btn btn-success m-5">
            Google Sing In
          </button>
          {/* <button onClick={handleGithubSignIn}>Github Sign IN</button> */}
        </>
      )}
      {user?.uid && (
        <div>
          <h3>User name: {user.displayName}</h3>
          <p>Email address: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
