import React, { useEffect } from "react";
import LinksSection from "./LinksSectiom";
import "../App.css";
function CardsSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove("opacity-0");
        card.classList.add("opacity-100");
        card.classList.add("translate-y-0");
      }, index * 2000); // 2 seconds delay between each card
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6 lg:p-8 ">
      <div className="text-4xl md:text-3xl font-semibold text-white mb-4 mt-28 lg:mb-8 transform transition-transform duration-300 hover:scale-110">
        Gaurav Kumar
      </div>
      <div className="text-lg md:text-xl font-thin text-white mb-4 transform transition-transform duration-300 hover:scale-110">
        gaurav033singh@gmail.com
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-16">
        <div class="card">
          <h1 className="font-bold text-xl">Education</h1>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
          <div class="card__content">
            <p class="card__title">Education</p>
            <p class="card__description">
              <ul className="text-black">
                <li>M-tech in Computer Science and Engineering</li>
                <li>B-tech in Computer Science and Engineering</li>
                <li>12 from CBSE Board PCM</li>
                <li>10 from CBSE board</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card">
          <h1 className="font-bold text-xl">Skills</h1>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
          <div class="card__content">
            <p class="card__title">Skills</p>
            <p class="card__description">
              <ul className="text-black">
                <li>Languages:Javascript,Python</li>
                <li>Framwork:React.js,Express.js,Node.js</li>
                <li>Others:HTML,CSS,Git,Github</li>
                <li>Database:MongoDb,MySql</li>
              </ul>
            </p>
          </div>
        </div>

        <div class="card">
          <h1 className="font-bold text-xl">Experience</h1>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
          <div class="card__content text-black">
            <p class="card__title text-black">Experience</p>
            <p className="card__description text-black">
              I have accumulated 2 years of experience in front-end development
              and an additional year in backend development, primarily within
              the e-commerce domain. During this time, I worked at Rastech
              Digital, a startup where I successfully completed two significant
              projects. My responsibilities included developing and maintaining
              landing pages and product description pages using React, as well
              as integrating data from APIs.
            </p>
          </div>
        </div>
      </div>
      <div className="links">
        <LinksSection></LinksSection>
      </div>
    </div>
  );
}

export default CardsSection;
