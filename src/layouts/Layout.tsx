import Logo from "../assets/react.svg";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const pathList = [
    {
      path: "/home",
      name: "หน้าหลัก",
    },
    {
      path: "ข่าวทั้งหมด/0",
      name: "ข่าวทั้งหมด",
    },
    {
      path: "ข่าวกีฬา/1",
      name: "ข่าวกีฬา",
    },
    {
      path: "ข่าวการเมือง/2",
      name: "ข่าวการเมือง",
    },
    {
      path: "ข่าวดารา/3",
      name: "ข่าวดารา",
    },
    {
      path: "ข่าวทั่วไป/4",
      name: "ข่าวทั่วไป",
    },
  ];
  return (
    <div>
      <nav className="bg-gray-300 flex justify-evenly pr-96 p-6 items-center text-[18px] ">
        <NavLink to="/">
          <img src={Logo} width={40} />
        </NavLink>
        {pathList.map((e) => (
          <NavLink
            to={e.path}
            className={({ isActive }) =>
              isActive ? "active text-[#3F9DBA]" : "hover:text-[#3F9DBA]"
            }
          >
            {e.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
