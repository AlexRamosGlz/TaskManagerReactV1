import SideBarOption from "./SideBarOption/SideBarOption";

import UserSvg from "../../public/svg/user.svg";

function SideBar({ open }) {
  return (
    <nav className={`nav side-bar ${open ? "open" : ""}`}>
      <div className="nav--content">
        <SideBarOption svgSrc={UserSvg} label={"User"} />
        <SideBarOption svgSrc={UserSvg} label={"User"} />
        <SideBarOption svgSrc={UserSvg} label={"User"} />
        <SideBarOption svgSrc={UserSvg} label={"User"} />
      </div>
    </nav>
  );
}

export default SideBar;
