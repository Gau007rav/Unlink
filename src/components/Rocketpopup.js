import React, { useState, useEffect } from "react";

function Rocketpopup({ image, closePopup }) {
  const [activeTab, setActiveTab] = useState("info");
  const [additionalImages, setAdditionalImages] = useState([]);

  useEffect(() => {
    if (activeTab === "details") {
      fetchAdditionalImages();
    }
  }, [activeTab]);

  const fetchAdditionalImages = async () => {
    // Replace with your API endpoint
    const apiUrl = `https://api.spacexdata.com/v3/rockets`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setAdditionalImages(data);
    } catch (error) {
      console.error("Error fetching additional images:", error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={closePopup}>
          ×
        </button>
        <h2>{image.title}</h2>
        <div className="tabs">
          <button
            className={`tab ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            Info
          </button>
          <button
            className={`tab ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </div>
        {activeTab === "info" && <p>{image.description}</p>}
        {activeTab === "details" && (
          <div className="additional-images">
            {additionalImages.length > 0 ? (
              additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.description}
                  className="additional-image"
                />
              ))
            ) : (
              <p>Loading additional images...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Rocketpopup;
