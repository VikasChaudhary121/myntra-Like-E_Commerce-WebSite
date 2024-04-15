import BodyCards from "./components/body";
import { useSelector } from "react-redux";
import "./App.css";

function Home() {
  const items = useSelector((store) => store.items);

  return (
    <>
      <div className="home">
        {items.map((item) => (
          <BodyCards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Home;
