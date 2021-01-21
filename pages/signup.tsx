import React from "react";
import AuthenticationLayout from "../src/layouts/Authentication";
import Link from "next/link";
import { useRouter } from 'next/router';

const SignupPage = () => {
    const router = useRouter()
  return (
    <div className="my-12 mx-32">
      <div className="border-b-2 border-blue pb-4">
        <h1 className="text-2xl font-bold">Sign up</h1>
      </div>
      <div className="mt-12 text-xs">
        <p className="text-blackfade pb-2">Email</p>
        <input
          className="bg-gray w-full h-12 pl-4 rounded"
          type="text"
          placeholder="Your email address"
        />
      </div>
      <div className="mt-4 text-xs">
        <p className="text-blackfade pb-2">Password</p>
        <input
          className="bg-gray w-full h-12 pl-4 rounded"
          type="password"
          placeholder="Password"
        />
        <div className="my-8 text-xs text-center text-white">
          <button className="bg-green w-full h-8 rounded">Sign up</button>
        </div>
        <div className="border-t-2 border-gray pt-4 w-full text-lighterblack">
          <p>Or Sign up with other methods.</p>
        </div>
      </div>
      <div className="my-4 text-xs text-center text-black">
          <button className="w-full h-8 rounded border border-green">
          Sign up with your WhatsApp number
          </button>
        </div>
        <div className="text-xs text-center text-black">
          <button className="w-full h-8 rounded border border-lightgray">
          Sign up with your Apple email
          </button>
        </div>
        <div className="flex text-xs my-12">
          <p className="text-lighterblack">Already have an account?</p>
          <Link href="login">
            <a className="text-green ml-2 border-b-2 border-green">Sign in</a>
          </Link>
        </div>
    </div>
  );
};

SignupPage.Layout = AuthenticationLayout;

export default SignupPage;
