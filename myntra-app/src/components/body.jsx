import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { BagAction } from "../store/bagSlice";

function BodyCards({ item }) {
  const bagItems = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const itemFound = bagItems.indexOf(item.id) >= 0;

  const handleAddBtn = () => {
    dispatch(BagAction.addToBag(item.id));
  };
  const handleRemoveBtn = () => {
    dispatch(BagAction.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="image-item" src={item.image} alt="image" />
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs. {item.current_price}</span>
        <span className="original-price">Rs. {item.original_price}</span>
        <span className="discount">({item.discount_percentage} %OFF)</span>
      </div>
      <div className="rating">
        <span>
          {item.rating.stars}
          <IoStar />
        </span>
        <span> {item.rating.count} reveiws</span>
      </div>
      {itemFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemoveBtn}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddBtn}
        >
          Add To Bag
        </button>
      )}
    </div>
  );
}

export default BodyCards;
