import React, { Component } from 'react'
import Avatar from 'img/authoravatar.png'

export class AuthorAvatar extends Component {
  render() {
    return (
      
       <p><img src={Avatar} alt='author' style={{width:'75px',
        padding:'0'}} /></p> 
      
    )
  }
}

export default AuthorAvatar
