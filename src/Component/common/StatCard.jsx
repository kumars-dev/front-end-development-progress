import React from "react";
import { motion } from "framer-motion";
const StatCard = ({ name, color, value, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-2xl sm:text-center font-semibold text-gray-100 lg:text-left">
            {value}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;
