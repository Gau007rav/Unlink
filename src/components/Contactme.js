import React, { useEffect } from "react";
import LinksSection from "./LinksSectiom";

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
        <div className="card bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 opacity-0 translate-y-4 hover:scale-125">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Education</h2>
          <p className="font-serif text-lg">
            M-tech in computer science and engineering
          </p>
          <p className="font-serif text-lg">
            B-tech in computer science and engineering
          </p>
          <p className="font-serif text-lg">12 from CBSE board with PCM</p>
          <p className="font-serif text-lg">10 from CBSE board</p>
        </div>
        <div className="card bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 opacity-0 translate-y-4 hover:scale-125">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Skills</h2>
          <p className="font-serif text-lg">Languages: JavaScript, Python</p>
          <p className="font-serif text-lg">
            Frameworks: React.js, Node.js, Express.js
          </p>
          <p className="font-serif text-lg">HTML, CSS, Git, GitHub</p>
          <p className="font-serif text-lg">Database:MongoDB,MySql</p>
        </div>
        <div className="card bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 opacity-0 translate-y-4 hover:scale-125">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Experience</h2>
          <p className="font-serif text-lg">
            I have accumulated 2 years of experience in front-end development
            and an additional year in backend development, primarily within the
            e-commerce domain. During this time, I worked at Rastech Digital, a
            startup where I successfully completed two significant projects. My
            responsibilities included developing and maintaining landing pages
            and product description pages using React, as well as integrating
            data from APIs to dynamically display content on the user interface.
            In addition to my practical experience, I have enhanced my skills
            through a Full Stack Development Bootcamp at Newton School, where I
            deepened my understanding of modern development practices and
            technologies.
          </p>
        </div>
      </div>
      <div className="links">
        <LinksSection></LinksSection>
      </div>
    </div>
  );
}

export default CardsSection;
