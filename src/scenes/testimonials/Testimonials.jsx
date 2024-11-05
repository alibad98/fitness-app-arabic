import { useState } from "react";
import test_img from "../../assets/testimonial.png";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import SlideButton from "../../components/SlideButton";

const Testimonials = ({ setSelectedPage }) => {
  const testimonials = [
    {
      img: test_img,
      text: "شكرا لاعظم كوتش واجمل كوتش ليزا التمرينه كانت عظيمه جدا جدا وممتازه وفعلا حسيت بتحسن في ظهري بشكل ملحوظ وكبير جدا ",
      name: "@سميره نجيب",
    },
    {
      img: test_img,
      text: "شكرا لاعظم كوتش واجمل كوتش ليزا التمرينه كانت عظيمه جدا جدا وممتازه وفعلا حسيت بتحسن في ظهري بشكل ملحوظ وكبير جدا ",
      name: "@محمد عبد الرحمن",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="flex flex-col my-24 p-14 w-[90%] mx-auto"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage("testimonials")}
        className="flex-col gap-5 mx-auto p-8 rounded-lg"
      >
        <h1 className="font-extrabold text-2xl mb-4">اراء المشتركين </h1>

        <SlideButton>قم بمشاركة رايك معنا</SlideButton>

        {/* Responsive layout for the testimonial section */}
        <div className="grid gap-8 my-12 md:grid-cols-4 w-full sm:grid-cols-1">
          {/* Testimonial Text Area */}
          <div className="col-span-2 bg-gray-100 rounded-r-md p-8 flex flex-col h-full md:-ml-8 sm:ml-0">
            <div>
              <h1 className="text-xl p-7 font-bold">
                {testimonials[current].name}
              </h1>
            </div>
            <div className="flex-grow">
              <motion.p
                className="text-base text-gray-700 mt-4"
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {testimonials[current].text}
              </motion.p>
            </div>
            <div className="flex justify-start gap-4 px-7 mt-4">
              <button onClick={prevTestimonial} className="px-4 py-2 ">
                <ArrowRightIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button onClick={nextTestimonial} className="px-4 py-2 ">
                <ArrowLeftIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Navigation by Names */}
          <div className="flex flex-col items-start bg-gray-100 rounded-l-md border-r-2 border-gray-300 justify-center md:col-span-1 sm:col-span-full">
            {testimonials.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`px-4 py-2 font-medium ${
                  current === index
                    ? "text-blue-10 border-blue-10 border-r-[4px]"
                    : "text-black-10"
                } bg-transparent -mr-[3px] hover:opacity-75 transition-all`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Testimonial Image */}
          <div className="shrink-0 flex md:col-span-1 sm:col-span-full">
            <img
              src={testimonials[current].img}
              alt="testimonial"
              className="w-full rounded-md"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
