import React from "react";
import { useAuthContext } from "../context/AuthContext"; // นำเข้า context ถ้าจำเป็น
import Swal from "sweetalert2"; // ถ้าใช้ swal ในการแจ้งเตือน

const Box = ({ courses }) => {
  const { user } = useAuthContext(); // ดึงข้อมูลผู้ใช้

  const handleDelete = async (courseCode) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        // เรียก API เพื่อลบข้อมูล
        // await deleteCourseAPI(courseCode); // เรียกฟังก์ชันที่ลบข้อมูล
        Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error deleting course",
        text: error?.message || "Something went wrong!",
      });
    }
  };
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {/* ใช้ map เพื่อลูปแสดงข้อมูลของแต่ละหลักสูตร */}
          {courses.map((course) => (
            <tr key={course.courseCode} className="bg-base-200">
              <td>{course.courseCode}</td>
              <td>{course.courseName}</td>
              <td>{course.credit}</td>
              <td>
              {user && user.roles.includes("ROLES_ADMIN") && (  // ตรวจสอบผู้ใช้
        <div>
            <button
              className="btn btn-outline btn-warning btn-sm"
              onClick={() => {/* ฟังก์ชันสำหรับแก้ไข */}}
            >
              Edit
            </button>
          <button
            className="btn btn-outline btn-error btn-sm"
            onClick={() => handleDelete(course.courseCode)} // เรียกฟังก์ชันลบ
          >
            Delete
          </button>
        </div>
      )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Box;
