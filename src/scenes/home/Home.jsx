import useMediaQuery from "../../hooks/useMediaQuery";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import header2 from "../../assets/header2.svg";
import backgroundImage from "../../assets/rect.png";
import spinner from "../../assets/spinner.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SlideButton from "../../components/SlideButton";
import { motion } from "framer-motion";

const Home = ({ setSelectedPage }) => {
  const isAboveMdScreens = useMediaQuery("min-width:1060px");
  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
      {/* Images and Header */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage("home")}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-[14rem]  "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, anount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <div>
                <h1 className="mt-10 font-bold text-7xl max-sm:text-[72px] max-sm:leading-[82px] py-4 ">
                  <span className="bg-gradient-greenblue inline-block mt-3 text-transparent bg-clip-text pb-4 text-7xl">
                    احصل
                  </span>{" "}
                  <span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap text-black-10 text-6xl mr-[-40px]">
                    على
                  </span>
                  <br />
                  جسدك المثالي
                </h1>
              </div>
            </div>
            <p className="text-gray-10 font-light text-base py-10">
              تُعتبر الصحة ثروة الإنسان، حيث تؤدي الرياضة دوراً مُهمّاً وحيوياً
              في بناء الأجسام، حيث لا يُوجد للممارسة الرياضة أيّ بديل للحفاظ على
              صحة الجسم البدنية ونشاطه
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="flex items-center justify-start gap-5 -mt-5 py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, anount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              href="#subscriptions"
              onClick={() => setSelectedPage("subscriptions")}
            >
              <SlideButton>ابدأ التمرين الآن</SlideButton>
            </AnchorLink>

            <AnchorLink
              className="cursor-pointer  flex items-center text-md  font-semibold text-black-10 hover:text-blue-10 transition duration-200"
              onClick={() => setSelectedPage("about-lina")}
              href="#about-lisa"
            >
              <PlayCircleIcon className="w-12 h-12" />
              <p>شاهد العرض التجريبي</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Images */}
        <div className="hidden md:block">
          <div className="hidden md:block">
            <div className="relative ">
              {/* Background Image */}
              <img
                src={backgroundImage}
                alt="Background"
                className=" w-[27rem] h-auto absolute -top-10 -left-[85px] -ml-10 object-cover z-10 "
              />

              {/* Spinner */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <img
                  src={spinner}
                  alt="Spinner"
                  className="w-[25rem] h-auto animate-custom-spin absolute top-[40%] left-[43%] transform -translate-x-1/2 -translate-y-1/2 "
                />
              </div>

              {/* Header Image */}
              <img
                src={header2}
                alt="Home Image"
                className=" w-[55rem] h-auto -left-20 -ml-10 relative z-20 "
              />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Join tag */}
      <div className="flex items-center justify-center w-full bg-transparent opacity-95 p-10 mt-10 md:-mt-20 ">
        <div className="flex items-center justify-between w-[87%] -mt-10 bg-gray-200 p-10 rounded-lg  shadow-lg">
          <div className="flex items-center w-full justify-start gap-3 flex-col md:flex-row">
            <AnchorLink
              href="#subscriptions"
              onClick={() => setSelectedPage("subscriptions")}
            >
              <SlideButton className="w-[20%] md:w-auto">انضم الآن</SlideButton>
            </AnchorLink>

            <p className="text-black-10 w-full md:w-[50%] mr-10   font-medium text-xl text-center md:text-right">
              ممارسة الرياضة هي البداية لكل شيء، البداية لحياة صحية وحياة أفضل
              خالية من أي ضرر أو مشاكل جسدية وصحية، أن الحياة رائعة عند ممارسة
              الرياضة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
