import React from "react";
import { AppText } from "./../Constants";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { home } from "./../assets";

const Home = () => {
  return (
    <div
      id="home"
      className="flex p-[20px] md:px-20 justify-between flex-col md:flex-row  pt-20"
    >
      <div className="flex w-full flex-row  justify-end">
        <div className="flex w-full flex-col  items-start content-end m-5">
          <h1 className="text-[35px] md:text-[40px] font-bold">
            {AppText.hello}
          </h1>
          <div className="flex">
            <h1 className="text-[35px]  md:text-[40px]  font-bold mr-3">
              {AppText.Iam}
            </h1>
            <Typewriter
              options={{
                strings: [
                  AppText.aida,
                  AppText.FrontedDeveloper,
                  AppText.UIUXDesigner,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <h1 className="my-5 text-gray-400 text-base md:text-md  lg:text-lg xl:text-xl">
              Crafting Interactive Experiences Since 2022 with React JS
            </h1>
          </div>
          <button>
            <a
              href={require("../assets/AidaSufaj.pdf")}
              download={"Aida's Resume"}
              target="_blank"
              rel="noreferrer"
              className="text-center rounded-lg py-2 px-4 text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition duration-300 inline-flex items-center"
              style={{ textDecoration: "none" }}
            >
              Download My CV
              <FaCloudDownloadAlt style={{ marginLeft: "6px" }} />
            </a>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="md:w-1/2 flex justify-center items growAndShrink">
          <img
            src={home}
            alt="Home"
            className="home__image"
            style={{ width: "900px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
