import React, { useState } from 'react';
import logo from '../../../assets/imporve.png';
import { BiPhoneCall } from "react-icons/bi";
const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const menuItem = (
       <>
         <li>
           <a
             href="/"
             class="font-medium tracking-wide text-gray-700"
           >
             Home
           </a>
         </li>
         <li>
           <a
             href="/contact"
             class="font-medium tracking-wide text-gray-700"
           >
             Cotnact
           </a>
         </li>
         <li>
           <a
             href="/blog"
             class="font-medium tracking-wide text-gray-700"
           >
             Blogs
           </a>
         </li>
       </>
     );
    return (
      <div>
        <div
          class="px-4 py-4 lg:py-6 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-24"
          style={{ boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 50%)" }}
        >
          <div class="relative flex flex-row-reverse lg:flex-row items-center justify-between">
            <div class="flex items-center">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center mr-8"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-28 h-8 lg:w-64 lg:h-14"
                  style={{ maxWidth: "85%", marginTop: "-10px" }}
                />
              </a>
              <ul class="flex items-center lg:hidden ">
                <li>
                  <a
                    href="/"
                    class="inline-flex font-bold items-center text-secondary justify-center h-12  "
                  >
                    <BiPhoneCall className="w-10 mr-2 h-9 bg-primary rounded-3xl py-2 hover:text-secondary text-white" />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="font-bold  text-white btn-sm border-0 hover:bg-primary  capitalize btn btn-secondary  rounded-3xl"
                  >
                    Get a Proposal
                  </a>
                </li>
              </ul>
              <ul class="flex items-center justify-center hidden space-x-8 lg:flex">
                {menuItem}
              </ul>
            </div>
            <ul class="flex items-center hidden space-x-36 lg:flex">
              <li>
                <a
                  href="/"
                  class="inline-flex font-bold items-center text-secondary justify-center h-12 px-6 "
                >
                  <BiPhoneCall className="w-10 mr-2 h-9 bg-primary rounded-3xl py-2 hover:text-secondary text-white" />
                  +91 98712 32887
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="font-bold text-white border-0 hover:bg-primary  capitalize btn btn-secondary px-8 rounded-3xl"
                >
                  Get a Proposal
                </a>
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 text-secodnary font-bold"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-6 text-secondary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <img src={logo} alt="" />
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-7 text-primary" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        {menuItem}
                        <li>
                          <a
                            href="/"
                            class="inline-flex font-bold items-center text-secondary justify-center h-12 "
                          >
                            <BiPhoneCall className="w-10 mr-2 h-9 bg-primary rounded-3xl py-2 hover:text-secondary text-white" />
                            +91 98712 32887
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="font-bold text-white border-0 hover:bg-primary  capitalize btn btn-secondary px-8 rounded-3xl"
                          >
                            Get a Proposal
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;