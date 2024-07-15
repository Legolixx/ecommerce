"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;

    if(search) {
        router.push(`/list?query=${search}`)
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
    >
      <input
        name="search"
        type="text"
        placeholder="Buscar"
        className="flex-1 bg-transparent outline-none"
      />
      <button>
        <Image src="/search.png" alt="search_icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
