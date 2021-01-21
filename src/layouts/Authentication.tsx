import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    position: relative;
    bottom: -20%;
`

export default function AuthenticationLayout({children}) {
  return (
    <div className="bg-blackdark h-screen overflow-hidden flex justify-between">
      <div>
        <div>
          <img className="w-32 h-auto m-6" src="/img/auth-logo.png" alt="logo" />
        </div>
        <StyledDiv className="-ml-32">
          <img className="w-full" src="/img/auth-shape.png" alt="logo" />
        </StyledDiv>
      </div>
      <div className="bg-white shadow-lg rounded-lg my-6 mx-12 w-5/12">
          {children}
      </div>
    </div>
  );
}
