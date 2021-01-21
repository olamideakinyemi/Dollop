import React from "react";
import AuthenticationLayout from "../src/layouts/Authentication";
import Link from "next/link";

const CompletePage = () => {
  return (
    <div className="my-32 mx-32">
      <div>
        <img className="w-16 h-auto" src="/img/checkmark1.png" alt="/" />
      </div>
      <div className="border-b-2 border-blue pb-4 mt-8">
        <h1 className="text-2xl font-bold">Sign Up complete</h1>
      </div>
      <div  className="text-xs text-lighterblack mt-4">
        Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque.
        Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh.
        Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem
        dictum varius.
      </div>
    </div>
  );
};

CompletePage.Layout = AuthenticationLayout;

export default CompletePage;
