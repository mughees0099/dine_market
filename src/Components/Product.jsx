import SwiperSlider from "./swipperSlider.jsx";
const Products = () => {
  return (
    <>
      <main className=" sm:pt-20 xl:pt-40 ">
        {/* subtitle  */}
        <div className="subtitle text-center flex flex-col  mdd:mb-8 sm:mb-4 font-bold">
          <span className="tracking-widest text-blue-800 mdd:text-lg sm:text-sm">
            PRODUCTS
          </span>
          <h1 className="mdd:text-4xl sm:text-lg tracking-wider">
            Check What we Have
          </h1>
        </div>
      </main>

      {/* products details  */}
      <SwiperSlider />
    </>
  );
};

export default Products;
