const Section = () => {
  return (
    <main>
      <section className="xl:pt-40 sm:pt-20 ">
        {/* Subtitle  */}
        <div className="subtitle text-center flex flex-col gap-4 mb-8 font-bold">
          <span className="tracking-widest text-blue-800 text-lg">
            PROMOTIONS
          </span>
          <h1 className="xl:text-4xl sm:text-xl xl:tracking-wider sm:tracking-normal">
            Our Promotions Events
          </h1>
        </div>
        {/* promotion products  */}
        <div className="grid grid-cols-4 gap-3">
          {/* left side */}
          <div className="xl:col-span-2 gap-1 sm:col-span-4 ">
            {/* top  */}
            <div className=" flex bg-slate-300 justify-between items-center rounded ">
              <div className="mdd:tracking-wider sm:tracking-normal  mdd:px-4 sm:px-2">
                <h1 className="mdd:text-lg sm:text-base font-semibold ">
                  GET UPTO
                  <span className="ml-2 mdd:text-2xl sm:text-base font-bold">
                    60%
                  </span>
                </h1>
                <p>For the summer season</p>
              </div>

              <img
                height={300}
                width={300}
                src="/images/event1.webp"
                alt=""
                className="overflow-hidden"
              />
            </div>

            {/* bottom  */}
            <div className="  bg-slate-900  mt-2 rounded">
              <div className="text-center mdd:py-24 sm:py-10 text-white">
                <h1 className="font-bold mdd:text-3xl sm:text-xl mdd:tracking-wider sm:tracking-normal">
                  GET 30% OFF
                </h1>
                <h2 className="font-light mdd:text-base sm:text-sm mt-2 tracking-wider">
                  USE PROMO CODE
                </h2>
                <button className="font-semibold mdd:tracking-wider sm:tracking-normal border border-transparent bg-stone-700 px-2 py-1 rounded">
                  DINEWEEKENDABLE
                </button>
              </div>
            </div>
          </div>

          {/* right  */}

          <div className="bg-[#efe1c7] rounded xl:col-span-1 md:col-span-2 sm:col-span-4  overflow-hidden ">
            <div className="base:px-5 sm:px-5 py-6">
              <h1 className="font-semibold">Flex Sweatshirt</h1>
              <div className="flex">
                <del>$100.00</del>
                <h2 className="mx-2 font-bold">$75.00</h2>
              </div>
            </div>
            <img
              height={300}
              width={300}
              src="/images/event2.webp"
              alt=""
              className="mdd:h-[84%]  sm:mx-auto xl:mx-0"
            />
          </div>
          <div className="bg-[#d7d7d9] rounded xl:col-span-1 md:col-span-2 sm:col-span-4 overflow-hidden">
            <div className="base-px-3 sm:px-5 py-6  ">
              <div className="font-semibold">
                <h1>Flex Sweatshirt</h1>
                <div className="flex">
                  <del>$100.00</del>
                  <h2 className="mx-2 font-bold">$75.00</h2>
                </div>
              </div>
            </div>
            <img
              height={300}
              width={300}
              src="/images/event3.webp"
              alt=""
              className=" h-[84%] sm:mx-auto xl:mx-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Section;
