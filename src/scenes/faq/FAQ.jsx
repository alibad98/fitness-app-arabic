import { useState } from "react";
import { faqData } from "./faqQuestion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="bg-white rounded-lg shadow p-4 bg-gradient-greenblue opacity-80 cursor-pointer mb-1"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 text-gray-600" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 text-gray-600" />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-gray-700 text-base mt-2 font-medium"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = ({ setSelectedPage }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="relative bg-gray-100 py-16 px-4">
      {/* Custom Shape Divider */}
      <div className="curve-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-auto"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          />
        </svg>
      </div>

      <motion.div
        onViewportEnter={() => setSelectedPage("faq")}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-4">الأسئلة الشائعة</h2>
        <p className="text-base text-gray-400 mb-8 text-center">
          لاسئله لاكثر شيوعا بين مرتادي الموقع , للاجابه عن اي سوال يتبادر الى
          ذهنك خاص باالصحه لا تتردد بطرحه{" "}
        </p>
        {/* FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          <div className="flex flex-col  gap-4 h-full">
            {faqData
              .slice(0, Math.ceil(faqData.length / 2))
              .map((item, index) => (
                <AccordionItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                />
              ))}
          </div>
          <div className="flex flex-col  gap-4 h-full">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index + Math.ceil(faqData.length / 2)}
                onToggle={() =>
                  toggleAccordion(index + Math.ceil(faqData.length / 2))
                }
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="curve-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FAQ;
