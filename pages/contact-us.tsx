import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Styledinput = styled.input`
  margin-left: 110px;
  width: 582px;
`;
const Styleddiv = styled.div`
  margin-left: 110px;
`

function Contactus() {
  return (
    <div>
      <div className="mx-32 my-40">
        <p className="text-lightblack text-xs ml-8 mt-4">Let's talk.</p>
        <div className="flex">
          <div>
            <h1 className="text-4xl font-bold text-black ml-8 mt-4">
              How can we help you out?
            </h1>
          </div>
          <div>
            <img className="w-12" src="/img/bluecircle.png" alt="/" />
          </div>
        </div>
        <p className="text-lightblack text-xs ml-8 mt-4">
          Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
          consectetur et luctus et, porta ut dolor.
        </p>
      </div>
      <div className="flex">
        <div className="bg-black text-center px-24 py-12">
          <div>
            <img className="ml-4 w-8" src="/img/phoneicon.png" alt="/" />
            <p className="text-xs font-semibold text-white mt-6">
              Get in Touch
            </p>
          </div>
          <div className="my-6">
            <p className="text-xs text-fade">Phone number</p>
            <p className="text-xs text-white py-2">(515)743-2443</p>
            <p className="text-xs text-white">(515)743-2443</p>
          </div>
          <div>
            <p className="text-xs text-fade">Official hours</p>
            <p className="text-xs text-white py-2">8am - 6pm</p>
            <p className="text-xs text-white">Monday - Saturday</p>
          </div>
        </div>
        <div className="bg-blackfade text-center px-24 py-12 border border-fade">
          <div>
            <img className="ml-16 w-8" src="/img/address.png" alt="/" />
            <p className="text-xs font-semibold text-white mt-6">Address</p>
          </div>
          <div className="my-6">
            <p className="text-xs text-white py-2">
              Suites D332, Ikota complex Lekki,
            </p>
            <p className="text-xs text-white pt-2">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="mx-32 my-40 flex">
        <div>
          <h1 className="text-2xl text-blackfade font-bold">Drop us a line.</h1>
          <p className="text-xs text-lighterblack mt-4">
            Fusce at nisi eget dolor rhoncus facilisis. Mauris
            <br /> ante nisl, consectetur et luctus et, porta ut dolor.
          </p>
        </div>
        <div>
          <div className="flex mx-24">
            <div className="text-xs ml-4">
              <p className="text-blackfade">Name</p>
              <input
                className="px-4 py-2 rounded-sm bg-gray text-lighterblack py-2 rounded"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="text-xs ml-4">
              <p className="text-blackfade">Phone number</p>
              <input
                className="px-4 py-2 rounded-sm bg-gray text-lighterblack py-2 rounded"
                type="number"
                placeholder="Your Phone number"
              />
            </div>
            <div className="text-xs ml-4">
              <p className="text-blackfade">Email</p>
              <input
                className="px-4 py-2 rounded-sm bg-gray text-lighterblack py-2 rounded"
                type="text"
                placeholder="Your email address"
              />
            </div>
          </div>
          <div className="text-xs">
            <div>
              <Styledinput
                className="rounded-sm bg-gray text-lighterblack py-3 rounded my-6 px-4"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div>
              <Styledinput
                className="rounded-sm bg-gray text-lighterblack h-32 rounded my-2 px-4"
                type="text"
                placeholder="Your Message"
              />
            </div>
            <Styleddiv className="py-12 md:text-xs lg:text-xs sm:text-sm font-medium">
              <Link href="/">
                <a className="py-3 px-6 border-solid border border-green duration-300 rounded text-white bg-green hover:bg-green">
                Send Message
                </a>
              </Link>
              </Styleddiv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
