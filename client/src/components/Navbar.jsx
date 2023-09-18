import React, { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      <div className="absolute text-4xl text-white mt-5 ml-10 font-semibold">
        VAULTIFY
      </div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-end p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-row justify-start">
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <NavLink
              to="/"
              className="text-sm hover:bg-blue-100 p-1 rounded-2xl font-semibold leading-6 text-white hover:text-black"
            >
              Home
            </NavLink>
            <NavLink
              to="/files"
              className="text-sm hover:bg-blue-100 p-1 rounded-2xl font-semibold leading-6 text-white hover:text-black"
            >
              Files
            </NavLink>
            <NavLink
              to="/share"
              className="text-sm hover:bg-blue-100 p-1 rounded-2xl font-semibold leading-6 text-white hover:text-black"
            >
              Share
            </NavLink>
          </Popover.Group>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white/10 backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/files"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Files
                </NavLink>
                <NavLink
                  to="/share"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Shares
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
