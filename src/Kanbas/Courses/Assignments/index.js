import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs"
import { PiDotsSixVerticalBold } from "react-icons/pi"
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai"
import { MdOutlineAssignment } from "react-icons/md"
import "./assignments.css"


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="row">
        <div className="col-4">
            <div className="form-group wd-search-assignments">
                <input type="text" className="form-control" id="search-assignments" placeholder="Search for Assignments"/>
            </div>
        </div>
        <div className="col">
            <button type="button" className="btn btn-secondary btn-sm float-end"><BsThreeDotsVertical/></button>
            <button type="button" className="btn btn-danger btn-sm float-end">+ Assignment</button>
            <button type="button" className="btn btn-secondary btn-sm float-end">+ Group</button>
        </div>
    </div>
    <hr/>
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary">
            <PiDotsSixVerticalBold/>
            <b>Assignments</b>
            <BsThreeDotsVertical class="float-end"/><AiOutlinePlus class="float-end"/>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item wd-assignment-link-item">
            <div className="row">
                <div className="col-1">
                    <PiDotsSixVerticalBold size={25}/>
                    <MdOutlineAssignment className="float-end wd-assignment-icon" size={25}/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <b className="wd-assignment-text">{assignment.title}</b>
                    </div>
                    <div className="row">
                        <p className="wd-assignment-module">multiple modules</p>
                    </div>
                </div>
                <div className="col-1">
                    <AiFillCheckCircle className="wd-assignment-icon" size={25}/>
                    <BsThreeDotsVertical className="float-end" size={25}/>
                </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;