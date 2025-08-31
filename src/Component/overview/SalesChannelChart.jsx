import { motion } from 'framer-motion'
import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis ,ResponsiveContainer, Tooltip, Legend, Bar, Cell} from 'recharts';

const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];
const SALES_CHANNEL_DATA=[
    {name:'Website', value:45000},
    {name:'Mobile App', value:38000},
    {name:'Marketplace', value:29002},
    {name:'Social Media', value:18700},
];
const SalesChannelChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}>
        <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales Channel
      </h2>
      <div className="h-80 ">
              <ResponsiveContainer >
                <BarChart data={SALES_CHANNEL_DATA}>
                    <CartesianGrid strokeDasharray={'3 3'} stroke='#4b5563'/>
                    <XAxis dataKey={'name'} stroke='#9ca3af' />
                    <YAxis stroke='#9ca3af'/>
                    <Tooltip contentStyle={{backgroundColor:'#rgba(31,41,55,0.8)', borderColor:'#4b5563'}} itemStyle={{color:'#e5e7e8'}}/>
                    <Legend/>
                    <Bar dataKey='value' fill='#8884d8'>
                        {SALES_CHANNEL_DATA.map((entry,index)=>(
                          <Cell key={`cell-${index}`} fill={COLORS[index%COLORS.length]}/>
                        ))}
                    </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
    </motion.div>
  )
}

export default SalesChannelChart