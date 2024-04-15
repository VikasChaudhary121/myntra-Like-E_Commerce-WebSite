import { useSelector } from "react-redux";

function BagSummary() {
  const bagItems = useSelector((state) => state.bag);
  const Items = useSelector((state) => state.items);
  const finalItems = Items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  let sum = 0;
  let discount = 0;
  for (let i = 0; i < finalItems.length; i++) {
    sum += finalItems[i].current_price;
    discount += finalItems[i].original_price - finalItems[i].current_price;
  }

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({finalItems.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{sum}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">You Saved : </span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{sum + 99}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagSummary;
