import { Link } from "react-router-dom";
import db from "../Database";
import northeastern_logo from "../KanbasNavigation/northeastern-logo.png"
import "./dashboard.css"


function Dashboard() {
  const courses = db.courses;
  return (
    <div className="row">
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published Courses</h2>
      <div className="flex-row flex-wrap">
            {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                <div className="wd-card card">
                    <img src={northeastern_logo} class="wd-card-img" alt="..."/>
                    <div className="card-body">
                        <h6 class="wd-card-title">{course.name}</h6>
                        <p class="wd-card-subtitle">{course._id}</p>
                        <p class="wd-card-text">{course.number} Fall 2023 Semester Full Term</p>
                    </div>
                </div>
            </Link>
            ))}
      </div>
    </div>
  );
}
export default Dashboard;