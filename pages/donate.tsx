import React from "react";
import AuthenticationLayout from "../src/layouts/Authentication";
import Link from "next/link";

const DonatePage = () => {
  return (
    <div className="my-32 mx-32">
      <div className="border-b-2 border-blue pb-4">
        <h1 className="text-2xl font-bold">Start donating</h1>
      </div>
      <div className="mt-8 text-xs">
        <p className="text-blackfade pb-2">Card number</p>
        <input
          className="bg-gray w-full h-12 pl-4 rounded"
          type="text"
          placeholder="Your apple email address"
        />
      </div>
      <div className="flex justify-between">
        <div className="mt-4 text-xs mr-2">
          <p className="text-blackfade pb-2">Expiry Date</p>
          <input
            className="bg-gray w-full h-12 pl-4 rounded"
            type="number"
            placeholder="MM/YY"
          />
        </div>
        <div className="mt-4 text-xs ml-2">
          <p className="text-blackfade pb-2">CVV</p>
          <input
            className="bg-gray w-full h-12 pl-4 rounded"
            type="number"
            placeholder="123"
          />
        </div>
      </div>
      <div className="my-8 text-xs text-center text-white">
        <button className="bg-green w-full h-8 rounded">Make Donation</button>
      </div>
      <div className="text-xs">
        <Link href="/auth-complete">
          <a className="text-green ml-2 border-b-2 border-green">Make donation later</a>
        </Link>
      </div>
    </div>
  );
};

DonatePage.Layout = AuthenticationLayout;

export default DonatePage;
