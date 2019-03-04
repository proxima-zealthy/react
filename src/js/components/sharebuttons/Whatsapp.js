import React, { Component } from 'react'
import LikeSvg from 'svg/like.svg';
import ViewsSvg from 'svg/views.svg';
import WhatsappSvg from 'svg/whatsapp.svg'
import HeartlikeSvg from 'svg/heartlike.svg'

export class Whatsapp extends Component {
  render() {
    return (
        <div>
        <a href="/"><ViewsSvg/></a>
        <a href="/"><LikeSvg/></a>
        <a href="/"><WhatsappSvg/></a>
        <a href="/"><HeartlikeSvg/></a>
        </div>
    )
  }
}

export default Whatsapp
