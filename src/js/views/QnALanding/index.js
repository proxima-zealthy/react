import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink,Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import routes from 'routes';
import BottomBar from 'components/BottomnavMobile';
import Whatsapp from 'components/Actionbuttons/Whatsapp.js'
import Like from 'components/Actionbuttons/Like';
import Share from 'components/Actionbuttons/Share';
import Commentoverlay from 'components/Actionbuttons/Commentoverlay'
import Breadcrumbs from 'components/Breadcrumbs';
import QnAContent from './QnAContent';
import AuthorDesc from '../PageRelatedComponent/AuthorDesc';
import Spacer from 'utils/Spacer'
import { fetchTopicById , fetchQAByQustionId } from "reducers/topic";
//import RelatedArticles from 'components/RelatedArticles';
import './QnAPage.scss';

@connect(state => ({ ...state.topic, }), {
    fetchTopicById,fetchQAByQustionId
  })

export default class QnALanding extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           hidden : false
        }
        this.onScrollRemoveBottomNav = this.onScrollRemoveBottomNav.bind(this);
    } 
    static fetchData({ store, params }) {
        const questionId = params.id;
        
        return Promise.all([store.dispatch(fetchTopicById(questionId)), store.dispatch(fetchQAByQustionId(questionId))]).then(() => {})
          .catch(err => {
            // TODO: Redirect to Not Found page for qna
            console.log('Display notification on error...', err);
          }); // Dispatch action for store passed from server
      }

    onScrollRemoveBottomNav(){
        function isScrolledIntoView(el) {
         
          var elementTop = el.offsetTop;
          var elementBottom = elementTop + el.offsetHeight;
    
          var viewportTop = window.pageYOffset || document.documentElement.scrollTop;
          var viewportBottom = viewportTop + window.innerHeight;
          
    
          //return elementBottom > viewportTop && elementTop < viewportBottom ;
          return elementTop < viewportBottom ;
        }
        var el = document.getElementById("comment-block");
        
        var getSection = isScrolledIntoView(el);
        
        if(getSection ){
          this.setState({hidden:true});
        }
        else{
          this.setState({hidden:false});
        }  
    
    }
    componentDidMount() {
      // Check if data already exits from server side state
      if (!this.props.qaById) {
        const questionId = this.props.match.params.id;
        var result1 = this.props.fetchTopicById(questionId);
        var result2= this.props.fetchQAByQustionId(questionId);
        Promise.all([result1,result2])
          .then(res => {
            console.log('Promise chain...', res);
          })
          .catch(err => {
            // TODO: Redirect to Not Found page for topics
            console.log('Display notification on error...', err);
          });
      }
      
  
      window.addEventListener('scroll',this.onScrollRemoveBottomNav)
      
    }
    
    componentWillUnmount(){
      window.removeEventListener('scroll',this.onScrollRemoveBottomNav);
    }
    
  render() {
      const data = this.props.qaById;
      const qaId = this.props.match.params;
      const breadcrumbItems = [ {"id":1, "name": "acne"}, {"id":2, "name": "QnA"},{"id":3, "name": "QnA-question"}];
    
    return (
        <div>
        <Breadcrumbs items = { breadcrumbItems }/>
        {/* the body of article  */}

        <QnAContent qaContent = { data }/>
        <AuthorDesc/>
        {/*here goes the footer overlay section inside the pagecontent */}
        <div style={{position:'relative',top:'-80px'}}>
        <BottomBar isStatic = {true}>
              <Like/>
              <Spacer/>
              <Share/>
              <Whatsapp/>
        </BottomBar>
        </div>
        {/*the latest comments area inside article page ...yet to be designed */}

        <div id = "comment-block" className = "comment-block">
            <ul>
              {/*comments.map(( comment )=>(
                  <li key = { comment.id }>
                    <p><span>{ comment.user }</span>:<span>{ comment.text }</span></p>
                  </li>
              ))*/}  
            </ul> 
            <NavLink to = { routes.COMMENTS.path }>
              <div style = {{ width:'100%',padding:' 60px 0px 0 0px' }}>
                <button style = {{ width:'inherit' }}>show all comments</button>
              </div> 
            </NavLink>
        </div>
       
        {/*bottom footer area as overlay */}
          <BottomBar controllerClass = { this.state.hidden }>
              <Like/>
              <Spacer/>
              <Share/>
              <Whatsapp/>
          </BottomBar> 
      </div>
    )
  }
}
