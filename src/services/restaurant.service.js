import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

// get all restaurants (เปลี่ยนเป็น get all courses)
const getAllCourse = async () => {
  return await api.get(RESTO_API);
};

// get course by Id (เปลี่ยนจาก restaurant เป็น course)
const getCourseById = async (id) => {
  return await api.get(`${RESTO_API}/${id}`);
};

// update a course data (เปลี่ยนจาก restaurant เป็น course)
const editCourse = async (id) => {
  return await api.put(`${RESTO_API}/${id}`);
};

// Delete a course
const deleteCourse = async (id) => {
  return await api.delete(`${RESTO_API}/${id}`);
};

// Add a new course
const addCourse = async (course) => {
  return await api.post(RESTO_API, course);
};

// เปลี่ยนชื่อ service ที่ใช้ให้สอดคล้องกับ Course
const CourseService = {
  getAllCourse,
  getCourseById,
  editCourse,
  deleteCourse,
  addCourse,
};

export default CourseService;
