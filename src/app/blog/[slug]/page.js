import fs from "fs"
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import matter from "gray-matter"
import Link from "next/link"

export default function BlogContentPage(props){
  const getBlogContent = (slug) => {
    const folder = "blogs/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)
    return matterResult
  }

  const blog = getBlogContent(props.params.slug)
  
  return(
    <div className="min-h-screen p-4 md:p-10 font-mono text-terminal-gray max-w-4xl mx-auto">
      <div className="mb-6">
        <span className="text-terminal-green">➜</span> <span className="text-terminal-cyan">~</span> <Link href="/blog" className="text-terminal-gray/60 hover:text-terminal-gray">blogs/</Link> <span className="text-terminal-yellow">cat</span> {props.params.slug}.md
      </div>
      
      <article className="prose prose-invert prose-green prose-pre:bg-terminal-bg prose-pre:border prose-pre:border-terminal-gray/30 max-w-none">
        <div className="border-b border-terminal-gray/20 pb-4 mb-8">
           <h1 className="font-bold text-3xl text-terminal-green mb-2">{blog.data.title}</h1>
           <p className="text-sm text-terminal-gray/60">
             {`// Published at: ${blog.data.date}`}
           </p>
        </div>
        <Markdown remarkPlugins={[remarkGfm]}>{blog.content}</Markdown>
      </article>
      
      <div className="mt-12 pt-6 border-t border-terminal-gray/20">
        <Link href="/blog" className="text-terminal-cyan hover:text-terminal-green">
           cd ..
        </Link>
      </div>
    </div>
  )
}