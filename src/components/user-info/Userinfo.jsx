import React from 'react'
import './user-info.scss'

const Userinfo = ({user}) => {
  return (
    <div className='user-info'>
        <div className="user-info__img">
            <img src={user.img} alt="" />
        </div>
        <div className="user-info__name">
            <span>{user.name}</span>
        </div>

        <button class="cta">
  <span>My profile</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
    </div>
  )
}

export default Userinfo