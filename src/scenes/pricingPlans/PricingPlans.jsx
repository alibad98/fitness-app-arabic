import { pricingData } from "./pricing-data.js";
import check from "../../assets/check.png";
import { useState } from "react";
import { motion } from "framer-motion";
import bg from "../../assets/vector.png";

let tabs = [
  {
    id: "month",
    label: "ثلاثه اشهر",
  },
  {
    id: "year",
    label: "الخطه السنويه",
  },
];

const PricingPlans = ({ setSelectedPage }) => {
  const [seletedTab, setSelectedTap] = useState(tabs[0].id);
  return (
    <div
      id="subscriptions"
      className="w-full mx-auto flex justify-center flex-col p-10"
    >
      {/* Titles */}
      <motion.div
        onViewportEnter={() => setSelectedPage("subscriptions")}
        className="text-center items-center mx-auto justify-center flex-col w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="font-extrabold text-5xl leading-8 text-black-10 py-6 mt-[50px]">
          اختر الخطه المناسبه{" "}
        </h1>
        <p className="font-extralight text-lg leading-4 text-gray-400 my-3">
          تُعتبر الصحة ثروة الإنسان، حيث تؤدي الرياضة دوراً مُهمّاً وحيوياً في
          بناء الأجسام، حيث لا يُوجد{" "}
        </p>
      </motion.div>
      <div className="container mx-auto">
        {/* Tabs section */}
        <motion.div
          className="flex justify-center space-x-3 my-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTap(tab.id)}
              className={`${
                seletedTab === tab.id
                  ? "font-medium scale-105"
                  : "hover:opacity-70"
              } relative text-center transition duration-150 mx-2 rounded-lg px-4 py-2 text-lg font-medium text-black-10 outline-2 outline-green-10 focus-visible:outline`}
            >
              {seletedTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 full bg-gradient-greenblue rounded-xl"
                  style={{
                    borderRadius: 13,
                  }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Pricing cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 py-10 max-w-7xl mx-auto px-2">
          {pricingData.map((plan) => (
            <motion.div
              className="border-green-10 border-2 shadow-lg p-8 bg-white rounded-2xl flex flex-col"
              key={plan.title}
              whileHover={{ y: -30 }}
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <h3 className="text-lg text-slate-600 font-semibold">
                {plan.title}
              </h3>
              <div className="flex items-end justify-start">
                <h2 className="py-4 font-black text-black-10 text-3xl">
                  {plan.price}
                  {plan.currency}
                </h2>
                <h2 className="py-4 font-medium mr-7 line-through text-gray-500 text-1xl">
                  {plan.sale}
                  {plan.currency}
                </h2>
              </div>
              {/* Features */}
              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li
                    className="text-base leading-6 text-slate-600 font-medium flex items-center"
                    key={feature}
                  >
                    <img className="h-4 w-4 shrink-0" src={check} alt="Check" />
                    <span className="mr-3">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Call to action */}
              <a
                href="#"
                className={`text-black-10 px-7 py-4 text-center rounded-lg font-medium leading-4 block mt-9
                    ${
                      plan.popular
                        ? "bg-gradient-greenblue shadow-sm"
                        : "border-green-10 border-2 hover:opacity-60 transition duration-200"
                    }`}
              >
                {plan.btn}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
