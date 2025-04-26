import { useNavigate } from "react-router-dom";
type ItemType = {
  item: {
    id: number;
    headline: string;
    content: string;
    date: string;
    time: string;
    category: string;
    publisher: string;
  };
};
const ListBox = (item: ItemType) => {
  const navigation = useNavigate();
  return (
    <>
      <div key={item.item.id} className="p-4 px-20 ">
        <div
          className="rounded-xl shadow-2xl  p-4 border-black border-2 hover:bg-gray-100 cursor-pointer"
          onClick={() =>
            navigation(
              `/ogs-news/detail?&type=${item.item.category}&newsid=${item.item.id}&name=Bam`
            )
          }
        >
          <div className="py-2 ">{item.item.date}</div>
          <div className="py-2 font-bold">{item.item.headline}</div>
          <div className="py-2">{item.item.content}</div>
          <div className="py-2">ประเภทข่าว: {item.item.category}</div>
        </div>
      </div>
    </>
  );
};

export default ListBox;
