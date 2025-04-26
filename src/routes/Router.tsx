import { createBrowserRouter, Link } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import NotFoundImg from "../assets/NotFound.png";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import DetailPage from "../pages/DetailPage";
const Router = createBrowserRouter([
  {
    path: "/ogs-news",
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
      {
        path: "",
        element: <Layout />,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "detail",
            element: <DetailPage />,
          },
          {
            path: "news-type/:type/:id",
            element: <NewsPage />,
          },
        ],
      },

      {
        path: "*",
        element: (
          <div className="flex flex-col justify-center items-center h-screen">
            <img src={NotFoundImg} />
            <button className="w-fit p-2 px-6  rounded-xl text-white bg-[#213547] border-[#213547] border-2 hover:bg-white hover:text-black hover:border-2">
              <Link to="/ogs-news/home">กลับสู่หน้าหลัก</Link>
            </button>
          </div>
        ),
      },
    ],
  },
]);

export default Router;
