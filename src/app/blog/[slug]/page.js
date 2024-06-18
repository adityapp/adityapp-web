import fs from "fs"
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import matter from "gray-matter"

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
    <div className="flex flex-col items-center p-10">
      <article className="prose prose-invert content-center max-w-2xl">
        <p className="text-sm text-gray-400"><i>Published at <b>{blog.data.date}</b></i></p>
        <h1 className="font-extralight text-4xl text-white">{blog.data.title}</h1>
        <Markdown className="text-white font-light " remarkPlugins={[remarkGfm]}>{blog.content}</Markdown>
      </article>
    </div>
  )
}