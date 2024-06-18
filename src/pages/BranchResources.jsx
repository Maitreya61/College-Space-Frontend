import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BranchResources = () => {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { branchName } = useParams();
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    console.log(branchName);
    fetchSubjects(branchName);
  }, [branchName]);

  const fetchSubjects = async (branchName) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/resources/getResources/${branchName}`
      );
      setSubjects(response.data);
      setFilteredSubjects(response.data); // Initialize filtered subjects with all subjects
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = subjects.filter((subject) =>
      subject.subjectName.toLowerCase().includes(searchTerm)
    );
    setFilteredSubjects(filtered);
  };

  const handleSubjectClick = (subjectName) => {
    setSelectedSubject(selectedSubject === subjectName ? "" : subjectName);
  };

  const handleResourceClick = (resourceLink) => {
    // Redirect to the resource link
    window.location.href = resourceLink;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-white text-2xl font-bold mb-6">{branchName}</h1>
      <input
        type="text"
        className="border rounded-md px-3 py-2 mb-4"
        placeholder="Search subjects..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="divide-y divide-gray-200 border bg-white border-gray-300 rounded-md overflow-hidden">
        {filteredSubjects.map((subject) => (
          <li key={subject.subjectName} className="relative">
            <div
              onClick={() => handleSubjectClick(subject.subjectName)}
              className={`flex items-center cursor-pointer px-6 py-4 ${
                selectedSubject === subject.subjectName ? "bg-gray-100" : ""
              }`}
            >
              <ion-icon
                name={
                  selectedSubject === subject.subjectName
                    ? "caret-up-circle-outline"
                    : "caret-down-circle-outline"
                }
                className="mr-2"
              ></ion-icon>
              <span className="font-semibold ml-2">{subject.subjectName}</span>
            </div>
            {selectedSubject === subject.subjectName && (
                      <ul className="divide-y divide-gray-200 border-t border-gray-300 ml-4">
                        {subject.resources.map(resource => (
                          <li key={resource.resourceName} onClick={() => handleResourceClick(resource.resourceLink)} className="cursor-pointer px-6 py-4 hover:text-blue-600">
                            <span>{resource.resourceName}</span>
                          </li>
                        ))}
                      </ul>
                    )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BranchResources;
