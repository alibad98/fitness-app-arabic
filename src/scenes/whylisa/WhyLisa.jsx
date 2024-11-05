import { motion } from "framer-motion";
import whylisa from "../../assets/whylisa.svg";

const WhyLisa = ({ setSelectedPage }) => {
  return (
    <div id="why-lisa" className="text-center py-6 sm:py-10 px-4 sm:px-9">
      <h1 className="text-2xl sm:text-3xl font-bold md:my-12 pb-6 sm:pb-9">
        لماذا ليزا فراج
      </h1>

      <motion.img
        onViewportEnter={() => setSelectedPage("why-lisa")}
        src={whylisa}
        alt="Why Lisa"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%]"
      />
    </div>
  );
};

export default WhyLisa;
