import React, { useState } from 'react';

const Search = ({ courses, setFilteredCourses }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    
    if (value === "") {
      setFilteredCourses(courses); // หากไม่มีการค้นหาให้แสดงทั้งหมด
      return;
    }

    const result = courses.filter((course) => {
      return (
        course.courseCode.toLowerCase().includes(value.toLowerCase()) || // ค้นหาจาก courseCode
        course.courseName.toLowerCase().includes(value.toLowerCase()) // ค้นหาจาก courseName
      );
    });

    console.log(result);
    setFilteredCourses(result); // ตั้งค่าผลลัพธ์ที่กรอง
  };

  return (
    <div className="mb-5">
      <label className="input input-bordered flex items-center gap-2">
        <input 
          type="text" 
          className="grow" 
          placeholder="Search by Course Code or Name" // เปลี่ยน placeholder
          value={keyword} // เพิ่มค่า value ให้กับ input
          onChange={handleChange} 
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default Search;
