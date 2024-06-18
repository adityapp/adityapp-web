import fs from "fs"
import { Card } from "flowbite-react";
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
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
  }

  const blogPreview = getBlogMetadata().map((blog) => (
    <Card key={blog.slug} href={`/blog/${blog.slug}`} className="max-w-3xl mt-4 bg-gray-800 border-gray-700 hover:bg-blue-500">
      <div className="flex flex-col">
        <h5 className="text-xl mb-1 font-medium text-white">
          {blog.title}
        </h5>
        <p className="text-sm text-gray-400">{blog.date}</p>
        <p className="font-light mt-6 text-base text-white">
          {blog.subtitle}
        </p>
      </div>
    </Card>
  ))

  return(
    <div className="flex flex-col items-center p-10">
      <h1 className="font-extralight text-3xl text-white">
        Blog
      </h1>

      <div className="mt-4">{blogPreview}</div>
    </div>
  )
}