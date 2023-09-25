// Write your JS code here

import './index.css'

const UserInfo = props => {
  const {name} = props
  return (
    <div className="profile">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="image"
      />
      <h1 className="name">Wade Warren</h1>
      <p className="developer">Software Developer at UK</p>
    </div>
  )
}

export default UserInfo
