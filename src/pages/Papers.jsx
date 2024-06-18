import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Papers = () => {
  const navigate = useNavigate();
  const branches = [
    { branchName: 'Computer Science and Engineering', imageURL: '../cse.png' },
    { branchName: 'Electronics and Communication Engineering', imageURL: '../ece.png' },
    { branchName: 'Electrical and Electronics Engineering', imageURL: '../eee.png' },
    { branchName: 'Mechanical Engineering', imageURL: '../mech.png' },
    { branchName: 'Civil Engineering', imageURL: '../civil.png' },
    { branchName: 'Information Technology', imageURL: '../it.png' }
  ];



  const handleBranchClick = (branchName) => {
    // Navigate to subjects page with selected branch name as URL parameter
    navigate(`/papers/${encodeURIComponent(branchName)}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1 className='text-white text-2xl font-bold mb-6 ml-4'>Notes</h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {branches.map(branch => (
          <li key={branch.branchName} className="relative">
            <div onClick={() => handleBranchClick(branch.branchName)} className="flex flex-col items-center cursor-pointer px-6 py-4 rounded-lg bg-gray-100 hover:bg-gray-200">
              <img src={branch.imageURL} alt={branch.branchName} className="w-20 h-20 mb-2 object-cover" /> {/* Add 'object-cover' to ensure the image fills its container */}
              <span className="font-bold hover:text-blue-500">{branch.branchName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Papers;
