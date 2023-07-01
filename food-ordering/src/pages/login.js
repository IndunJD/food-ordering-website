import { loginimg, logo, googleicon } from "../assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start min-h-screen">
      <div className="w-1/2 h-full flex flex-col relative">
        <div className="absolute top-[25%] left-[10%] flex flex-col">
          <h1 className="text-[50px] text-whiteish font-raleway font-semibold my-4">
            Get started on your food journey!
          </h1>
          <p className="font-raleway font-normal text-whiteish text-[18px] max-w-[310px] mt-4">
            At GOURMET, we are passionate about food. With years of culinary
            expertise and a deep appreciation for global gastronomy, we strive
            to deliver an unforgettable dining experience.
          </p>
        </div>
        <img
          src={loginimg}
          alt="loginimage"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="w-1/2 h-full bg-blackish flex flex-col p-20 justify-between">
        <img src={logo} alt="" className="w-[100px]" />

        <div className="w-full flex flex-col">
          <h3 className="text-3xl font-semibold font-raleway mb-4 text-whiteish">
            Login
          </h3>
          <p className="text-xl mb-2 text-whiteish">
            Welcome Back! Please enter your details...
          </p>
        </div>

        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-whiteish py-4 bg-transparent bg-none border-b border-slate-700 outline-none focus:outline-none font-raleway"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full text-whiteish py-4 bg-transparent bg-none border-b border-slate-700 outline-none focus:outline-none font-raleway"
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-2 cursor-pointer" />
            <p className="text-sm font-raleway text-whiteish">Remember Me</p>
          </div>
          <p className="text-sm font-semibold font-raleway text-whiteish whitespace-nowrap cursor-pointer underline underline-offset-2">
            Forgot Password?
          </p>
        </div>

        <div className="w-full flex flex-col my-4">
          <button className="w-full text-whiteish my-2 font-semibold bg-gradient-to-r from-primary to-secondary rounded-md p-4 text-center flex items-center justify-center font-raleway">
            Sign In
          </button>
          <Link to="/signup">
            <button className="w-full text-whiteish my-2 font-semibold bg-blackish border border-whiteish rounded-md p-4 text-center flex items-center justify-center font-raleway">
              Register
            </button>
          </Link>
        </div>

        <div className="w-full flex items-center justify-center relative py-2">
          <div className="w-full h-[1px] bg-secondary"></div>
          <p className="text-base absolute text-whiteish font-raleway bg-blackish font-normal px-8">
            or
          </p>
        </div>

        <div className="w-full text-whiteish my-2 cursor-pointer font-semibold bg-blackish border border-whiteish rounded-md p-4 text-center flex items-center justify-center font-raleway">
          <img src={googleicon} alt="googleicon" className="h-8 mr-2" />
          Sign In with Google
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm mb-2 font-raleway text-whiteish">
            Don't have an account?{" "}
            <span className="underline cursor-pointer hover:text-secondary">
              Sign up for free
            </span>
          </p>
        </div>

        <div className="w-full flex items-center justify-end">
          <Link to="/">
            <p className="text-sm mb-2 font-raleway font-semibold text-whiteish cursor-pointer hover:text-secondary">
              Go Back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
