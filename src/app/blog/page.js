import fs from "fs"
import Link from "next/link";
import matter from "gray-matter"

export default function BlogPage(){
  const getBlogMetadata = () => {
    const folder = "blogs/"
    const files = fs.readdirSync(folder)
    const markdownBlog = files.filter((file) => file.endsWith(".md"))

    const allBlogsData = markdownBlog.map((fileName) => {
      const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf8')
      const matterResult = matter(fileContents)
      const slug = fileName.replace(".md", "")
      return {
        slug,
        ...matterResult.data,
      }
    })

    return allBlogsData.sort((a, b) => {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return d-c;
    })
  }

  const blogs = getBlogMetadata();

  return(
    <div className="min-h-screen p-4 md:p-10 font-mono text-terminal-gray max-w-4xl mx-auto">
      <div className="mb-6">
        <span className="text-terminal-green">➜</span> <span className="text-terminal-cyan">~</span> <span className="text-terminal-yellow">ls -l</span> blogs/
      </div>

      <div className="border border-terminal-gray/30 rounded bg-terminal-bg p-4 overflow-x-auto">
        <div className="min-w-[600px]">
           <div className="grid grid-cols-12 gap-4 border-b border-terminal-gray/20 pb-2 mb-2 text-sm text-terminal-gray/60 font-bold uppercase tracking-wider">
              <div className="col-span-2">Permissions</div>
              <div className="col-span-1">User</div>
              <div className="col-span-1">Size</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-6">Name</div>
           </div>
           
           {blogs.map((blog) => (
             <div key={blog.slug} className="grid grid-cols-12 gap-4 py-2 hover:bg-terminal-gray/10 rounded transition-colors group">
               <div className="col-span-2 text-xs font-mono opacity-70">-rw-r--r--</div>
               <div className="col-span-1 text-xs opacity-70">adit</div>
               <div className="col-span-1 text-xs opacity-70">4.0K</div>
               <div className="col-span-2 text-xs opacity-70">{blog.date}</div>
               <div className="col-span-6">
                 <Link href={`/blog/${blog.slug}`} className="text-terminal-cyan group-hover:text-terminal-green group-hover:underline block truncate">
                   {blog.title}
                 </Link>
                 <div className="text-xs text-terminal-gray/50 truncate">{blog.subtitle}</div>
               </div>
             </div>
           ))}
           
           <div className="mt-4 text-xs text-terminal-gray/40">
             Total {blogs.length} files
           </div>
        </div>
      </div>
    </div>
  )
}