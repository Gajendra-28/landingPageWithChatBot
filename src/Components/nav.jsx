import { BotIcon } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <motion.nav className="flex items-center justify-center sticky bg-gray-900 py-10" >
        <a href="#" className="text-gray-300 mx-4 p-2">
          <BotIcon size={36}/>
        </a>
        <ul className="flex">
          <li className="nav-point">
            <a href="#" className="block text-gray-300 mx-4 p-2 transition-colors hover:border-b-2 rounded-lg">Home</a>
          </li>
          <li className="nav-point">
            <a href="#" className="block text-gray-300 mx-4 p-2 transition-colors hover:border-b-2 rounded-lg">Section</a>
          </li>
        </ul>
      </motion.nav>
  );
};

export default Nav;
