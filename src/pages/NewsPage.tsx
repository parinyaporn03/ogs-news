import { data_new } from "../data/data_news";
import { useParams } from "react-router-dom";
import ListBox from "./ListBox";
const NewsPage = () => {
  const { id } = useParams();
  let cataegory = data_new[0].type_new.filter((e) => {
    if (Number(id) > 0) {
      return e.id === Number(id);
    } else {
      return e.news_type[0];
    }
  });
  return (
    <>
      {cataegory.map((cataegory) => (
        <div key={Math.random()}>
          {Number(id) === 0 ? (
            <div className="flex justify-end px-20 py-4">รวมข่าวทั้งหมด</div>
          ) : (
            <div className="px-20 py-4"></div>
          )}
          <div className="flex flex-col justify-center items-center px-10 py-4  text-xl font-bold">
            {cataegory.name}
          </div>
          {cataegory.news_type
            .sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
            .map((item) => (
              <ListBox item={item} />
            ))}
        </div>
      ))}
    </>
  );
};

export default NewsPage;
