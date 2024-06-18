import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function CustomNavbar() {
  return (
    <Navbar className="bg-gray-900 py-6">
      <NavbarToggle className="focus:outline-none focus:ring-2 hover:bg-gray-800 focus:ring-gray-600"/>
      <NavbarCollapse className="mx-auto text-xl">
        <NavbarLink className="text-sm md:text-base text-white md:hover:text-blue-500 border-none hover:bg-gray-800 rounded-lg hover:text-blue-500" href="/home">Home</NavbarLink>
        <NavbarLink className="text-sm md:text-base text-white md:hover:text-blue-500 border-none hover:bg-gray-800 rounded-lg hover:text-blue-500" href="/blog">Blog</NavbarLink>
        <NavbarLink className="text-sm md:text-base text-white md:hover:text-blue-500 border-none hover:bg-gray-800 rounded-lg hover:text-blue-500" href="/about">About</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}


