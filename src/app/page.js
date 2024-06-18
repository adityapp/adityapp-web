import Image from "next/image";

export default function Home() {
  return (
    <div class="w-screen h-screen flex flex-col">
      <nav class="bg-gray-900">
        <div class="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="flex flex-col items-center h-screen bg-gray-900">
        <div class="p-10">
          <h1 class="font-extralight text-3xl">
            Welcome to My Personal Website
          </h1>
        </div>

        <div class="justify-center m-10 min-w-min max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center p-10">
            <img
              class="w-48 h-48 mb-3 rounded-full shadow-lg"
              src="https://pbs.twimg.com/profile_images/1759797937780183040/1tDV6W6A_400x400.jpg"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Aditya Putra Pratama
            </h5>
            <h5 class="mb-1 text-sm text-gray-500 dark:text-gray-400">
              Software Engineer
            </h5>
            <span class="font-light text-base mt-10 text-gray-900 dark:text-white">
            Hi Folks! My name is <b class="text-lg font-normal">Adit</b>, I have been a professional Software Engineer since 2018. Before 2020, I started my career as an Android Developer, and after that, I switched my career to a Backend Engineer.
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center p-10 bg-gray-900">
          <h1 class="font-extralight text-sm">Copyright 2024 Aditya Putra Pratama. Any and all content in here are my personal opinions.</h1>
      </div>
    </div>
  );
}
