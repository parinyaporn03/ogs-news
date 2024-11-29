import { data_new } from "../data/data_news";
import ListBox from "./ListBox";

const HomePage = () => {
  return (
    <>
      {data_new.map((item, index) => (
        <div
          className="flex flex-col justify-center items-center px-10 py-5"
          key={index}
        >
          <div className="text-xl font-bold p-8">{item.title}</div>
          <div className="font-bold  ">{item.sub_title}</div>
        </div>
      ))}
      {data_new[0].type_new.map((item) => (
        <div key={item.id} className=" p-5">
          <div className="pl-8 pb-4 font-bold">ประเภทข่าว : {item.name}</div>
          {item.news_type
            .sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
            .map((item) => <ListBox item={item} />)
            .splice(0, 2)}
        </div>
      ))}
    </>
  );
};

export default HomePage;
