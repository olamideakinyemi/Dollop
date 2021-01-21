import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";


const StyledDiv = styled.div`
  font-size: 12px;
  color: gray;
  line-height: 2;
`;
const Styledh2 = styled.h2`
  font-size: 14px;
  color: blackfade;
`;
const Styledp = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 2px;
`;

const Styledspan = styled.span`
  font-size: 8px;
  margin-left: 8px;
`;

function Howitworks() {
  return (
    <div className="my-40">
      <div></div>

      <div className="flex justify-between shadow-2xl rounded-2xl mx-40 px-12 py-20">
          <div className="">
              <h1 className="text-3xl text-blackfade font-bold">How it<br /> Works</h1>
          </div>
          <div className="border-l-2 border-blue">
            <Styledh2 className="font-bold ml-6">Subscribe</Styledh2>
            <StyledDiv className="ml-6">
              <p>Sign up using your email address,<br /> WhatsApp number or apple email<br /> address to subscribe</p>
            </StyledDiv>
            <p className="mt-32 text-lg font-bold text-green ml-6">
            Don’t stop giving
            </p>
          </div>
          <div className="mx-12">
            <Styledh2 className="font-bold">Make a recurring donation</Styledh2>
            <StyledDiv>
             <p>Setup and make a recurring donation <br /> of $0.99 (N500).</p>
            </StyledDiv>
            <StyledDiv className="flex pt-2">
            <img className="w-2 h-2" src="/img/redcircle.png" alt="/" />
            <Styledspan className="text-blackfade font-medium">This recurring donation will be charged on <br /> your card monthly.</Styledspan>
            </StyledDiv>
          </div>
          <div className="">
            <Styledh2 className="font-bold">Bi- weekly Messaging</Styledh2>
            <StyledDiv>
             <p>Receive bi-weekly messages from<br /> EMAWI with three (3) possible<br /> causes you can donate to.</p>
            </StyledDiv>
          </div>
      </div>
    </div>
  );
}

export default Howitworks;
