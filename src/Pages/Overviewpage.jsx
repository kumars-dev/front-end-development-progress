import React from "react";
import Header from "../Component/common/Header";
import StatCard from "../Component/common/StatCard";
import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../Component/overview/SalesOverviewChart";
import SalesChannelChart from "../Component/overview/SalesChannelChart";
import CategoryDistributionChart from "../Component/overview/CategoryDistributionChart";
const Overviewpage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
        >
          <StatCard name="Total sales" icon={Zap} value='$12,345' color='#6366f1'/>
          <StatCard name="New Users" icon={Users} value='10023' color='#8b5cf6'/>
          <StatCard name="Total Products" icon={ShoppingBag} value='1000' color='#ec4899'/>
          <StatCard name="Conversion Rate" icon={BarChart2} value='12.5%' color='#10b981'/>
        </motion.div>

        {/* CHARTS  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SalesOverviewChart/>
        <CategoryDistributionChart/>
        <SalesChannelChart/>
        </div>
      </main>
    </div>
  );
};

export default Overviewpage;
