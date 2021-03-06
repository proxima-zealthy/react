import React, { Component } from 'react'
import { connect } from 'react-redux';
import Breadcrumbs from 'components/Breadcrumbs';
import QuickLinks from 'components/Quicklinks';
import Sections from './Section';
import Whatsapp from 'components/Actionbuttons/Whatsapp.js';
import Share from 'components/Actionbuttons/Share';
import Views from 'components/Actionbuttons/Views';

import './AboutPage.scss';

@connect(state => ({ ...state.topic }))
export default class About extends Component {
  render() {
    //console.log(this.props)
    const aboutContent = this.props.data && this.props.data.about;
    const BreadcrumbsItems = [ {"id":1, "name": "Health"},{"id":2, "name": "Foods & other solids"},{"id":3, "name": "introduction "}];
    const QuickLinkItems = [ {"id":1, "name": "section-1"},{"id":2, "name": "section-2"},{"id":3, "name": "section-3"},{"id":4, "name": "section-4"},{"id":5, "name": "section-5"},{"id":6, "name": "section-6"}];
   //console.log('....................get the props',this.props.location.pathname);
   

    return (
      <div className="About-container">
        {/* Article section */}
        <article>
          {
            aboutContent && (
              <div>
                  {/* breadcrumbs with about views  */}
                  <div className="about-breadcrumb">
                    <div className="about-breadcrumb-inner-left">
                      <Breadcrumbs items = { BreadcrumbsItems }/>
                    </div>
                    <div className="about-breadcrumb-inner-right">
                     <Views/>
                    </div>
                  </div>
                  
                  <div className="article-banner">
                    <img className="article-banner-image" src={aboutContent.image} alt="article bannerimage"></img>
                  </div>
                  <QuickLinks items= { QuickLinkItems }/>
                  <div className="aboutSection-wrapper">
                  <a name="target"> &nbsp;</a>
                  <div id="section-1" className="aboutSection-container">
                    <div className="aboutSection-heading">
                      <h2> लक्षण :</h2>
                  </div>
                    <div className="aboutintro-content">
                        <p>ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं। महिलाओं के कंडोम योनि के अंदर और लेबिया के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, पुरुषों के कंडोम 98 % और महिलाओं के कंडोम 95 % तक कारगर साबित हो सकते हैं। ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं। महिलाओं के कंडोम योनि के अंदर और लेबिया के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, पुरुषों के कंडोम 98 % और महिलाओं के कंडोम 95 % तक कारगर साबित हो सकते हैं। ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है।</p>
                    </div>
                  </div>
                </div>
                  <Sections/>
                  <div>

                  </div>
                  
              </div>
        
            )
          }
        </article>

        {/* Some part */}
        <div className="aboutpage-social">
          <Share/>
          <Whatsapp/>
        </div>
        
      </div>
    )
  }
}
