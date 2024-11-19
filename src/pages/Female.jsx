import { Link } from "react-router-dom";
import { data } from "./Data/data";

const Female = () => {
  const femaleProducts = data.filter((item) => item.category === "female");

  return (
    <main className="body">
      <div>
        <div className="sm:mx-2 lg:mx-32 my-16">
          {femaleProducts.length > 0 ? (
            <div className="grid  sm:grid-cols-1 base:grid-cols-2 normal:grid-cols-3 xl:grid-cols-4 justify-items-center gap-16  ">
              {femaleProducts.map((item) => (
                <Link to={`/product/${item.category}/${item.id}`} key={item.id}>
                  <div className="w-4/5 mx-3 hover:scale-105 transition-transform duration-200 ease-in-out">
                    <img
                      src={item.img}
                      alt="Description of the image"
                      width={300}
                      height={200}
                      style={{ width: "100%", height: "75%" }}
                      className="rounded-tl-[20px] rounded-br-[20px] "
                    />

                    <p className="text-lg mt-1 font-semibold tracking-wider">
                      {item.name}
                    </p>
                    <p className="text-lg mt-1 font-normal tracking-wider">
                      {item.type}
                    </p>
                    <p className="text-lg mt-1 font-semibold tracking-wider">
                      ${item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center  text-2xl font-semibold">
              No products available😐
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Female;
