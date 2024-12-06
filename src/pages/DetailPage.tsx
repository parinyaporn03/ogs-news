import { useNavigate, useSearchParams } from "react-router-dom";
import { data_new } from "../data/data_news";
import { useEffect, useState } from "react";
const DetailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const news_id = searchParams.get("newsid");
  const name = searchParams.get("name");
  const type = searchParams.get("type");
  const number_id = Number(news_id);
  const [detail, setDetail] = useState({
    id: 0,
    headline: "",
    content: "",
    date: "",
    time: "",
    category: "",
    publisher: "",
  });
  // ดักพาร์ทกรณีที่พิมพ์มั่วหรือไม่มีข้อมูล
  useEffect(() => {
    const check_news_type = data_new[0].type_new.some(
      (item) => item.name === type
    );
    const check_id_news = data_new[0].type_new.some(
      (item) => item.id === number_id
    );
    if (!check_news_type || !check_id_news) {
      navigate("/");
    } else {
      const detail_filter = data_new[0].type_new
        .filter((i) => i.name === type)[0]
        .news_type.filter((i) => i.id === Number(news_id))[0];
      setDetail(detail_filter);
    }
  }, [news_id, name, type, navigate]);
  return (
    <>
      <div className="px-20 py-10 ">
        <div className="flex justify-end ">ผู้เข้าชม: {name}</div>
        <div className="flex flex-col justify-center items-center px-10 py-10 text-xl font-bold">
          <div>รายละเอียด{detail.category}</div>
        </div>
        <div className=" ">
          <div className="rounded-xl shadow-2xl p-4 border-black border-2 ">
            <div className="py-2 ">รหัสข่าว: {detail.id}</div>
            <div className="py-2 ">วันที่ลงข่าว: {detail.date}</div>
            <div className="py-2 ">เวลาที่ลงข่าว: {detail.time}</div>
            <div className="py-2 ">หัวข้อข่าว: {detail.headline}</div>
            <div className="py-2">เนื้อหาข่าว: {detail.content}</div>
            <div className="py-2 ">ประเภทข่าว: {detail.category}</div>
            <div className="py-2 ">สำนักข่าว: {detail.publisher}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
