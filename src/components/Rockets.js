import React,{useState} from 'react'
import Rocketpopup from './Rocketpopup';
import './Rocket.css'
function Rockets() {
    const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {    id: 1, 
        src: 'https://t4.ftcdn.net/jpg/02/72/51/17/360_F_272511766_sI572Qc9PrDowwVQKu8UXTxVk1aEdccM.jpg', 
        title: 'Falcon 9', 
        description: 'Falcon 9 is a reusable two-stage rocket designed by SpaceX. It is capable of carrying satellites and crewed spacecraft.' 
    },
    { id: 2, 
      src: 'https://revolutionized.com/wp-content/uploads/sites/5/2022/05/rocket-launch-at-sunset.jpg', 
      title: 'SFX-9', 
      description: 'Falcon 9 is a reusable two-stage rocket designed by SpaceX. It is capable of carrying satellites and crewed spacecraft.' 
    },
    
    { id: 3, 
        src: 'https://t3.ftcdn.net/jpg/02/81/51/12/360_F_281511269_ex5zKhUitbRl1MqzvFsp8h7owEVSelO9.jpg', 
        title: 'Starlink', 
        description: 'Starlink is a satellite internet constellation project by SpaceX. It aims to provide high-speed internet to underserved areas globally' 
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
    <div>
       <div className="flex-grow lg:ml-64 pt-16 bg-stone-900 bg-cover bg-center w-full min-h-screen" style={{ backgroundImage: `url('https://media.architecturaldigest.com/photos/57b1fa3321fff4dc072ead61/16:9/w_2560%2Cc_limit/spacex-falcon-9-landing-01.jpg')` }}>
       <div className="main-container">
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-container" onClick={() => openPopup(image)}>
            <img src={image.src} alt={image.title} className="bubble-up" />
          </div>
        ))}
      </div>
      {showPopup && selectedImage && (
        <Rocketpopup image={selectedImage} closePopup={closePopup} />
      )}
    </div>
      </div>
    </div>
  )
}

export default Rockets
