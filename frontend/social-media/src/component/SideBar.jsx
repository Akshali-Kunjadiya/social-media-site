import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div
        id="sidebar"
        class="fixed top-0 left-0 z-40 max-md:top-auto max-md:bottom-0"
      >
        <div
          id="sidebar__inner"
          class="flex sside md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-white shadow dark:bg-dark2 2xl:w-72 xl:w-60 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700"
        >
          {/* <!-- logo --> */}
          <div class="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
            <a href="home.html" id="logo" class="flex items-center gap-3">
              {/* <!-- logo icon --> */}
              <img
                id="logo__icon"
                src="assets/images/logo-icon.png"
                alt=""
                class="md:w-8 hidden text-2xl max-xl:!block max-md:!hidden shrink-0 uk-animation-scale-up"
              />

              {/* <!-- text logo --> */}
              <img
                id="logo__text"
                src="assets/images/logo.svg"
                alt=""
                class="w-full h-6 ml-1 max-xl:hidden max-md:block dark:!hidden"
              />
              <img
                id="logo__text"
                src="assets/images/logo-dark.svg"
                alt=""
                class="w-full h-6 ml-1 !hidden max-xl:!hidden max-md:block dark:max-md:!block dark:!block"
              />
            </a>
          </div>

          {/* <!-- nav --> */}
          <nav class="flex-1 max-md:flex max-md:justify-around md:space-y-2">
            {/* <!-- Home --> */}
            <Link to="/" class="active">
              <svg
                id="icon__outline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <svg
                id="icon__solid"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="hidden"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="max-xl:hidden"> Home </span>
            </Link>
            <a href="!#">
              <button
                uk-toggle="target: #create-post"
                class="flex items-center gap-3 w-full"
              >
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="hidden"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="max-xl:hidden"> Create </span>
              </button>
            </a>

            {/* <div class="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]" uk-drop="animation: uk-animation-slide-left-small , uk-transform-origin-center-left ;animate-out: true; pos: left ; mode:click; offset: 9"> 
            <div class="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">

                
                <div class="px-5 py-4 space-y-5 border-b border-gray-100 dark:border-slate-700">
                    <h3 class="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">Search</h3>

                    <div class="relative -mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" placeholder="Search" class="bg-transparen w-full !pl-10 !py-2 !rounded-lg"/>
                    </div>

                </div>

                

            </div>
        </div>  */}
          </nav>

          {/* <!-- profile --> */}
          <div>
            <a id="profile-link" class="flex items-center gap-3 p-3 group">
              <img
                src="assets/images/avatars/avatar-7.jpg"
                alt=""
                class="rounded-full md:w-7 md:h-7 w-5 h-5 shrink-0"
              />
              <span class="font-semibold text-sm max-xl:hidden">
                {" "}
                Monroe Parker{" "}
              </span>
              <ion-icon
                name="chevron-forward-outline"
                class="text-xl ml-auto duration-200 group-aria-expanded:-rotate-90 max-xl:hidden"
              ></ion-icon>
            </a>
            <div
              class="bg-white sm:w-64 2xl:w-[calc(100%-16px)] w-full shadow-lg border rounded-xl overflow-hidden max-md:!top-auto max-md:bottom-16 border2 dark:bg-dark2 hidden"
              uk-drop="animation:uk-animation-slide-bottom-medium ;animate-out: true"
            >
              <div class="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500"></div>

              <div class="p-4 text-xs font-medium">
                <a href="profile.html">
                  <img
                    src="assets/images/avatars/avatar-3.jpg"
                    class="w-8 h-8 rounded-full"
                    alt=""
                  />
                  <div class="mt-2 space-y-0.5">
                    <div class="text-base font-semibold"> Monroe Parker </div>
                    <div class="text-gray-400 dark:text-white/80">
                      {" "}
                      @monroe{" "}
                    </div>
                  </div>
                </a>
                <div class="mt-3 flex gap-3.5">
                  <div>
                    {" "}
                    <a href="profile.html">
                      {" "}
                      <strong> 620K </strong>{" "}
                      <span class="text-gray-400 dark:text-white/80 ml-1">
                        Following{" "}
                      </span>{" "}
                    </a>{" "}
                  </div>
                  <div>
                    {" "}
                    <a href="profile.html">
                      {" "}
                      <strong> 38k </strong>{" "}
                      <span class="text-gray-400 dark:text-white/80 ml-1">
                        Followers{" "}
                      </span>{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <hr class="opacity-60" />
              <ul class="text-sm font-semibold p-2">
                <li>
                  {" "}
                  <a
                    href=""
                    class="flex gap-3 rounded-md p-2 hover:bg-secondery"
                  >
                    {" "}
                    <ion-icon
                      name="person-outline"
                      class="text-lg"
                    ></ion-icon>{" "}
                    Profile{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="upgrade.html"
                    class="flex gap-3 rounded-md p-2 hover:bg-secondery"
                  >
                    {" "}
                    <ion-icon
                      name="bookmark-outline"
                      class="text-lg"
                    ></ion-icon>{" "}
                    Upgrade{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="setting.html"
                    class="flex gap-3 rounded-md p-2 hover:bg-secondery"
                  >
                    {" "}
                    <ion-icon
                      name="settings-outline"
                      class="text-lg"
                    ></ion-icon>{" "}
                    Acount Setting{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="form-login.html"
                    class="flex gap-3 rounded-md p-2 hover:bg-secondery"
                  >
                    {" "}
                    <ion-icon
                      name="log-out-outline"
                      class="text-lg"
                    ></ion-icon>{" "}
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
