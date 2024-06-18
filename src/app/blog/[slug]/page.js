import fs from "fs"
import ReactMarkdown from 'react-markdown'
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
    <ReactMarkdown className="text-white" remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
  )
}