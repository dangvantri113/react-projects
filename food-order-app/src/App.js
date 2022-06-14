import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./components/store/cart-context";
import Header from "./components/UI/Header/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </CartContextProvider>
  );
}

export default App;
