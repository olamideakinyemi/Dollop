import React from "react";
import styled from "styled-components";

const Slider = () => {
  return (
    <div className="flex items-center ml-64">
        <div>
          <img className="px-5 py-3 border-solid border border-green rounded-full" src="/img/toggleleft.png" alt="/" />
          </div>
      <div className="shadow-2xl rounded-2xl mx-4">
        <div className="flex px-8 py-16">
          <img className="w-12 h-12 mr-4" src="/img/quote.png" alt="/" />
          <p className="text-xs">
            Integer ac interdum lacus. Nunc porta semper lacus a varius.
            Pellentesque
            <br /> habitant morbi tristique senectus et netus et malesuada fames
            ac turpis egestas.
            <br /> Nunc sagittis consectetur velit, ac gravida nunc gravida et.
            Vestibulum at eros
            <br /> imperdiet, volutpat nunc vitae, ornare erat. Proin interdum
            aliquet porta. Fusce ut
            <br /> semper ligula, malesuada fames ac turpis.
          </p>
        </div>
        <div className="flex items-center mx-20 my-4">
          <img className="w-16 ml-4" src="/img/williams.png" alt="/" />
          <div className="ml-4">
            <p className="text-xs font-medium">Betty Lucy</p>
            <p className="text-xs">CEO, Betty Saloon</p>
          </div>
        </div> 
      </div>
      <div>
          <img className="px-5 py-3  border-solid border border-green rounded-full bg-green" src="/img/toggleright.png" alt="/" />
          </div>
    </div>
  );
};

export default Slider;
