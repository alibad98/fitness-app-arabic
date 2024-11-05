import { useState } from "react";
import bg from "../../assets/vector.png";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  {
    src: img1,
    paragraph: "هذه الشهادة تؤهل المدرب لتقديم برامج تدريبية.",
    description: "شهادة مدرب معتمد من الاتحاد الدولي للياقة البدنية (IFPA)",
  },
  {
    src: img2,
    paragraph: "  تؤهل المدرب لتقديم برامج تدريبية متخصصة وآمنة.",
    description: "شهادة مدرب معتمد من الاتحاد الدولي للياقة البدنية (IFPA)",
  },
  {
    src: img3,
    paragraph: "هذه الشهادة تؤهل المدرب لتقديم برامج تدريبية متخصصة وآمنة.",
    description: "شهادة مدرب معتمد من الاتحاد الدولي للياقة البدنية (IFPA)",
  },
  {
    src: img4,
    description: "هذه الشهادة تؤهل المدرب لتقديم برامج تدريبية متخصصة وآمنة.",
    paragraph: "هذه الشهادة تؤهل المدرب لتقديم برامج تدريبية متخصصة وآمنة.",
  },
];

const Certificates = (setSelectedPage) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div
      id="certificates"
      className="relative lg:min-h-screen z-20 my-16 flex items-center justify-center"
    >
      {/* Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-greenblue-light"></div>

      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          mixBlendMode: "overlay",
          backgroundSize: "contain",
        }}
      ></div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 w-[90%] md:w-4/5 h-full p-6">
        {/* Title and Description Column */}
        <div className="md:col-span-2 flex flex-col items-start justify-center p-4 md:p-8 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-8">
            شهادات المعتمدة
          </h2>
          <AnimatePresence>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-base md:text-lg text-gray-600"
            >
              {images[currentImage].description}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-md text-gray-600 opacity-50"
            >
              {images[currentImage].paragraph}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Column */}
        <div className="flex items-center justify-center">
          <AnimatePresence>
            <motion.img
              key={currentImage}
              src={images[currentImage].src}
              className="h-3/5 md:h-1/2 rounded-lg object-contain"
              initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Buttons Column */}
        <div className="flex flex-row md:flex-col items-center justify-center space-x-3 md:space-x-0 md:space-y-5">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`${
                currentImage === index
                  ? "bg-white scale-110"
                  : "opacity-75 bg-transparent"
              } px-3 py-2 text-black font-extrabold rounded-md`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
