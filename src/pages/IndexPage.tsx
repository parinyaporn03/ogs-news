import IndexImg from "../assets/Index.png";
import { Link } from "react-router-dom";
const IndexPage = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center  px-10">
        <div className=" rounded-xl flex flex-col items-center shadow-xl w-full p-8 border-black border-2">
          <img src={IndexImg} />
          <div className="py-2 text-xl font-bold text-[#213547] ">
            ogs Daily News
          </div>
          <Link to="/home">
            <div className="w-fit p-2 px-5 rounded-xl text-white bg-[#213547] border-[#213547] border-2 hover:bg-white hover:text-black hover:border-2 ">
              เข้าสู่เว็บไซต์
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
