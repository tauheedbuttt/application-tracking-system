"use client";
import React, { useEffect, useState } from "react";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { queryToObject, objToQuery } from "@/helpers/query";

const Search = ({ onSearch, showFilter }) => {
  const pathname = usePathname();
  const router = useRouter();
  const query = queryToObject(useSearchParams().toString());
  const [text, setText] = useState("");

  const setSearch = (e) => {
    setText(e.target.value);
    router.push(
      `${pathname}?${objToQuery({
        ...query,
        text: e.target.value,
      })}`
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch();
  };

  useEffect(() => setText(query.text), query);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      {showFilter && (
        <button
          onClick={showFilter}
          className=" hover:bg-gray-200 p-4 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="h-4 w-4 text-black"
            viewbox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      )}
      <div className="w-full">
        <form className="flex items-center" onSubmit={onSubmit}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
              required
              onChange={setSearch}
              value={text}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
