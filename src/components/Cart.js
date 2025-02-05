import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="mb-10 text-center">
      <h1 className="my-7 text-2xl font-extrabold">Cart</h1>
      <div className="mx-auto my-4 w-6/12">
        <button
          className="h-6 w-32 cursor-pointer border border-gray-400 text-orange-400 transition duration-80 ease-in hover:-translate-y-0.5"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className="mt-24 text-6xl text-orange-400 font-extrabold">Feeling Hungry!! Order Something Now!!</h1>}
        <CartItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
