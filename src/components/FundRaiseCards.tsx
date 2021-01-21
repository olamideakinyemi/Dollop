import React from "react";
import styled from "styled-components";



const StyledDiv = styled.div`
top: 2757px;
left: 1388px;
width: 260px;
height: 15px;
background: var(--unnamed-color-17a099) 0% 0% no-repeat padding-box;
background: #17A099 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 1;
`;


const FundRaise = () => {
  return (
    <div>
      <div>
        <img src="/img/fundraise.png" alt="/" />
      </div>
      <div className="shadow rounded-xl -mt-8 relative z-50 bg-white">
        <div className="flex items-center my-2 mx-5">
          <p className="text-xs font-medium text-green">Children Safety</p>
          <span className="mx-1">|</span>
          <p className="text-xs">Uganda</p>
        </div>
        <div className="mx-5">
            <p className="text-sm font-semibold">
                Help Provide shelter to get people off the streets of Lagos
            </p>
        </div>
        <div className="mx-5 my-12">
        <p className="text-xs"><span className="font-semibold">N2,000,000 </span>raised N2,000,000</p>
        <StyledDiv className="my-4">

        </StyledDiv>
        <p className="text-sm pb-12">Done.</p>
        
        </div>
      </div>
    </div>
  );
};

export default FundRaise;
