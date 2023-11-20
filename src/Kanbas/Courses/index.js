import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes,useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { AiOutlineMenu } from "react-icons/ai"
import { BiGlasses } from "react-icons/bi"
import "./courses.css"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { courseId } = useParams();
  //const API_BASE = process.env.REACT_APP_API_BASE;
  const API_BASE = "https://kanbas-node-server-app-dt3m.onrender.com/api"
    const URL = `${API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
        <div className="row">
            <div className="col-1">
                <AiOutlineMenu size={30} style={{color: "red"}} />
            </div>
            <div className="col-8">
                <nav className="wd-breadcrumb text-left" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="wd-tab-link" href="#">{course._id}.Fall.{course.number}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
            </div>
            <div className="col-3">
                <button type="button" class="btn btn-secondary btn-sm float-end"><BiGlasses/> Student View</button>
            </div>
        </div>
        <hr/>
        <div className="row">
                <div className="col-2">
                    <CourseNavigation />
                </div>
                <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route
                    path="Assignments/:assignmentId"
                    element={<AssignmentEditor/>}
                    />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                </Routes>
                </div>
        </div>

    </div>
  );
}
export default Courses;