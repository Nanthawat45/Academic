import React from "react";
import Box from "./Box";
import { useState, useEffect } from "react";

const Courses = ({ courses }) => {  // เปลี่ยนชื่อเป็น Courses
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {courses &&  // เปลี่ยนชื่อจาก restaurants เป็น courses
        courses.map((course) => {  // เปลี่ยนจาก restaurant เป็น course
          return (
            <Box
              key={course.id}  
              courseCode={course.courseCode}  // เพิ่ม courseCode
              courseName={course.courseName}  // เพิ่ม courseName
              credit={course.credit}  // เพิ่ม credit
            />
          );
        })}
    </div>
  );
};

export default Courses;
