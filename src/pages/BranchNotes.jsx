import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BranchNotes = () => {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { branchName } = useParams();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [likedNotes, setLikedNotes] = useState([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    console.log(branchName);
    fetchSubjects(branchName);
    fetchLikedNotes();
  }, [branchName]);


  const fetchSubjects = async (branchName) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/notes/getNotes/${branchName}`
      );
      // Sort chapters based on likes within each subject
      const sortedSubjects = response.data.map((subject) => ({
        ...subject,
        chapters: subject.chapters.sort((a, b) => b.likes - a.likes),
      }));

      setSubjects(sortedSubjects);
      console.log(sortedSubjects);
      setFilteredSubjects(sortedSubjects); // Initialize filtered subjects with all subjects
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchLikedNotes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/notes/getLikedNotes/${userId}`
      );
      setLikedNotes(response.data);
    } catch (error) {
      console.error("Error fetching Liked Notes", error);
    }
  }

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

  const handleChapterClick = (chapterLink) => {
    // Redirect to the chapter link
    window.location.href = chapterLink;
  };

  const handleLike = async (chapterId) => {
    console.log("clicked")
    try {
      const response = await axios.post(
        `http://localhost:3001/notes/likedNotes`,
        {
          userId: userId,
          chapterId: chapterId,
        }
      );
      fetchSubjects(branchName);
      // Assuming response.data contains updated likedNotes
      setLikedNotes(response.data);
    } catch (error) {
      console.error("Error liking note:", error);
    }
  };

  const handleUnLike = async (chapterId) => {
    console.log("clicked")
    try {
      const response = await axios.post(
        `http://localhost:3001/notes/unlikedNotes`,
        {
          userId: userId,
          chapterId: chapterId,
        }
      );
      fetchSubjects(branchName);
      // Assuming response.data contains updated likedNotes
      setLikedNotes(response.data);

    } catch (error) {
      console.error("Error liking note:", error);
    }
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
                {subject.chapters.map((chapter) => (
                  <li
                    key={chapter.chapterName}
                    className="flex justify-between items-center cursor-pointer px-6 py-4 hover:text-blue-600"
                  >
                    <span
                      onClick={() => handleChapterClick(chapter.chapterLink)}
                    >
                      {chapter.chapterName}
                    </span>

                    <button
                      onClick={() => likedNotes.includes(chapter._id) ? handleUnLike(chapter._id)  :handleLike(chapter._id)
                       }
                       className="flex flex-row justify-between items-center"
                    >
                      <span className="mr-2">
                        {chapter.likes}
                      </span>
                      <ion-icon
                        name={
                          likedNotes.includes(chapter._id)
                            ? "heart"
                            : "heart-outline"
                        }
                      />
                    </button>
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

export default BranchNotes;
