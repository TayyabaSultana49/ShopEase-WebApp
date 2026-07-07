import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.thumbnail}
        alt={item.title}
        width="80"
      />

      <div style={{ flex: 1, marginLeft: "20px" }}>
        <h4>{item.title}</h4>

        <p>${item.price}</p>

        <button
          onClick={() =>
            dispatch(decreaseQuantity(item.id))
          }
        >
          -
        </button>

        <span style={{ margin: "10px" }}>
          {item.quantity}
        </span>

        <button
          onClick={() =>
            dispatch(increaseQuantity(item.id))
          }
        >
          +
        </button>

        <br />
        <br />

        <button
          className="btn"
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;