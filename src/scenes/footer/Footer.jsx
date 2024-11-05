import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareSnapchat,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";

const Footer = () => {
  const headerStyle = "text-lg md:text-xl font-semibold text-black-10 mb-8";
  const pStyle =
    "text-sm md:text-base font-light leading-5 md:leading-6 my-2 md:my-3 text-gray-500";

  return (
    <footer className="bg-[#e8fdff] px-4 md:px-16 lg:px-28 py-10  md:py-20 mt-10 md:mt-20 flex justify-center relative">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-9 mb-10 px-5 md:px-10 w-[95%] md:w-[90%]">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="logo" className="w-24 md:w-auto" />
          </div>
          <div className="col-span-2">
            <h2 className={`${headerStyle}`}>
              ليزا{" "}
              <span className="bg-gradient-greenblue inline-block text-transparent bg-clip-text">
                فراج
              </span>
            </h2>
            <p className={`${pStyle}`}>
              ليزا فراج هي مدربة رياضية متخصصة في اللياقة البدنية والصحة العامة،
              تشتهر بتقديم برامج تدريبية متكاملة تهدف إلى تحسين اللياقة البدنية
              وزيادة القوة والمرونة.
            </p>
          </div>
          <div>
            <h2 className={`${headerStyle}`}>وصول سريع</h2>
            <p className={`${pStyle}`}>الاشتراكات</p>
            <p className={`${pStyle}`}>الاسئله الشائعه</p>
          </div>
          <div>
            <h2 className={`${headerStyle}`}>روابط مهمه</h2>
            <p className={`${pStyle}`}>سياسة الخصوصية</p>
            <p className={`${pStyle}`}>الشروط والاحكام</p>
          </div>
          <div>
            <h2 className={`${headerStyle}`}>تواصل معنا</h2>
            <ul className="flex items-center gap-3">
              {[
                faSquareFacebook,
                faSquareSnapchat,
                faSquareInstagram,
                faSquareXTwitter,
              ].map((icon, index) => (
                <li key={index} className="cursor-pointer">
                  <FontAwesomeIcon
                    icon={icon}
                    style={{
                      width: 24,
                      height: 24,
                      color: "#000000",
                    }}
                    className="md:w-8 md:h-8"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 bg-gradient-greenblue w-full py-2 absolute bottom-4 md:bottom-6 left-0">
          <p className="font-extralight text-xs text-gray-800">
            2024 All Right Reserved ©
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
