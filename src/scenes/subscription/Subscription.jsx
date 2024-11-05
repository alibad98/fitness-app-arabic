import bg from "../../assets/vector.png";
import { motion } from "framer-motion";

const Subscription = () => {
  return (
    <motion.div
      id="contact"
      className="relative h-[50%] z-20 flex my-16 items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Main Container for Background and Content */}
      <div className="relative max-w-[80%] w-full rounded-lg overflow-hidden">
        {/* Color Background Layer */}
        <div className="absolute inset-0 bg-[#effcf4] rounded-3xl"></div>

        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            opacity: 0.5, // Adjust the opacity if needed to see the image with the color background
          }}
        ></div>

        {/* Content Layer */}
        <div className="flex flex-col md:flex-row items-center justify-center relative z-10 mx-auto px-4 md:px-20 py-10">
          {/* Right */}
          <div className="flex flex-col justify-center mb-4 md:mb-0 w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-extrabold pt-3 pb-3 max-w-[80%]">
              اشترك مع ليزا فراج لتحصل على معلومه رياضيه كل اسبوع{" "}
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-[60%]">
              في هذا لاشتراك سوف يصلك مقاطع فيديو عن الصحه بشكل عام وعن التمارين
              الرياضيه بشكل خاص المقدمه من المدربه ليزا فراج{" "}
            </p>
          </div>
          {/* Left */}
          <form className="flex flex-col md:flex-row w-full md:w-1/3 relative">
            <div className="flex w-full relative">
              <input
                type="text"
                placeholder="ادخل الايميل الخاص بك"
                className="flex-grow border-2 border-green-10 rounded-lg px-4 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-green-10 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute left-0 top-0 h-full bg-gradient-greenblue hover:opacity-75 transition-all duration-200 text-black-10 px-5 rounded-lg scale-95"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Subscription;
