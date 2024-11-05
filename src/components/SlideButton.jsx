import { motion } from "framer-motion";

const SlideButton = ({
  children,
  hoverColor = "#151F29",
  textColor = "black",
  textColorOnHover = "white",
}) => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-8 py-2 bg-gradient-greenblue rounded-[12px] transition duration-300"
      whileHover={{
        background: hoverColor,
        color: textColorOnHover,
      }}
      style={{ color: textColor }}
    >
      {/* Animated background color */}
      <motion.span
        className="absolute inset-0 rounded-[12px]"
        initial={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
      />
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default SlideButton;
