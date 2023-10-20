import ModuleList from "./ModuleList";
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineCheckCircle } from "react-icons/ai"
import "./modules.css"

function Modules() {
  return (
    <div>
        <div className="row">
            <div>
                <button type="button" class="btn btn-secondary btn-sm float-end"><BsThreeDotsVertical/></button>
                <button type="button" class="btn btn-danger btn-sm float-end">+ Module</button>
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <AiOutlineCheckCircle/> Publish All
                    </button>
                </div>
                <button type="button" class="btn btn-secondary btn-sm float-end">View Progress</button>
                <button type="button" class="btn btn-secondary btn-sm float-end">Collapse All</button>
            </div>
        </div>
        <hr className="wd-module-hr"/>
        <div className="row">
        <ModuleList />
        </div>
    </div>
  );
}
export default Modules;