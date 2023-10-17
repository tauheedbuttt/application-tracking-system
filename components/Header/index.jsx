"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pages = [
    {
      name: "Jobs",
      path: "/jobs",
    },
    {
      name: "Candidates",
      path: "/candidates?page=1&limit=10",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];
  const currentPage = usePathname();

  const [dropdown, setDropdown] = useState(false);

  return (
    <header>
      <nav class="bg-black border-gray-200 px-4 lg:px-4 py-2.5 dark:bg-gray-800 shadow-lg">
        <div class="flex flex-wrap justify-between items-center ">
          {/* App Name */}
          <Link href="/jobs" class="flex items-center ">
            <img
              src="https://ismmartindustries.com/cdn/shop/files/new-specie-08.svg?v=1695898435&width=200"
              // src="https://ismmart.com/cdn/shop/files/shopify-logos-10.svg?v=1694788837&width=200"
              class="h-6 sm:h-9"
              alt="ISMMART"
            />
            {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
          </Link>
          {/* Profile and Nav Icon */}
          <div class="flex items-center lg:order-2">
            <Link
              href={"/profile"}
              class="text-white rounded-lg text-sm text-center inline-flex items-center"
            >
              <img src="/assets/images/user.png" className="h-8 max-w-full" />
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setDropdown(!dropdown)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Pages */}
          <div
            class={` ${
              !dropdown ? "hidden" : ""
            } justify-between items-center w-full lg:flex lg:w-auto lg:flex-1 lg:order-1 lg:ml-20 `}
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-5">
              {pages?.map((item, index) => {
                const active = item.path.includes(currentPage)
                  ? "lg:text-white bg-white "
                  : "text-gray-500 hover:text-white";
                return (
                  <li key={index} onClick={() => setDropdown(false)}>
                    <Link
                      href={item.path}
                      class={`text-sm block py-2 pr-4 pl-3 rounded lg:bg-transparent ${active} lg:p-0 dark:text-white`}
                      aria-current="page"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
