"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { queryToObject, objToQuery } from "@/helpers/query";

const Footer = ({ pages }) => {
  const pathname = usePathname();
  const query = queryToObject(useSearchParams().toString());
  const { page, limit } = query;

  const setPage = (page) => {
    return `${pathname}?${objToQuery({
      ...query,
      page: !page ? 1 : page < 1 ? 1 : page > pages ? pages : page,
    })}`;
  };

  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ">
        Showing
        <span className="font-semibold text-gray-900 dark:text-white mx-1">
          1-10
        </span>
        of
        <span className="font-semibold text-gray-900 dark:text-white ml-1">
          {pages * parseInt(limit)}
        </span>
      </span>
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <Link
            href={setPage(parseInt(page) - 1)}
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>
        {Array.from({ length: pages }).map(
          (item, index) =>
            index - 2 < parseInt(page) &&
            parseInt(page) < index + 4 && (
              <li key={index}>
                <a
                  href={setPage(index + 1)}
                  className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
                    page == index + 1 ? "text-primary-600" : "text-gray-500"
                  } bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {index + 1}
                </a>
              </li>
            )
        )}
        <li>
          <a
            href={setPage(parseInt(page) + 1)}
            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
