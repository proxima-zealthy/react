import React, { Component } from 'react';
//import Banner from './Banner';
//import Heading from './Heading';
import QA_Author from 'components/AuthorDetails/Author';
import QA_Avatar from 'components/AuthorDetails/AuthorAvatar';
//import AllSection from './Sections';
import ViewsSvg from 'svg/views.svg';

export default class QnAContent extends Component {
  render() {
    const content = this.props.qaContent.content;
    //const views=this.props.data.views;
    return (
      <div className="QA-container">
        {/**/}
        <article>
          {
             content &&(
              <div className="QA-wrapper">
                 <div className="QA-heading" >
                    <h1 className="QA-heading-inner">Q:{ content.question  }</h1>
                 </div> 
                 <hr className="hr-line" ></hr>
                
                {/*auther section */}
                <div className="Authordetails-Area" >
                  <div className="author">
                      <p className="AuthorAvatar"><QA_Avatar/></p>
                      <p className="AuthorName"><QA_Author/></p>
                  </div>
                </div>

                <div className="QA-banner">
                    <img className="QA-banner-image" src={ content.image}></img>
                </div>

                {/*article introduction  */}
                <div className="QA-body">
                    <p> { content.answer } </p>
                </div>
                
                
              </div>
            )
          }
        </article>
        

        {/**/}
      </div>
        
    )
  }
}
