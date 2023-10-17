import React from "react";

const Filters = ({ show, handleHide }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleHide();
  };

  const handleReset = (e) => {
    e.preventDefault();
    handleHide();
  };

  return (
    <form
      action="#"
      method="get"
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 ${
        show ? "" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
      onSubmit={handleSubmit}
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
          {/* Modal header */}
          <div className="flex items-start justify-between px-6 py-4 rounded-t">
            <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Filter by category
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="grid grid-cols-2 gap-2 px-4 md:px-6 md:grid-cols-3">
            <div className="flex items-center">
              <input
                id="apple"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="apple"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Apple (56)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="fitbit"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="fitbit"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Fitbit (56)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="dell"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="dell"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Dell (56)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="asus"
                type="checkbox"
                defaultValue
                defaultChecked
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="asus"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Asus (97)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="logitech"
                type="checkbox"
                defaultValue
                defaultChecked
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="logitech"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Logitech (97)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="msi"
                type="checkbox"
                defaultValue
                defaultChecked
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="msi"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                MSI (97)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="bosch"
                type="checkbox"
                defaultValue
                defaultChecked
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bosch"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Bosch (176)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="sony"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="sony"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sony (234)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="samsung"
                type="checkbox"
                defaultValue
                defaultChecked
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="samsung"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Samsung (76)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="canon"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="canon"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Canon (49)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="microsoft"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="microsoft"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Microsoft (45)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="razor"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="razor"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Razor (49)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="emetec"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="emetec"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Emetec (16)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="nvidia"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="nvidia"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nvidia (45)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="hp"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="hp"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                HP (234)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="benq"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="benq"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                BenQ (45)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="rockstar"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="rockstar"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Rockstar (49)
              </label>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-4 rounded-b dark:border-gray-600">
            <button
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filters;
