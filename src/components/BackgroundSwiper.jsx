// components/BackgroundSwiper.jsx
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const BackgroundSwiper = ({ images, slug }) => {
  const router = useRouter();
  const { locale } = router;
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const isRTL = locale === "ar";

  // Auto-rotate images
  useEffect(() => {
    if (images && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1800); // 1.8 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Reset interval on manual navigation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1800);
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-screen bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={`${slug}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${image}')` }}
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div
          className={`absolute bottom-8 z-20 flex space-x-2 ${
            isRTL ? "space-x-reverse" : ""
          } ${isRTL ? "right-8" : "left-8"}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundSwiper;
