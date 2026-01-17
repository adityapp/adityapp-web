import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter, BsGoogle } from "react-icons/bs";

export default function HomePage() {
  const jsonProfile = JSON.stringify({
    name: "Aditya Putra Pratama",
    role: "Backend Engineer",
    experience: "Since 2018",
    stack: ["Go", "Java", "Kubernetes", "AWS"],
    status: "Building cool stuff..."
  }, null, 2);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] p-4 md:p-10 font-mono">
      <div className="w-full max-w-3xl bg-terminal-bg border border-terminal-gray/30 rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-terminal-current px-4 py-2 flex items-center border-b border-terminal-gray/30">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
          </div>
          <div className="flex-1 text-center text-xs text-terminal-gray">
            adityapp@macbook-pro: ~
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
             <div className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-terminal-green to-terminal-cyan rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  width={480}
                  height={480}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-terminal-bg"
                  src="/profile.jpg"
                  alt="Aditya Profile"
                />
             </div>

             <div className="flex-1 w-full">
               <div className="space-y-4">
                 <div>
                   <span className="text-terminal-green">➜</span> <span className="text-terminal-cyan">~</span> <span className="text-terminal-yellow">cat</span> profile.json
                 </div>
                 <pre className="text-terminal-gray text-sm md:text-base overflow-x-auto">
                   <code>{jsonProfile}</code>
                 </pre>
               </div>
             </div>
          </div>

          <div className="space-y-2 mt-8">
            <div>
              <span className="text-terminal-green">➜</span> <span className="text-terminal-cyan">~</span> <span className="text-terminal-yellow">./connect.sh</span> --all
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              <a href="https://github.com/adityapp" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-terminal-gray hover:text-terminal-green group border border-terminal-gray/30 p-2 rounded hover:border-terminal-green transition-all">
                <BsGithub className="group-hover:scale-110 transition-transform" />
                <span>github.sh</span>
              </a>
              <a href="https://linkedin.com/in/adityapp" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 text-terminal-gray hover:text-terminal-cyan group border border-terminal-gray/30 p-2 rounded hover:border-terminal-cyan transition-all">
                <BsLinkedin className="group-hover:scale-110 transition-transform" />
                <span>linkedin.sh</span>
              </a>
              <a href="mailto:aditpp97@gmail.com"
                className="flex items-center space-x-2 text-terminal-gray hover:text-terminal-yellow group border border-terminal-gray/30 p-2 rounded hover:border-terminal-yellow transition-all">
                <BsGoogle className="group-hover:scale-110 transition-transform" />
                <span>mail_me.sh</span>
              </a>
               <a href="https://x.com/ad1tyapp" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 text-terminal-gray hover:text-terminal-green group border border-terminal-gray/30 p-2 rounded hover:border-terminal-green transition-all">
                <BsTwitter className="group-hover:scale-110 transition-transform" />
                <span>twitter.sh</span>
              </a>
               <a href="https://instagram.com/ad11tyapp" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 text-terminal-gray hover:text-terminal-cyan group border border-terminal-gray/30 p-2 rounded hover:border-terminal-cyan transition-all">
                <BsInstagram className="group-hover:scale-110 transition-transform" />
                <span>instagram.sh</span>
              </a>
            </div>
          </div>
          
          <div className="pt-6 border-t border-terminal-gray/20">
             <div className="typing-effect text-terminal-gray">
                <span className="text-terminal-green">➜</span> <span className="text-terminal-cyan">~</span> echo &quot;Welcome to my digital workspace. I build scalable backends.&quot;<span className="blink">_</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
