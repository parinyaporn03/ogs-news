import { useSearchParams } from "react-router-dom";
import { data_new } from "../data/data_news";
const DetailPage = () => {
  const [searchParams] = useSearchParams();
  const newsId = searchParams.get("newsid");
  const name = searchParams.get("name");
  const type = searchParams.get("type");
  const detail = data_new[0].type_new
    .filter((i) => i.name === type)[0]
    .news_type.filter((i) => i.id === Number(newsId))[0];
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
