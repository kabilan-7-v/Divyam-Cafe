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
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 500);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full flex justify-center items-center pt-8 relative h-[200px]">
      {/* Rotating Background Image */}
      <img
        src={image1}
        alt="Rotating"
        className="w-40 h-40 object-contain"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 1s linear',
        }}
      />

      {/* Fixed Center Image */}
      <img
        src={image2}
        alt="Center"
        className="absolute w-20 h-20"
      />
    </div>
  );
};

export default RotatingImage;
