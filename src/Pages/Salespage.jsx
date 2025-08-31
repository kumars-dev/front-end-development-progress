import React from "react";
import Header from "../Component/common/Header";
import { motion } from "framer-motion";
import StatCard from "./../Component/common/StatCard";
import Salesoverviewchart from "./../Component/Sales/Salesoverviewchart";
import SalesByCategoryChart from "../Component/Sales/SalesByCategoryChart";

import {
  CreditCard,
  CreditCardIcon,
  DollarSign,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import Dailysalestrend from "../Component/Sales/Dailysalestrend";


const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};
const Salespage = () => {
  return (
    <div className="  flex-1 overflow-auto relative z-10">
      <Header title="Sales Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* sales stats */}
        <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366f1"
          />
          <StatCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#108981"
          />
          <StatCard
            name="Conversion Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="##F59E0B"
          />
          <StatCard
            name="Sales Growth"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
        </motion.div>

        <Salesoverviewchart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart/>
            <Dailysalestrend/>
        </div>
      </main>
    </div>
  );
};

export default Salespage;
