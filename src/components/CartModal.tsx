"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl text-slate-900 font-semibold">Shooping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/7301825/pexels-photo-7301825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="product"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold text-slate-900">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm text-slate-900">R$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qtd. 2</span>
                  <span className="text-blue-500">Excluir</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/7301825/pexels-photo-7301825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="product"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">R$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qtd. 2</span>
                  <span className="text-blue-500">Excluir</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="text-slate-900">Subtotal</span>
              <span className="text-slate-900">R$98</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Envio e taxas calculadas no checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 text-slate-900">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-slate-900 text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
