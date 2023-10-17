"use client";
import React from "react";
import Columns from "./Columns";
import Footer from "./Footer";
import Search from "./Search";

const Table = ({ headers, rows, pages, showFilter }) => {
  return (
    <section className=" dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        {/* Start coding here */}
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          {/* Header */}
          <Search showFilter={showFilter} />

          {/* Data */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {/* Head */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <Columns headers={headers} />
              </thead>
              {/* Rows */}
              <tbody> {rows}</tbody>
            </table>
          </div>

          <Footer pages={pages} />
        </div>
      </div>
    </section>
  );
};

export default Table;
