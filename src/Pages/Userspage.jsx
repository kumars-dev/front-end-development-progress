import React from "react";
import Header from "../Component/common/Header";
import { motion } from "framer-motion";
import { UserCheck, UserIcon, UserPlus, UserX } from "lucide-react";
import StatCard from "../Component/common/StatCard";
import UserTable from "../Component/Users/UserTable";
import UserGrowthChart from "../Component/Users/UserGrowthChart";
import UserActivityHeatmap from "../Component/Users/UserActivityHeatmap";
import UserDemographicsChart from "../Component/Users/UserDemographicsChart";



const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

const Userspage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total User"
            icon={UserIcon}
            value={userStats.totalUsers}
            color="#6366f1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#8b5cf6"
          />
          <StatCard
            name="Active User"
            icon={UserCheck}
            value={userStats.activeUsers}
            color="#ec4899"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#10b981"
          />
        </motion.div>
        <UserTable/>
        {/* usercharts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart/>
          <UserActivityHeatmap/>
          <UserDemographicsChart/>
        </div>
      </main>
    </div>
  );
};

export default Userspage;
