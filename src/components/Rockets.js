import React, { useState, useEffect } from "react";
import Rocketpopup from "./Rocketpopup";
import UpcomingLauch from "./Launches/UpcomingLauch";
import PreviousLaunch from "./Launches/PreviousLaunch";
import "./Rocket.css";
import "./Loading.css";
import Banner from "./Banner";
function Rockets() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [error1, setError1] = useState(null);
  const [pastLaunches, setPastLaunches] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    const fetchUpcomingLaunches = async () => {
      setLoading1(true);
      try {
        const response = await fetch(
          "https://api.spacexdata.com/v3/launches/upcoming"
        );
        const data = await response.json();
        setUpcomingLaunches(data);
      } catch (error) {
        setError1(error);
      } finally {
        setLoading1(false);
      }
    };

    fetchUpcomingLaunches();
  }, []);

  useEffect(() => {
    const fetchPastLaunches = async () => {
      setLoading2(true);
      try {
        const response = await fetch(
          "https://api.spacexdata.com/v3/launches/past"
        );
        const data = await response.json();
        setPastLaunches(data);
      } catch (error) {
        setError2(error);
      } finally {
        setLoading2(false);
      }
    };

    fetchPastLaunches();
  }, []);

  if (loading1 || loading2) {
    return (
      <div className="loader">
        <div className="logo-container">
          <div className="logo">Interstellar</div>
        </div>
      </div>
    );
  }

  if (error1)
    return <div>Error fetching upcoming launches: {error1.message}</div>;
  if (error2) return <div>Error fetching past launches: {error2.message}</div>;

  const images = [
    {
      id: 1,
      src: "https://t4.ftcdn.net/jpg/02/72/51/17/360_F_272511766_sI572Qc9PrDowwVQKu8UXTxVk1aEdccM.jpg",
      title: "Falcon 9",
      description:
        "Falcon 9 is a reusable two-stage rocket designed by SpaceX. It is capable of carrying satellites and crewed spacecraft.",
    },
    {
      id: 2,
      src: "https://revolutionized.com/wp-content/uploads/sites/5/2022/05/rocket-launch-at-sunset.jpg",
      title: "SFX-9",
      description:
        "Falcon 9 is a reusable two-stage rocket designed by SpaceX. It is capable of carrying satellites and crewed spacecraft.",
    },
    {
      id: 3,
      src: "https://t3.ftcdn.net/jpg/02/81/51/12/360_F_281511269_ex5zKhUitbRl1MqzvFsp8h7owEVSelO9.jpg",
      title: "Starlink",
      description:
        "Starlink is a satellite internet constellation project by SpaceX. It aims to provide high-speed internet to underserved areas globally.",
    },
  ];

  const openPopup = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedImage(null);
  };

  return (
    <div
      className="pt-20 bg-stone-900 bg-cover bg-center w-full min-h-screen"
      style={{
        backgroundImage: `url('https://media.architecturaldigest.com/photos/57b1fa3321fff4dc072ead61/16:9/w_2560%2Cc_limit/spacex-falcon-9-landing-01.jpg')`,
      }}
    >
      <div className="main-container p-4">
        <div className="image-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="image-container cursor-pointer"
              onClick={() => openPopup(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="bubble-up transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
        {showPopup && selectedImage && (
          <Rocketpopup image={selectedImage} closePopup={closePopup} />
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        {upcomingLaunches.slice(0, 5).map((launch) => (
          <UpcomingLauch
            key={launch.flight_number}
            missionName={launch.mission_name}
            time={new Date(launch.launch_date_utc).toLocaleString()}
            rocket={launch.rocket.rocket_name}
            flightNumber={launch.flight_number}
            links={launch.links}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 mt-4">
        {pastLaunches.slice(0, 4).map((launch) => (
          <PreviousLaunch
            key={launch.flight_number}
            missionName={launch.mission_name}
            time={new Date(launch.launch_date_utc).toLocaleString()}
            rocket={launch.rocket.rocket_name}
            flightNumber={launch.flight_number}
          />
        ))}
      </div>
      <Banner></Banner>
    </div>
  );
}

export default Rockets;
