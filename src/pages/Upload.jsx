// UploadPage.js
import React, { useState } from 'react';
import axios from 'axios';
import BranchDropdown from '../components/BranchDropdown';
import UploadForm from '../components/UploadForm';
import UploadButton from '../components/UploadButton';

const Upload = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [chapterOrPaperName, setChapterOrPaperName] = useState('');
  const [itemLink, setItemLink] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleUpload = async (category, endpoint) => {
    try {
      // Make sure all required fields are filled
      if (!selectedBranch || !subjectName || !chapterOrPaperName || !itemLink) {
        alert("Don't leave any field empty");
        return;
      }
  
      let payload;
      if (category === 'notes') {
        payload = {
          branchName: selectedBranch,
          subjectName,
          chapterName: chapterOrPaperName, 
          chapterLink: itemLink      
        };
      } else if (category === 'papers') {
        payload = {
          branchName: selectedBranch,
          subjectName,
          paperName: chapterOrPaperName,   
          paperLink: itemLink        
        };
      } else if (category === 'resources') {
        payload = {
          branchName: selectedBranch,
          subjectName,
          resourceName: chapterOrPaperName, 
          resourceLink: itemLink      
        };
      }
  
      // Send POST request to corresponding endpoint
      const response = await axios.post(`http://localhost:3001/${category}/${endpoint}`, payload);
  
      
      setChapterOrPaperName('');
      setItemLink('');
    } catch (error) {
      
      console.error('Error uploading:', error);
    }
  };
  

  const branches = [
    { branchName: 'Computer Science and Engineering' },
    { branchName: 'Electronics and Communication Engineering' },
    { branchName: 'Electrical and Electronics Engineering' },
    { branchName: 'Mechanical Engineering' },
    { branchName: 'Civil Engineering' },
    { branchName: 'Information Technology' }
  ];

  return (
    <div className="p-4">
        <div>
            <h1 className='text-white text-2xl font-bold mt-6 md:mt-4 mb-6 ml-4'>Upload</h1>
        </div>
      <ul className="divide-y divide-gray-200 border bg-white border-gray-300 rounded-md overflow-hidden">
        <li className="relative">
          <div onClick={() => handleCategoryClick('Notes')} className="flex items-center cursor-pointer px-6 py-4">
            <ion-icon name={selectedCategory === 'Notes' ? 'caret-up-circle-outline' : 'caret-down-circle-outline'} className="mr-2"></ion-icon>
            <span className="font-bold ml-2">Notes</span>
          </div>
          {selectedCategory === 'Notes' && (
            <div className='px-8 py-4'>
              <BranchDropdown branches={branches} selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} />
              <UploadForm
                name={'Chapter'}
                itemName={subjectName}
                setItemName={setSubjectName}
                chapterOrPaperName={chapterOrPaperName}
                setChapterOrPaperName={setChapterOrPaperName}
                itemLink={itemLink}
                setItemLink={setItemLink}
              />
              <UploadButton handleClick={() => handleUpload('notes','postNotes')} buttonText="Upload Notes" />
            </div>
          )}
        </li>
        <li className="relative">
          <div onClick={() => handleCategoryClick('Papers')} className="flex items-center cursor-pointer px-6 py-4">
            <ion-icon name={selectedCategory === 'Papers' ? 'caret-up-circle-outline' : 'caret-down-circle-outline'} className="mr-2"></ion-icon>
            <span className="font-bold ml-2">Papers</span>
          </div>
          {selectedCategory === 'Papers' && (
            <div className='px-8 py-4'>
              <BranchDropdown branches={branches} selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} />
              <UploadForm
                name={'Paper'}
                itemName={subjectName}
                setItemName={setSubjectName}
                chapterOrPaperName={chapterOrPaperName}
                setChapterOrPaperName={setChapterOrPaperName}
                itemLink={itemLink}
                setItemLink={setItemLink}
              />
              <UploadButton handleClick={() => handleUpload('papers','postPapers')} buttonText="Upload Papers" />
            </div>
          )}
        </li>
        <li className="relative">
          <div onClick={() => handleCategoryClick('Resources')} className="flex items-center cursor-pointer px-6 py-4">
            <ion-icon name={selectedCategory === 'Resources' ? 'caret-up-circle-outline' : 'caret-down-circle-outline'} className="mr-2"></ion-icon>
            <span className="font-bold ml-2">Resources</span>
          </div>
          {selectedCategory === 'Resources' && (
            <div className='px-8 py-4'>
              <BranchDropdown branches={branches} selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} />
              <UploadForm
                name={'Resource'}
                itemName={subjectName}
                setItemName={setSubjectName}
                chapterOrPaperName={chapterOrPaperName}
                setChapterOrPaperName={setChapterOrPaperName}
                itemLink={itemLink}
                setItemLink={setItemLink}
              />
              <UploadButton handleClick={() => handleUpload('resources','postResources')} buttonText="Upload Resources" />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Upload;
