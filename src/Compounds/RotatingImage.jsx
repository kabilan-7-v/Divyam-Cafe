import { useEffect, useState } from 'react';
import image1 from '../assets/coffee.png';
import image2 from '../assets/god.png';

const RotatingImage = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setRotation((prevRotation) => prevRotation + 90);
        setIsPaused(true); // Pause after rotating
        setTimeout(() => setIsPaused(false),500); // Resume after 1 second pause
      }
    }, 2000); // Total cycle: 1 sec rotation + 1 sec pause

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="flex justify-center items-center  w-full bg-white pt-5 relative">
      {/* Rotating Image */}
      <img
        src={image1}
        alt="Main Dish"
        className="object-contain max-w-full max-h-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 1s linear',
        }}
      />

      {/* Fixed Center Image */}
      <img
        src={image2}
        alt="Center Image"
        className="absolute w-20 h-20"
      />
    </div>
  );
};

export default RotatingImage;
