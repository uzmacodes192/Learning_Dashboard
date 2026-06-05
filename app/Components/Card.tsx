import { motion } from "framer-motion";

export default function Card() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-gray-800">Learning Progress</h3>
      <p className="text-sm text-gray-500 mt-1">Keep track of your study hours and assignments.</p>
    </motion.div>
  );
}
