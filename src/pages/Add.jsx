import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import CourseService from '../services/restaurant.service'; // สมมุติว่าใช้บริการเพิ่มหลักสูตร
import { useAuthContext } from "../context/AuthContext";

const Add = () => {
  
  const [course, setCourse] = useState({
    courseCode: "",
    courseName: "",
    credit: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CourseService.addCourse(course); // เปลี่ยนเป็นการเรียกใช้ CourseService
      console.log(response);

      if (response.status === 200) {
        Swal.fire({
          title: "Add Course",
          text: "Course added successfully",
          icon: "success",
        }).then(() => {
          setCourse({ courseCode: "", courseName: "", credit: "" });
          navigate("/");
        });
      }

    } catch (error) {
      Swal.fire({
        title: "Fail to add Course",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  }

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-2 text-center">Add Course</h1>
      </div>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Course Code
          <input
            type="text"
            required
            id="id"
            className="grow"
            placeholder="Enter Course Code"
            name="courseCode"
            onChange={handleChange}
            value={course.courseCode}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Course Name
          <input
            type="text"
            className="grow"
            placeholder="Enter Course Name"
            name="courseName"
            id="id"
            onChange={handleChange}
            value={course.courseName}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Credit
          <input
            type="number"
            name="credit"
            id="id"
            placeholder="Enter Credit"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={course.credit}
          />
        </label>
        <button className='btn btn-success' onClick={handleSubmit}>
          Add Course
        </button>
      </div>
    </div>
  );
}

export default Add;
