// Write your JS code here

import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(eachBlogList => (
        <BlogItem eachBlogList={eachBlogList} key={eachBlogList.id} />
      ))}
    </ul>
  )
}

export default BlogList
