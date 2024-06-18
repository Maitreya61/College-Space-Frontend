// BranchDropdown.js
import React from 'react';

const BranchDropdown = ({ branches, selectedBranch, setSelectedBranch }) => {
  return (
    <select
      id="branch"
      required={true}
      className="block w-full p-2 border rounded-md mb-4"
      value={selectedBranch}
      onChange={(e) => setSelectedBranch(e.target.value)}
    >
      <option value="">Select Branch</option>
      {branches.map((branch, index) => (
        <option key={index} value={branch.branchName}>
          {branch.branchName}
        </option>
      ))}
    </select>
  );
};

export default BranchDropdown;
