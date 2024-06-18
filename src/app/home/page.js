import Image from "next/image";
import { Footer } from "flowbite-react";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter, BsGoogle } from "react-icons/bs";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="font-extralight text-4xl text-white">
        Welcome... ( · ❛ ֊ ❛)
      </h1>

      <div className="justify-center mt-10 min-w-min max-w-2xl border rounded-lg shadow bg-gray-800 border-gray-700">
        <div className="flex flex-col items-center p-10">
          <Image
            width={480}
            height={480}
            className="w-48 h-48 mb-3 rounded-full shadow-lg"
            src="/images/profile.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-white">
            Aditya Putra Pratama
          </h5>
          <h5 className="text-sm text-gray-400">
            Software Engineer
          </h5>
          <div className="mt-4 flex space-x-6 sm:justify-center">
            <Footer.Icon href="https://github.com/adityapp" icon={BsGithub}/>
            <Footer.Icon href="https://instagram.com/ad11tyapp" icon={BsInstagram} />
            <Footer.Icon href="https://x.com/ad1tyapp" icon={BsTwitter} />
            <Footer.Icon href="https://linkedin.com/in/adityapp" icon={BsLinkedin} />
            <Footer.Icon href="mailto:aditpp97@gmail.com" icon={BsGoogle} />
          </div>
          <span className="font-light text-base mt-12 text-white">
            Hi Folks! My name is <b className="text-lg font-normal">Adit</b>, I have been a professional Software Engineer since 2018. Before 2020, I started my career as an Android Developer, and after that, I switched my career to a Backend Engineer.
          </span>
        </div>
      </div>
    </div>
  );
}
