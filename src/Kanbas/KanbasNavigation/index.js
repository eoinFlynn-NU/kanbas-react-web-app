import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg"
import { BsSpeedometer2, BsCalendarWeek, BsFillInboxFill, BsClock } from "react-icons/bs"
import { BiBook, BiRightArrowCircle } from "react-icons/bi"
import { AiOutlineYoutube, AiOutlineQuestionCircle } from "react-icons/ai"
import "./index.css"
import northeastern from './northeastern-logo.png'



function KanbasNavigation() {
  const links = [
    {name:"Account", icon:<CgProfile size={35} style={{color: "red"}}/>},
    {name:"Dashboard", icon:<BsSpeedometer2 size={35} style={{color: "red"}}/>},
    {name:"Courses", icon:<BiBook size={35} style={{color: "red"}}/>},
    {name:"Calendar", icon:<BsCalendarWeek size={35} style={{color: "red"}}/>},
    {name:"Inbox", icon:<BsFillInboxFill size={35} style={{color: "red"}}/>},
    {name:"History", icon:<BsClock size={35} style={{color: "red"}}/>},
    {name:"Studio", icon:<AiOutlineYoutube size={35} style={{color: "red"}}/>},
    {name:"Commons", icon:<BiRightArrowCircle size={35} style={{color: "red"}}/>},
    {name:"Help", icon:<AiOutlineQuestionCircle size={35} style={{color: "red"}}/>}]
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-sidebar" style={{ width: 150 }}>
        <img src={northeastern}/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.name}`}
          className={`list-group-item ${pathname.includes(link.name) && "wd-active"}`}>
            <div className={`wd-sidebar-link-box ${pathname.includes(link.name) && "wd-active"}`}>
                {link.icon}
                {link.name}
            </div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;