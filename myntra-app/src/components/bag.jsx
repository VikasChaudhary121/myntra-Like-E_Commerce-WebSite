import BagSummary from "./bagSummary";
import BaggedItems from "./baggedItems";
import { useSelector } from "react-redux";

function Bag() {
  const bagItems = useSelector((state) => state.bag);
  const Items = useSelector((state) => state.items);
  const finalItems = Items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div class="bag-item-container">
          {finalItems.map((Item) => (
            <BaggedItems item={Item}></BaggedItems>
          ))}
        </div>
        {finalItems.length > 0 ? (
          <BagSummary />
        ) : (
          <h2>Nothing there in the cart !!!</h2>
        )}
      </div>
    </main>
  );
}

export default Bag;
