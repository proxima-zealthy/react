import React from 'react'
import './ProfileIcon.scss';

export default function ProfileIcon() {
  return (
    <div className="ProfileIcon-container">
        <img className="ProfileIcon-img" src="jhj" alt="Avatar" style={{width:'12%'}}></img>
        <div className="Profile-desc">
            <h4><b>{/* data.author */}author-name</b></h4> 
            <p>MBBS | MD</p><br></br>
        </div>
    </div>
  )
}
