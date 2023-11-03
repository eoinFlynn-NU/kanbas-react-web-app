import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./modules.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col-5">
            <input className="form-control" value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
            <textarea className="form-control" value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }/>
          </div>
          <div className="col-2">
            <button className="btn btn-primary float-end" onClick={() => dispatch(updateModule(module))}>Update</button>
          </div>
          <div className="col-1">
            <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          </div>
        </div>
      </li>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item wd-module-item">
              <div className="row">
                <div className="col-8">
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                </div>
                <div className="col-2">
                  <button className="btn btn-danger float-end"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                </div>
                <div className="col-1">
                  <button className="btn btn-success"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                </div>
              </div>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;