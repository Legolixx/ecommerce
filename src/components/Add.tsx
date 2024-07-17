"use client";
import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  //TEMPORARIO

  const stock = 4

  const handleQuantity = (type: "I" | "D") => {
    if (type === "D" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "I" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Escolha a quantidade</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("D")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("I")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 itens</span> left!{" "}
            {"Dont´t"} miss it
          </div>
        </div>
        <button className="w-48 text-sm rounded-3xl ring-1 ring-redCount text-redCount py-2 px-4 hover:bg-redCount hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Add;
