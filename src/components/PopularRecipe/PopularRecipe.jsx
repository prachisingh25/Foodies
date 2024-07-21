import React from "react";
import food1 from "../../assets/food/f2.png";
import food2 from "../../assets/food/f1.png";
import food3 from "../../assets/food/f3.png";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const PopularRecipeData = [
  {
    id: 1,
    name: "Pizza",
    img: food1,
    price: "₹400",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Taco",
    img: food2,
    price: "₹250",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Pasta",
    img: food3,
    price: "₹270",
    delay: 1.2,
  },
];

const PopularRecipe = () => {
  return (
    <section>
      <div className="container py-24">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-league font-semibold uppercase py-8"
        >
          {" "}
          Our Popular Recipies !
        </motion.h3>
        {/* CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {PopularRecipeData.map((item) => {
            return (
              <div className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl">
                <img
                  src={item.img}
                  alt=""
                  className="
                w-44 mx-auto img-shadow
                group-hover:scale-x-110
                group-hover:translate-y-[-50px]
                group-hover:translate-x-10
                group-hover:rotate-[50deg]
                transition-all
                duration-700"
                />
                <div>
                  <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                    Buy Now !
                  </button>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xl font-bold text-yellow-500">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipe;
