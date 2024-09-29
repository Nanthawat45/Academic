import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseService from "../services/restaurant.service"; // เปลี่ยนเป็น CourseService

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    courseCode: "",
    courseName: "",
    credit: 0,
  });

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await CourseService.getCourseById(id);
      setCourse(response.data);
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CourseService.editCourse(id, course);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course Code:
          <input
            type="text"
            name="courseCode"
            value={course.courseCode}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            value={course.courseName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Credit:
          <input
            type="number"
            name="credit"
            value={course.credit}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Edit;
