import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const ItemCount = ({ stock, initial, toAdd }) => {
  const [currentInput, setCurrentInput] = useState(Number(initial));
  return (
    <>
      <div>
        <Button
          aria-label="restar"
          disabled={currentInput <= initial}
          onClick={() => setCurrentInput(currentInput - 1)}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        {currentInput}
        <Button
          aria-label="incrementar"
          disabled={currentInput >= stock}
          onClick={() => setCurrentInput(currentInput + 1)}
        >
          <AddIcon fontSize="small" />
        </Button>
        <Button
          aria-label="comprar"
          disabled={!stock || currentInput > stock}
          onClick={() => toAdd(currentInput)}
        >
          добавить в корзину
        </Button>
      </div>
    </>
  );
};
