import React from "react";
import banner from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* IMAGE */}
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 15,
                x: 50,
                y: -50,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              src={banner}
              alt=""
              className="relative z-10 w-full lg:max-w-[350px] img-shadow"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] h-[320px] w-[320px] md:h-[400px] md:w-[400px] bg-lightYellow rounded-full"
            ></motion.div>
          </div>
          {/* TEXT */}
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.h1
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="show"
              className="text-6xl uppercase font-semibold font-league"
            >
              Best foods in town!
            </motion.h1>
            <motion.p
              variants={SlideUp(1.3)}
              initial="hidden"
              whileInView="show"
            >
              Experience the finest culinary delights that our town has to
              offer, crafted to perfection just for you.
            </motion.p>
            <motion.button
              variants={SlideUp(1.6)}
              initial="hidden"
              whileInView="show"
              className="btn-primary"
            >
              Order Now !
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
