//this component fetch the data as articles
import React, { Component } from 'react'
import ArticleData from '../../../../mock-api/ArticleData.json'


export class GetArticleData extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       articleArray:[]
    }

    //const article=ArticleData.map((articleArray,index)=>{return articleArray})
   //const {article[topicNAme].articleimage}
  }
  
  
}

export default GetArticleData
