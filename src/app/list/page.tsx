import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const response = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* CAMPANHA */}
      <div className="bg-pink-50 px-4 flex justify-between h-80 md:h-64 rounded-md">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            50% de desconto em
            <br />
            produtos selecionados
          </h1>
          <button className="rounded-3xl bg-redCount text-white w-max py-3 px-5 text-sm">
            Compre agora
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUTOS */}
      <h1 className="mt-12 text-xl font-semibold text-slate-800">Para você!</h1>
      <Suspense fallback={"loading..."}>
        <ProductList
          categoryId={
            response.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
