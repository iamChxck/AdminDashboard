import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  { id: 1, name: "Wireless Earbuds", 
    image: "https://images.unsplash.com/photo-1648447265709-67a4e785d7e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D", 
    category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
  { id: 2, name: "Leather Wallet",
    image: "https://media.istockphoto.com/id/1674702531/photo/3d-rendering-of-egyptian-pound-notes-in-a-brown-leather-mens-wallet-egyptian-pounds-in-wallet.webp?a=1&b=1&s=612x612&w=0&k=20&c=RBp1ScWmadkDTCWRLu0Yd8vVQZs9XyfMpKDiplFow-c=",
    category: "Accessories", price: 39.99, stock: 89, sales: 800 },
  { id: 3, name: "Smart Watch",
    image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics", price: 199.99, stock: 56, sales: 650 },
  { id: 4, name: "Yoga Mat",
    image: "https://media.istockphoto.com/id/1288409428/photo/woman-rolling-up-exercise-mat-and-preparing-doing-yoga-or-fitness.webp?a=1&b=1&s=612x612&w=0&k=20&c=jey2C4jOz8DRasUnv5lv_a2c-Z7F3Q9HpvqHHzb06c0=",
    category: "Fitness", price: 29.99, stock: 210, sales: 950 },
  { id: 5, name: "Coffee Maker",
    image: "https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D",
    category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term));
    setFilteredProducts(filtered);
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Stock
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Sales
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map(product => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center"
                >
                  <img 
                    src={product.image} 
                    alt="Product Image"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.price.toFixed(2)}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.stock}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.sales}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
                
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
};

export default ProductsTable;