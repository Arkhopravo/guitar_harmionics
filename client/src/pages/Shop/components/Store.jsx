import React from 'react';
import { ethers } from 'ethers';

import axios from 'axios';


const Store = ({ paymentProcessor, dai }) => {

  return (
    <div>
    <ul className="divide-y divide-gray-200">
      <li className="flex items-center justify-between p-4">
        <span className="text-lg">Buy item1 - <span className="font-semibold">100 DAI</span></span>
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          type="button"
          // onClick={() => buy(ITEMS[0])}
        >
          Buy
        </button>
      </li>
      <li className="flex items-center justify-between p-4">
        <span className="text-lg">Buy item2 - <span className="font-semibold">100 DAI</span></span>
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          type="button"
          // onClick={() => buy(ITEMS[1])}
        >
          Buy
        </button>
      </li>
    </ul>
  </div>
  
  );
};

export default Store;
