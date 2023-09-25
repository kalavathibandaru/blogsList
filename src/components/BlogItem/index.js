// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {eachBlogList} = props
  const {id, title, description, publishedDate} = eachBlogList
  return (
    <li className="list-item">
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
