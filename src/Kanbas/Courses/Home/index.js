import Modules from "../Modules";
import "./home.css"
import { AiOutlineCheckCircle, AiTwotoneCalendar } from "react-icons/ai"
import { RxCrossCircled } from "react-icons/rx"

function Home() {
    return (
      <div className="row">
        <div className="col-9">
            <h2>Home</h2>
            <Modules />
        </div>
        <div className="col col-xxl-3 col-xl-3 col-lg-3 d-none d-lg-block">
            <h5>Course Status</h5>
            <button type="button" class="btn btn-secondary btn-sm"><AiOutlineCheckCircle/>Unpublish</button>
            <button type="button" class="btn btn-success btn-sm"><RxCrossCircled/>Published</button>
            <div class="col">
                <button type="button" class="btn btn-secondary btn-sm wd-right-col-buttons wd-right-col-top-button">Import Existing Content</button>
                <button type="button" class="btn btn-secondary btn-sm wd-right-col-buttons">Import From Commons</button>
                <button type="button" class="btn btn-secondary btn-sm wd-right-col-buttons">Choose Home Page</button>
                <button type="button" class="btn btn-secondary btn-sm wd-right-col-buttons">View Course Stream</button>
                <button type="button" class="btn btn-secondary btn-sm wd-right-col-buttons">New Announcement</button>
                <button type="button" class="btn btn-secondary btn-sm wd-right-col-buttons">New Analytics</button>
                <button type="button" class="btn btn-secondary btn-sm wd-right-col-buttons wd-right-col-bottom-button">View Course Notifications</button>
            </div>
            <div class="row">
                <div class="col">
                    <h5><b>To Do</b></h5>
                </div>
                <hr class="wd-right-col-hr"/>
                        
                <ul>
                    <li><p class="wd-coming-up-title"><AiTwotoneCalendar/>Lecture</p> <p class="wd-coming-up-text">CS4550.12631.202410 Sep 7 at 11:45am</p></li>
                    <li><p class="wd-coming-up-title"><AiTwotoneCalendar/>Lecture</p> <p class="wd-coming-up-text">CS4550.12631.202410 Sep 11 at 11:45am</p></li>
                    <li><p class="wd-coming-up-title"><AiTwotoneCalendar/>CS5610 06 SP23 Lecture</p> <p class="wd-coming-up-text">Sep 11 at 6pm</p></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
  export default Home;