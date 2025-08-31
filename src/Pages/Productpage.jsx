import { motion } from 'framer-motion'
import React from 'react'
import StatCard from '../Component/common/StatCard'
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'
import Header from '../Component/common/Header'
import ProductTable from '../Component/Products/ProductTable'
import CategoryDistributionChart from '../Component/overview/CategoryDistributionChart'
import SalesTrendChart from '../Component/Products/SalesTrendChart'

const Productpage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Products" />
    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
      >
        <StatCard name="Total Products" icon={Package} value='$12,345' color='#6366f1'/>
        <StatCard name="Top Selling" icon={TrendingUp} value='10023' color='#8b5cf6'/>
        <StatCard name="Low Stock" icon={AlertTriangle} value='1000' color='#ec4899'/>
        <StatCard name="Total Revenue" icon={DollarSign} value='12.5%' color='#10b981'/>
      </motion.div>

      <ProductTable/>
      {/* CHARTS */}

      <div className='grid grid-col1 lg:grid-cols-2 gap-8'>
        <SalesTrendChart/>
        <CategoryDistributionChart/>
      </div>
    </main>
  </div>
  )
}

export default Productpage