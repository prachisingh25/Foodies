import React from "react";
import logo from "../../assets/food/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-lightYellow rounded-t-3xl"
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-3 lg:max-w-[300px]">
            <img src={logo} alt="" />
            <a
              href="#"
              className="inline-block mt-6 text-sm footer-link cursor-pointer"
            ></a>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-semibold">About Us</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link cursor-pointer">Who We Are</li>{" "}
                <li className="footer-link cursor-pointer">Blog</li>{" "}
                <li className="footer-link cursor-pointer">Work With Us</li>{" "}
                <li className="footer-link cursor-pointer">Report Fraud</li>{" "}
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">FoodieVerse</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link cursor-pointer">Foodies</li>{" "}
                <li className="footer-link cursor-pointer">Blinkit</li>{" "}
                <li className="footer-link cursor-pointer">Feeding India</li>{" "}
                <li className="footer-link cursor-pointer">Premium</li>{" "}
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Learn More</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link cursor-pointer">Privacy</li>{" "}
                <li className="footer-link cursor-pointer">Security</li>{" "}
                <li className="footer-link cursor-pointer">Terms</li>{" "}
                <li className="footer-link cursor-pointer">Sitemap</li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
