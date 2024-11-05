import logo from "../../assets/logo.png";
import useMediaQuery from "../../hooks/useMediaQuery.js";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = ({ selectedPage, setSelectedPage, isNavTop }) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMdScreens = useMediaQuery("(min-width: 1060px)");
  const [isToggledMenu, setIsToggledMenu] = useState(false);
  const navBarColor = isNavTop
    ? "bg-transparent opacity-100"
    : "bg-green-10 drop-shadow opacity-90 ";
  return (
    <nav>
      <div
        className={`${flexBetween} ${navBarColor} fixed top-0 z-30 w-full py-4
        transition-all duration-300 ease-in-out`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16 `}>
            {/* Right */}
            <a
              href="#home"
              className={`w-20 h-auto transition duration-100 -ml-10
              ${
                isNavTop
                  ? "filter brightness-100"
                  : "filter brightness-0 invert"
              }`}
            >
              <img src={logo} alt="logo" />
            </a>

            {/* Left */}
            {isAboveMdScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-5 text-base `}>
                  <Link
                    page="الرئيسيه"
                    id="home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="عن ليزا فراج"
                    id="about-lisa"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="الاشتراكات"
                    id="subscriptions"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="الشهادات"
                    id="certificates"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="لماذا ليزا فراج؟"
                    id="why-lisa"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="معرض الصور"
                    id="gallery"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="الأسئله الشائعه"
                    id="faq"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="آراء المشتركين"
                    id="testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <AnchorLink href="#contact">
                    <button className="rounded-md bg-black-10 md:px-14 py-2 px-4 text-white hover:bg-blue-10 hover:text-white transition duration-500">
                      تواصل معنا
                    </button>
                  </AnchorLink>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-gradient-greenblue p-2 "
                onClick={() => setIsToggledMenu(!isToggledMenu)}
              >
                <Bars3Icon className="h-6 w-6 text-white " />
              </button>
            )}
          </div>
        </div>
      </div>
      <br />
      {/* Mobile Screens */}

      {!isAboveMdScreens && isToggledMenu && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed left-0 bottom-0 z-40 h-full w-[300px] bg-gradient-greenblue drop-shadow-xl"
        >
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsToggledMenu(!isToggledMenu)}>
              <XMarkIcon className="h-6 w-6 text-white mt-[-19px]" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="mr-[33%] flex flex-col gap-8 text-1xl">
            <Link
              page="الرئيسيه"
              id="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="عن ليزا فراج"
              id="about-lisa"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="الاشتراكات"
              id="subscriptions"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="الشهادات"
              id="certificates"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="لماذا ليزا فراج؟"
              id="why-lisa"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="معرض الصور"
              id="gallery"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="الأسئله الشائعه"
              id="faq"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="آراء المشتركين"
              id="testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
