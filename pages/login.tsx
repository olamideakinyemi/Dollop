import React from "react";
import AuthenticationLayout from "../src/layouts/Authentication";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="xl:my-32 mx-32 md:mx-24 my-24">
      <div className="border-b-2 border-blue pb-4">
        <h1 className="text-2xl font-bold">Sign in</h1>
      </div>
      <div className="mt-8 text-xs">
        <p className="text-blackfade pb-2">Email or phone number</p>
        <input
          className="bg-gray rounded w-56 h-12 pl-4 md:w-full"
          type="text"
          placeholder="Your Email Or Phone number"
        />
      </div>
      <div className="mt-4 text-xs">
        <p className="text-blackfade pb-2">Password</p>
        <input
          className="bg-gray w-56 h-12 pl-4 rounded md:w-full lg:w-full"
          type="password"
          placeholder="Password"
        />
        <div className="my-8 text-xs text-center text-white">
          <button className="bg-green w-56 h-8 rounded md:w-full">Sign in</button>
        </div>
        <div className="flex text-xs md:w-56">
          <p className="text-lighterblack">Don’t have an account?</p>
          <Link href="signup">
            <a className="text-green ml-2 border-b-2 border-green">Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

LoginPage.Layout = AuthenticationLayout;

export default LoginPage;
