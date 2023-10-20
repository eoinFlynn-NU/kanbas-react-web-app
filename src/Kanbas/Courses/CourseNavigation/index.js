import { Link, useParams, useLocation } from "react-router-dom";
import "./tabs.css"


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes",
   "Grades", "People"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group" style={{ width: 120 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) ? "wd-tab-link-selected" : "wd-tab-link"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;