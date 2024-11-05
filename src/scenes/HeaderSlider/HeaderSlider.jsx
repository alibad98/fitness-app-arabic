import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import play_icon from "../../assets/play_icon.png";
import video_icon from "../../assets/video_pic.png";
import imgOne from "../../assets/aboulina1.png";
import imgTwo from "../../assets/aboutlina2.png";
import SlideButton from "../../components/SlideButton";

const HeaderSlider = ({ setSelectedPage }) => {
  // State for tracking image positions and current image index
  const [positionIndexes, setPositionIndexes] = useState([0, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [imgOne, imgTwo];
  const descriptions = [
    "عملت ليزا لسنوات في البنوك، قبل أن تقرر تغيير مسارها المهني، حيث اتخذت قرارًا جريئًا بالانتقال من العمل المصرفي إلى العمل كمدربة رياضية للأطفال. وافتتحت أيضًا كوفي شوب صغير للمأكولات والمشروبات الصحية، إيمانًا منها بأهمية الصحة واللياقة البدنية. في عام 2021، انتقلت ليزا إلى الإمارات العربية المتحدة، حيث التحقت بأحد الكورسات الرياضية الدولية، وحصلت على شهادة دولية في الاستشارات والتدريب الرياضي، مما مكنها من تحسين الأداء الحركي والعضلي لجميع الفئات العمرية من الجنسين.",
    "ما يميز ليزا عن غيرها من المدربين هو مشاركتها في العديد من دورات الصحة النفسية، مما مكنها من التواصل بشكل مثالي مع المتمرّن وجعل النشاط الجسدي أحد أهم أولوياتهم، وظهرت أيضاً على العديد من الشاشات العربية والإماراتية والسورية، ونالت شهرة واسعة. شاركت ليزا في العديد من السباقات والتحديات في سوريا. بعد انتقالها إلى الإمارات، كما وشاركت في ماراثونات خيرية عدة في إمارة أبو ظبي ودبي، وتتجهز الآن للمشاركة في تحدي HYROX العالمي الذي سيقام في قطر في شهر مايو 2024.",
  ];

  const titles = ["رحله لينا فراج", "ما يميز لينا فراج"];

  const positions = ["center", "top"];
  const imageVariants = {
    center: { x: "10%", scale: 1.1, zIndex: 5, filter: "blur(0px)" },
    top: { x: "-40%", scale: 1.7, zIndex: 3, filter: "blur(4px)" },
  };

  const paragraphVariants = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle the next image transition
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 2
      );
      return updatedIndexes;
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      id="about-lisa"
      className="flex items-center justify-center flex-col space-x-0 mt-20"
    >
      <div className="flex items-center justify-center w-[85%] p-10 flex-col md:flex-row">
        {/* Right Section  */}
        <div className="flex flex-col items-start justify-center h-f w-full md:w-[45%] mb-10 md:mb-0">
          <motion.div onViewportEnter={() => setSelectedPage("about-lisa")}>
            <AnimatePresence mode="wait">
              <motion.h2
                className="text-black-10 text-3xl font-bold mb-4"
                key={currentIndex}
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.1, ease: "easeInOut" }}
              >
                {titles[currentIndex]}
              </motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                className="text-gray-500 text-lg mb-10"
                key={currentIndex}
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.1, ease: "easeInOut" }}
              >
                {descriptions[currentIndex]}{" "}
              </motion.p>
            </AnimatePresence>
            <SlideButton>اقرأ المزيد</SlideButton>
          </motion.div>
        </div>

        {/* Images Section */}
        <div className="relative w-full md:w-[55%]  justify-center items-center hidden md:flex">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-[12px]"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{ width: "40%", position: "absolute" }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center p-4 py-6 w-[85%] h-auto flex-col md:flex-row">
        {/* Video Player Placeholder */}
        <motion.div
          className="relative w-full md:w-[40%] h-auto rounded-md overflow-hidden shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img
            src={video_icon}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[22px]">
            <img src={play_icon} alt="Play" />
          </div>
        </motion.div>

        {/* Title Section */}
        <motion.h2
          className="text-2xl md:text-4xl w-full md:w-[50%] font-extrabold leading-relaxed text-black-10 mr-5 mt-5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          خلال رحلتكم الرياضيه ولان كل شخص منا بيطمح لاشي مختلف بوعدكم انه راح
          توصلو جميعا للنتيجه الى بدكن اياها !
        </motion.h2>
      </div>
    </div>
  );
};

export default HeaderSlider;
