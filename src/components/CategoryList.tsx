import Image from "next/image";
import Link from "next/link";

const categoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex w-full items-center justify-center gap-4 md:gap-8">
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="category_img"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide text-center">
            Category Name
          </h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="category_img"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="category_img"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="category_img"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="category_img"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default categoryList;
