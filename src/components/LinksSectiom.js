import React from "react";

function LinksSection() {
  const links = [
    { name: "GitHub", url: "https://github.com/Gau007rav" },
    { name: "LinkedIn", url: "https://linkedin.com/in/gaurav-singh-6b902b204" },
    { name: "Project1", url: "https://Airborn.com" },
    { name: "Project2", url: "https://mcneilus.com" },
    { name: "Project3", url: "https://yourproject2.com" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gray-900 mt-20 p-10">
      <h2 className="text-3xl font-semibold text-white mb-8">My Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 text-center"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default LinksSection;
