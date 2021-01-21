import React from 'react';
import styled from "styled-components";




const Toggle = () =>{
    return(
      <div className="flex my-20">
          <span>
          <img className="px-5 py-3  border-solid border border-green rounded-full" src="/img/toggleleft.png" alt="/" />
          </span>
          <span className="mx-12">
          <img className="px-5 py-3  border-solid border border-green rounded-full bg-green" src="/img/toggleright.png" alt="/" />
          </span>
      </div>
    );
}

export default Toggle;