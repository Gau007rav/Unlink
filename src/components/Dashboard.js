import React from "react";
import "./About.css";
import PlayGround from "./PlayGround";
import Planetarymotion from "./Planetarymotion";
import Footer from "./Footer";
import OpenAIChat from "./OpenAiChat";

function Dashboard() {
  return (
    <>
      <div
        className="pt-20 bg-stone-900 bg-cover bg-center w-full min-h-screen"
        style={{
          backgroundImage: `url('https://www.pixel4k.com/wp-content/uploads/2018/10/face-abstract-shiny-dark-4k_1539370567.jpg.webp')`,
        }}
      >
        <div className="flex flex-col items-center mt-20 px-4 lg:px-10">
          <span className="text-white text-4xl lg:text-6xl font-sans font-bold text-center">
            Interstellar Space Launches
          </span>
          <p className="text-white font-semibold text-lg lg:text-xl mt-2 text-center">
            Discover Infinite with us
          </p>
          <p className="text-white text-base lg:text-lg font-mono max-w-4xl mt-5 text-center">
            "Old age should burn and rave at close of day; Rage, rage against
            the dying of the light. Though wise men at their end know dark is
            right, Because their words had forked no lightning they Do not go
            gentle into that good night. Rage, rage against the dying of the
            light.”
          </p>
          <div className="flex flex-col justify-center items-center p-4 lg:p-8">
            <h1 className="text-white text-2xl lg:text-5xl font-bold max-w-4xl text-center mb-6 lg:mb-12">
              Our Destinations
            </h1>
            <ul className="space-y-4">
              <li className="text-white text-xl lg:text-2xl font-serif hover:text-gray-300 transition-colors">
                Moon
              </li>
              <li className="text-white text-xl lg:text-2xl font-serif hover:text-gray-300 transition-colors">
                Mars
              </li>
              <li className="text-white text-xl lg:text-2xl font-serif hover:text-gray-300 transition-colors">
                Space Stations
              </li>
            </ul>
          </div>
          <OpenAIChat></OpenAIChat>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center bg-black p-6 lg:p-20">
        <section className="text-center lg:text-left font-bold text-white text-4xl lg:text-6xl p-4 lg:p-8 max-w-screen-lg">
          Human Space Mission
          <p className="font-normal font-serif text-white text-xl lg:text-3xl mt-4">
            Road to make travel Multiplanetary
          </p>
          <div className="mt-8">
            <PlayGround />
          </div>
        </section>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <Planetarymotion />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
