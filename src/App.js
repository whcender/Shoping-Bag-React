import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals  } from './features/cartSlice'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(calculateTotals());
 }, [cartItems, dispatch]);

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  )
}
export default App;
