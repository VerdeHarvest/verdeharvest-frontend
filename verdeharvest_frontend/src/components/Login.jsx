import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import verdeharvest from '../assets/verdeharvest-background.png';
import verdeharvestlogo from '../assets/verdeharvest-logo.png';

const Login = () => {
  const ResponseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${verdeharvest})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={verdeharvestlogo} width="130px" alt="logo" />
        </div>

        <div className="shadow-2x1">
          <GoogleLogin
            clientId=''
            render={(renderProps) => (
              <button
                type="button"
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="mr-4" /> Sign in with Google
              </button>
            )}
            onSuccess={ResponseGoogle}
            onFailure={ResponseGoogle}
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;