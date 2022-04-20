import { CartProvider } from "./cartContext";
import { MoneyProvider } from "./money";

export const MainProvider = ({ children }) => {
  return (
    <>
      <MoneyProvider>
        <CartProvider>{children}</CartProvider>
      </MoneyProvider>
    </>
  );
};
