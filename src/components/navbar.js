import Link from "next/link";

export default function CustomNavbar() {
  return (
    <nav className="w-full bg-terminal-bg border-b border-terminal-gray/20 py-4 px-4 md:px-8 font-mono">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-terminal-green text-lg font-bold hover:text-terminal-highlight">
          <span className="text-terminal-gray">adityapp@dev:</span>~$
        </Link>
        
        <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0">
          <Link href="/home" className="text-terminal-gray hover:text-terminal-green transition-colors">
            ~/home
          </Link>
          <Link href="/blog" className="text-terminal-gray hover:text-terminal-green transition-colors">
            ~/blog
          </Link>
          <Link href="/experience" className="text-terminal-gray hover:text-terminal-green transition-colors">
            ~/experience
          </Link>
        </div>
      </div>
    </nav>
  );
}


