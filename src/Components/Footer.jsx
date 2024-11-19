import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white  m-3">
      <div className="xl:grid xl:grid-cols-5 ">
        {/* left side  */}
        <div className="col-span-2 flex flex-col xl:space-y-16 sm:space-y-5 sm:w-full xl:w-4/5">
          <img src={"/images/Logo.webp"} alt="logo" height={32} width={176} />

          <p className="xl:font-normal xl:text-base sm:text-sm text-gray-500 w-full">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          {/* Social Links  */}
          <div className="flex gap-4 sm:pb-5">
            <div className="py-3 px-3 bg-[#f1f1f1] rounded cursor-pointer">
              <Twitter />
            </div>
            <div className="py-3 px-3 bg-[#f1f1f1] rounded cursor-pointer">
              <Facebook />
            </div>
            <div className="py-3 px-3 bg-[#f1f1f1] rounded cursor-pointer">
              <Linkedin />
            </div>
          </div>
        </div>
        {/* right side  */}

        <div>
          <h3 className="font-bold  sm:mt-6 lg:mt-0 text-lg tracking-wide text-gray-600">
            Company
          </h3>
          <ul className="">
            <li className="xl:mt-6 sm:my-2  font-medium text-base text-gray-600 cursor-pointer">
              About
            </li>
            <li className="xl:mt-6  sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              Terms of use
            </li>
            <li className="xl:mt-6  sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              Privacy policy
            </li>
            <li className="xl:mt-6  sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              How it works
            </li>
            <li className="xl:mt-6  sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              Contact us
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold sm:mt-6 lg:mt-0 text-lg tracking-wide text-gray-600">
            Support
          </h3>
          <ul className="xl:mt-4">
            <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              Support Center
            </li>
            <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              24h Services
            </li>
            <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              Quick Chat
            </li>
          </ul>
        </div>
        <div className="sm:hidden xl:inline-block">
          <h3 className="font-bold  sm:mt-6 lg:mt-0 text-lg tracking-wide text-gray-600">
            Contact
          </h3>
          <ul className="xl:mt-4">
            <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              Whatsapp
            </li>
            <li className="xl:mt-6 sm:my-2 font-medium text-base text-gray-600 cursor-pointer">
              Support 24h
            </li>
          </ul>
        </div>
      </div>
      <div className="xl:mt-24  sm:mt-9 border-t border-gray-700 grid lg:grid-cols-3 sm:grid-cols-2  text-center mb-0 ">
        <p className="font-normal text-base text-gray-700">
          Copyright &copy; 2024 Dine Market
        </p>
        <p className="font-normal text-base text-gray-700">
          Design by:
          <span className="font-bold"> M Mughees Javed</span>
        </p>
        <p className="font-normal text-base text-gray-700 sm:py-4 sm:col-span-2 lg:col-span-1 xl:py-0">
          Code by:
          <span className="font-bold"> M Mughees Javed</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
