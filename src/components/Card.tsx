import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledH1 = styled.h1`
  font-size: 11px;
`;
const StyledP = styled.p`
  font-size: 7px;
`;
const StyledP1 = styled.p`
  font-size: 9px;
`;

const StyledLink = styled.a`
  font-size: 10px;
`;

const Card = () => {
  return (
    <div>
      <div>
        <img className="w-56" src="/img/hitesh.png" alt="/" />
      </div>
      <div className="shadow-lg rounded-2xl w-56 -mt-8">
        <div className="py-8 px-4">
          <StyledH1 className="font-bold text-green mt-4">
            Mauris ante nisl, consectetur
            <br /> et luctus porta ut dolor.
          </StyledH1>
          <StyledP className="my-4">24 September 2019</StyledP>
          <StyledP1 className="mb-4">
            Aenean sed nibh a magna posuere
            <br /> tempor. Nunc faucibus pellentesque
            <br />
            nunc in aliquet. Donec congue, nunc
            <br /> vel tempor congue, enim sapien
            <br />
            lobortis ipsum, in volutpat sem ex in ligula.
          </StyledP1>
          <StyledLink>
            <Link href="/">
              <a className="border-b-2 pb-1 duration-300 font-medium hover:text-green">
                Read More
              </a>
            </Link>
          </StyledLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
