import Logo from "../assets/react.svg";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const pathList = [
    {
      path: "/ogs-news/home",
      name: "หน้าหลัก",
    },
    {
      path: "/ogs-news/news-type/ข่าวทั้งหมด/0",
      name: "ข่าวทั้งหมด",
    },
    {
      path: "/ogs-news/news-type/ข่าวกีฬา/1",
      name: "ข่าวกีฬา",
    },
    {
      path: "/ogs-news/news-type/ข่าวการเมือง/2",
      name: "ข่าวการเมือง",
    },
    {
      path: "/ogs-news/news-type/ข่าวดารา/3",
      name: "ข่าวดารา",
    },
    {
      path: "/ogs-news/news-type/ข่าวทั่วไป/4",
      name: "ข่าวทั่วไป",
    },
  ];
  return (
    <div>
      <nav className="bg-gray-300 flex justify-evenly pr-96 p-6 items-center text-[18px] ">
        <NavLink to="/ogs-news">
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
