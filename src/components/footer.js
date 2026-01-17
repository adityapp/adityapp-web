export default function CustomFooter() {
  return (
    <footer className="w-full bg-terminal-bg border-t border-terminal-gray/20 pt-4 pb-2 mt-auto font-mono text-xs text-terminal-gray">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex space-x-4">
          <span>MODE: <span className="text-terminal-green">INSERT</span></span>
          <span>BRANCH: <span className="text-terminal-yellow">main</span></span>
        </div>
        
        <div className="text-center md:text-right">
          <p>© 2024 Aditya Putra Pratama. <span className="hidden sm:inline">|</span> <span className="block sm:inline">Echoing personal opinions to stdout.</span></p>
        </div>
        
        <div className="hidden md:block">
          <span>Ln 1, Col 1</span>
        </div>
      </div>
    </footer>
  )
}