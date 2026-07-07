import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, totalItems, totalPrice } =
    useSelector((state) => state.cart);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      <br />

      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <hr />

          <br />

          <h2>Total Items : {totalItems}</h2>

          <br />

          <h2>
            Total Price : ${totalPrice.toFixed(2)}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;