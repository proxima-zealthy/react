import React, { Component } from 'react'

export default  class ArticleQuickBites extends Component {
  render() {
    
    return (
        <div className="quickbites-container">
          <div className="quickbites-header">
            <h2>एक नज़र</h2>
          </div>
          <div className="quickbites-body">
            <ul>
              <li>
                <p> हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है।</p>
              </li>
              <li>
                <p> लोगों में गर्भनिरोधक विकल्पों को लेकर कई भ्रांतियां मौजूद हैं।</p>
              </li>
              <li>
                <p> यदि आप बच्चा होने के तुरंत बाद गर्भवती नहीं होना चाहती हैं, तो गर्भनिरोधक का एक प्रभावी तरीका चुनें।</p>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
