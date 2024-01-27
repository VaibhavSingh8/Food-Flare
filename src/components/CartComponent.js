import CategoryItemsList from "./CategoryItemsList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const CartComponent = () => {

  //subscribing to store for cart items
  const cartItems = useSelector((store) => store.cart.items);
  const itemQuantity = useSelector((store) => store.cart.itemQ);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (

    <div className=" text-center p-4 m-4">
      <h1 className="text-2xl font-semibold">Cart</h1>
      <button className=" m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>

      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1>Oops! The cart is empty. Please add some Items to your cart!</h1>
        )}
        <CategoryItemsList items={cartItems} quant={itemQuantity} />
      </div>
    </div>
  );
}

export default CartComponent;