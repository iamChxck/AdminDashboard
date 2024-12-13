import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const categoryData = [
    { name: "Electronics", value: 4500 },
    { name: "Clothing", value: 3200 },
    { name: "Home & Garden", value: 2800 },
    { name: "Books", value: 2100 },
    { name: "Sports & Outdoors", value: 1900 },
]

const CategoryDistributionChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-x1 p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >

        </motion.div>
    )
}

export default CategoryDistributionChart