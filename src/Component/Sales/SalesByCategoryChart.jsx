import { motion } from "framer-motion";
import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const salesbycategory = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 200 },
  { name: "Home & Garden", value: 800 },
  { name: "Books", value: 100 },
  { name: "Others", value: 600 },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#0088fe","#ff8042"];

const SalesByCategoryChart = () => {
    return(
        <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          Sales By Category
        </h2>
        <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={salesbycategory}
                                cx='50%'
                                cy='50%'
                                outerRadius={80}
                                fill='#8884d8'
                                dataKey='value'
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {salesbycategory.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                                    borderColor: "#4B5563",
                                }}
                                itemStyle={{ color: "#E5E7EB" }}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
      </motion.div>
    )
 
};

export default SalesByCategoryChart;
