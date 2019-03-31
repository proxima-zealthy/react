import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom';
//import userphoto from 'img/.png'
import Like from '../Actionbuttons/Like';
import Share from '../Actionbuttons/Share';
import Whatsapp from '../Actionbuttons/Whatsapp';
import QnAicon from 'svg/QnACardIcon.svg';
import CardBottom from './CardBottom';
import Spacer from 'utils/Spacer';

import routes from 'routes';
import './QnACard.scss';

export default class QnACard extends Component {
  render() {
    const dataList=this.props.Data; 
   
    function renderQuestion(question){
      if(question.length>=100){
        var newQuestion = question.substr(0, 80);
        return (<span>{newQuestion} <span className="readmore"> read more...</span></span>)
      }else{
        return (<span>{question}</span>);
      }
        
     
    }
    function renderAnswer(answer){
      if(answer.length>=180){
        var newAnswer = answer.substr(0, 150);
        return (<span>{newAnswer} <span className="readmore"> read more...</span></span>);
      }else{
        return (<span>{answer}</span>);
      }
     
    }
     
    return (
        
        <div className="QA-Feed-Container">
          {
            dataList && (
              dataList.map((data, id) => (
                 <div key={ id } className="QACard-container">
                      <div className="QACard-title">
                        <QnAicon/>Q&A
                      </div>
                      <NavLink  to = {`${'/' }QnA/:${data.id}/#${data.question}`}>
                      <div className="QACard-question">
                         <p> Q: { renderQuestion(data.question)}</p>
                      </div>
                      </NavLink>
                      <hr className="QACard-hr"></hr>
                      <div className="QACard-photo">
                          <img className="QACard-img" src="jhj" alt="Avatar" style={{width:'12%'}}></img>
                          <div className="QACard-profile">
                              <h4><b>{ data.author }</b></h4> 
                              <p>MBBS | MD</p><br></br>
                          </div>
                      </div>
                      <NavLink  to = {`${'/' }QnA/:${data.id}/#${data.question}`}>
                      <img className={(!data.thumbnail)? `QACard-thumbnail  image-hidden`:'QACard-thumbnail'} alt="qa-card" src={ data.thumbnail }  ></img>
                      </NavLink>
                      <div className="QACard-desc">
                          <p>{ renderAnswer(data.answer)}</p>
                      </div>
                      <hr className="QACard-hr"></hr>
                      <CardBottom>
                        <Like/>
                        <Spacer/>
                        <Share/>
                        <Whatsapp/>
                      </CardBottom>    
                  </div>
              ))
            )
          }
          
        </div>
    );
  }
}
