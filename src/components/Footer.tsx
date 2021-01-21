import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 12px;
  color: gray;
  line-height: 3;
`;
const Styledh2 = styled.h2`
  font-size: 14px;
  color: black;
`;
const Styledp = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 2px;
`;
const Styledh5 = styled.h5`
  font-size: 7px;
  color: gray;
`;

const Styledspan = styled.span`
  font-size: 8px;
  color: black;
`;


const Footer = () => {
  return (
    <div className="mx-48">
      <div className="flex justify-between">
        <div>
          <h1 className="text-black font-semibold">
            Subscribe to our newsletter
          </h1>
          <Styledp>Fusce at nisi eget dolor rhoncus facilisis.</Styledp>
          <div className="flex mt-8">
            <input
              className="px-4 py-2 rounded-sm bg-gray"
              type="text"
              placeholder="Your email"
            />
            <span className="mx-2">
              <img
                className="px-4 py-2  border-solid border border-green rounded-lg bg-green"
                src="/img/toggleright.png"
                alt="/"
              />
            </span>
          </div>
        </div>
        <div className="flex border-b-2 border-gray -mt-2">
          <div>
            <Styledh2 className="font-semibold">About us</Styledh2>
            <StyledDiv>
              <Link href="/whoweare">
                <a className="">Who we are</a>
              </Link>
            </StyledDiv>
            <StyledDiv>
              <Link href="/howitworks">
                <a className="">How it works</a>
              </Link>
            </StyledDiv>
          </div>
          <div className="mx-12">
            <Styledh2 className="font-semibold">Contact</Styledh2>
            <StyledDiv>
              <Link href="/">
                <a className="my-8">Support</a>
              </Link>
            </StyledDiv>
            <StyledDiv>
              <Link href="/contactus">
                <a className="">Contact us</a>
              </Link>
            </StyledDiv>
          </div>
          <div className="">
            <Styledh2 className="font-semibold">Social media</Styledh2>
            <div className="flex mt-4">
              <img className="" src="/img/facebook.png" alt="facebook" />
              <img className="ml-4" src="/img/whatsapp.png" alt="whatsapp" />
            </div>
          </div>
        </div>
      </div>
      <Styledh5 className="text-center mt-24">
          <p>2020 Copyright.<Styledspan className="font-semibold">Emawi</Styledspan></p>
          <p>Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor.</p>
      </Styledh5>
    </div>
  );
};

export default Footer;
