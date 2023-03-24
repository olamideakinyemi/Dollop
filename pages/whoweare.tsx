import Head from "next/head";
import Link from "next/link";
import Team from "../src/components/team";

function Whoweare() {
  return (
    <div>
      <div className="mx-32 my-40">
        <img className="w-12" src="/img/redcircle.png" alt="/" />
        <h1 className="text-4xl font-bold text-black ml-8 -mt-8">
          Hey, We are <span className="text-yellow">Dollop</span>
        </h1>
        <p className="text-lightblack text-xs ml-8 mt-4">
          A non-profit amplifying genuine crowdfunding campaigns.
        </p>
      </div>
      <div className="flex items-center">
        <img className="w-5/12" src="/img/george.png" alt="/" />
        <div className="mx-12">
          <div className="flex">
            <img className="w-12 h-12 mr-4" src="/img/quote.png" alt="/" />
            <p className="text-lg font-medium text-black">
              Aenean sed nibh a magna posuere tempor.
              <br /> Nunc faucibus pellentesque nunc in aliquet.
              <br /> Donec congue, nunc vel tempor congue,
              <br /> enim sapien lobortis ipsum, in volutpat sem
              <br /> ex in ligula. Nunc purus est, consequat
              <br /> condimentum faucibus sed, iaculis sit amet
              <br /> massa. Fusce ac condimentum turpis. Ut
              <br /> consequat lacinia augue, vitae aliquam
              <br /> sapien ullamcorper at.
            </p>
          </div>
          <div className="ml-16 text-xs mt-12">
            <p className="text-black font-semibold">Jide Ojoh</p>
            <p className="text-lighterblack mt-2">Co-Founder & CEO</p>
          </div>
        </div>
      </div>
      <div className="my-24">
        <img src="/img/line.png" alt="/" />
      </div>
      <div className="flex mx-32 my-48">
        <div>
          <h1 className="text-2xl font-bold text-black ml-8 -mt-8 pb-4">
            OUR VISION
          </h1>
          <p className="text-xs text-lighterblack border-t-2 border-blue py-4">An world where we can rely on each other in times of need.</p>
        </div>
        <div className="ml-40">
          <h1 className="text-2xl font-bold text-black ml-8 -mt-8 pb-4">
            OUR MISSION
          </h1>
          <p className="text-xs text-lighterblack border-t-2 border-blue py-4">
            To seek, verify and communicate authentic donor-based<br /> crowdfunding
            campaigns. In the process, build a global<br /> network of willing and
            active donors.
          </p>
        </div>
      </div>
      <div>
          <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">
            MEET THE TEAM
          </h1>
          <p className="text-xs text-lighterblack">Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,<br /> consectetur et luctus et, porta ut dolor.</p>
          </div>
      </div>
      <div>
          <Team />
      </div>
    </div>
  );
}

export default Whoweare;
