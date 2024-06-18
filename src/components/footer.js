import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export default function CustomFooter(){
  return (
    <footer className="bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto px-8 pb-8">
        <hr className="my-6 sm:mx-aut border-gray-700 lg:my-8" />
        <span className="block font-light text-sm sm:text-center text-white">Copyright 2024 Aditya Putra Pratama. Any and all content in here are my personal opinions.</span>
      </div>
    </footer>
  )
}