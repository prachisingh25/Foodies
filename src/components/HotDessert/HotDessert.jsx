import React from "react";
import food1 from "../../assets/food/d1.png";
import food2 from "../../assets/food/d2.png";
import food3 from "../../assets/food/d3.png";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const Deserts = [
  {
    id: 1,
    name: "Brownies",
    img: food1,
    price: "₹270",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Cheesecake",
    img: food2,
    price: "₹300",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Donuts",
    img: food3,
    price: "₹250",
    delay: 1.2,
  },
];

const HotDessert = () => {
  return (
    <section>
      <div className="container">
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold 
        text-darkGreen uppercase py-8"
        >
          Decadent Desserts !
        </motion.h3>
        {/* GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-6"
        >
          {Deserts.map((item) => {
            return (
              <motion.div
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg] cursor-pointer"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl text-yellow-500">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotDessert;
