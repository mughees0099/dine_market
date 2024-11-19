const Feature = () => {
  return (
    <main>
      <section>
        <div>
          {/* subtitle  */}
          <div className="flex xl:justify-end sm:justify-center pt-0 xl:pb-8 sm:pb-6 mdd:mt-16 sm:mt-7 ">
            <h1 className="font-bold sm:text-[20px] mdd:text-[2.75rem] mdd:leading-[55px] sm:leading-10 tracking-[0.03rem] sm:w-[100%] xl:w-[45%]">
              Unique and Authentic Vintage Designer Jewellery
            </h1>
          </div>

          {/* content  */}
          <div className="grid xl:grid-cols-2 sm:grid-cols-1   pt-0 ">
            {/* left side  */}
            <div className="grid grid-cols-2 mdd:gap-8 sm:gap-5  justify-center items-center relative ">
              {/* featured background  */}
              <div className="font-extrabold text-[6.875rem] leading-[110px] absolute opacity-[0.04] xl:w-[80%] sm:hidden xl:inline-block">
                Different from others
              </div>
              <div className="mdd:mb-4 sm:mb-1">
                <h3 className="mdd:font-bold sm:font-semibold mdd:text-lg sm:text-base  mdd:mb-4 sm:mb-1">
                  Using Good Quality Materials
                </h3>
                <p className="mdd:font-medium sm:font-light mdd:text-base sm:text-xs  ">
                  Individuals can enjoy the benefits of comfort, durability, and
                  sustainability in clothing choices
                </p>
              </div>
              <div className="mdd:mb-4 sm:mb-1">
                <h3 className="mdd:font-bold sm:font-semibold mdd:text-lg sm:text-base  mdd:mb-4 sm:mb-1">
                  100% Handsome Prouducts
                </h3>
                <p className="mdd:font-medium sm:font-light mdd:text-base sm:text-xs  ">
                  Using 100% handsome products elevates the grooming and
                  self-care experience to new heights.
                </p>
              </div>
              <div className="mdd:mb-4 sm:mb-1">
                <h3 className="mdd:font-bold sm:font-semibold mdd:text-lg sm:text-base  mdd:mb-4 sm:mb-1">
                  Modern Fashion Design
                </h3>
                <p className="mdd:font-medium sm:font-light mdd:text-base sm:text-xs  ">
                  Modern fashion design is an ever-evolving realm where
                  creativity meets innovation.
                </p>
              </div>
              <div className="mdd:mb-4 sm:mb-1">
                <h3 className="mdd:font-bold sm:font-semibold mdd:text-lg sm:text-base  mdd:mb-4 sm:mb-1">
                  Discount for Bulk Orders
                </h3>
                <p className="mdd:font-medium sm:font-light mdd:text-base sm:text-xs  ">
                  Discounts for bulk orders provide a compelling incentive for
                  businesses.
                </p>
              </div>
            </div>

            {/* Right side  */}
            <div className="base:flex sm:block  items-center gap-10 xl:ml-10">
              <img
                width={300}
                height={300}
                src="/images/product1.png"
                alt=""
                className="mx-auto  py-4 w-2/4  rounded-xl"
              />
              <div className="flex flex-col gap-8 sm:my-4">
                <p className="mdd:font-medium mdd:text-base  sm:text-lg sm:font-light">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <div className="items-center justify-center">
                  <button className="flex justify-center gap-2 text-white text-sm w-full mdd:font-bold sm:font-semibold bg-slate-700 py-3 rounded-xl   xl:hover:transition-[1] xl:hover:scale-110 xl:ease-linear duration-100">
                    <a href="/allProducts">See All Products</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Feature;
