import fs from "fs"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function BlogContentPage(props){
  const getBlogContent = (slug) => {
    const folder = "blogs/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    return content
  }

  const content = getBlogContent(props.params.slug)
  
  return(
    <Markdown className="text-white" remarkPlugins={[remarkGfm]}>{content}</Markdown>
  )
}