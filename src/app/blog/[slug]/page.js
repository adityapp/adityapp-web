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
    return matterResult.content
  }

  const content = getBlogContent(props.params.slug)
  
  return(
    <article><Markdown className="text-white" remarkPlugins={[remarkGfm]}>{content}</Markdown></article>
  )
}