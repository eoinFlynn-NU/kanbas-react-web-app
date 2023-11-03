import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import northeastern_logo from "../KanbasNavigation/northeastern-logo.png"
import "./dashboard.css"


function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  return (
    <div className="row">
      <h1>Dashboard</h1>
      {/* <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button> */}
      <hr/>
      <h2>Published Courses</h2>
      <hr/>
      <div className="row wd-bottom-spacing">
        <div className="col col-8">
          <input value={course.name} className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        </div>
        <div className="col col-2">
          <button type="button" className="btn btn-success float-end" onClick={addNewCourse} >Add</button>
        </div>
        <div className="col col-2">
          <button type="button" className="btn btn-primary" onClick={updateCourse} >Update</button>
        </div>
      </div>

      <div className="col">
        <div className="list-group">

            {courses.map((course) => (
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                <div className="list-item">
                  <div className="row">
                    <div className="col col-6 text-center ">
                      <p className="wd-course-title">{course.name}</p>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-warning float-end" onClick={(event) => {event.preventDefault(); setCourse(course);}}>Edit</button>
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-danger" onClick={(event) => {event.preventDefault();deleteCourse(course._id);}}>Delete</button>
                    </div>
                  </div>
                </div>
                  
                  
                  
                  
                  
                  
                  {/* <div className="wd-card card">
                      <img src={northeastern_logo} class="wd-card-img" alt="..."/>
                      <div className="card-body">
                          <h6 class="wd-card-title">{course.name}</h6>
                          <p class="wd-card-subtitle">{course._id}</p>
                          <p class="wd-card-text">{course.number} Fall 2023 Semester Full Term</p>
                      </div>
                  </div> */}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;