import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
const Card = ({ reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="w-60 h-[350px] px-5 py-10  rounded-[50px] relative bg-zinc-600 text-white overflow-hidden bg-opacity-50 tracking-widest"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold ">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <footer className="footer absolute left-0 bottom-0  w-full">
        <div className="flex justify-between items-center pb-2 px-4">
          <h5>.4mb</h5>
          <LuDownload />
        </div>
        <div className="tag flex justify-center items-center  bg-sky-600  py-3 w-full">
          <h3 className="text-sm font-bold">Download</h3>
        </div>
      </footer>
    </motion.div>
  );
};

export default Card;
