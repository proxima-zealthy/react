export default function prepareAboutForTopicId (id) {
  return {
    id: id,
    about: aboutContent,
    videos: videos,
    tips: tipsContent,
    QnA: qaContent,
    home_remedies: tipsContent, //same content as tips for demo purpose
    tabs: [
      'about',
      'videos',
      'tips',
      'Q & A',
      'home & remedies'
    ],
  };
}

const aboutContent = {
  "id": 1,
  "meta-tags":"",
  "title": "जयपुर इंडियन ऑयल डिपो अग्निकांड",
  "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "image":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
  "author":"proxima",
  "thumbnail":"",
  "navigationtabs":[
    {
      "id":1,
      "tab-name":"about"
    },
    {
      "id":2,
      "tab-name":"home & remedies"
    },
    {
      "id":3,
      "tab-name":"Tips"
    },
    {
      "id":3,
      "tab-name":"Q & A"
    }
  ],
  "tags":[
    {
      "id":1,
      "tag-name":"tag1"
    },
    {
      "id":2,
      "tag-name":"tag2"
    },
    {
      "id":3,
      "tag-name":"tag3"
    }
  ]
};

const videos=[

  {
    "id":1,
    "title":"video's title-1",
    "desc":"videos content 1 goes here ...",
    "view":"1233",
    "likes":"12",
    "thumbnail":"https://material-ui.com/static/images/cards/paella.jpg"

  },
  {
    "id":2,
    "title":"video's title-2 ",
    "desc":"videos content 2 goes here ...",
    "view":"1233",
    "likes":"12",
    "thumbnail":"https://material-ui.com/static/images/cards/paella.jpg"

  },
  {
    "id":3,
    "title":"video's title-3",
    "desc":"videos content 3 goes here ...",
    "view":"1233",
    "likes":"12",
    "thumbnail":"https://material-ui.com/static/images/cards/paella.jpg"

  },
  {
    "id":4,
    "title":"video's title-4 ",
    "desc":"videos content 4 goes here ...",
    "view":"1233",
    "likes":"12",
    "thumbnail":"https://material-ui.com/static/images/cards/paella.jpg"

  }
]

const qaContent=[
  {
    "id":1,
    "question":"My question is about how to take care of my hair?",
    "author":"author-name",
    "thumbnail":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
    "view":"1233",
    "likes":"12",
    "answer":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  },
  {
    "id":2,
    "question":"हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है। लोगों में गर्भनिरोधक विकल्पों को लेकर कईj?",
    "author":"author-name",
    "thumbnail":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
    "view":"1233",
    "likes":"12",
    "answer":`ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं। महिलाओं के कंडोम योनि के अंदर और लेबिया के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, .`

  },
  {
    "id":3,
    "question":"हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है। लोगों में गर्भनिरोधक विकल्पों को लेकर कईj?",
    "author":"author-name",
    "thumbnail":"",
    "view":"1233",
    "likes":"12",
    "answer":"ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं। महिलाओं के कंडोम योनि के अंदर और लेबिया के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, ."

  },
  {
    "id":4,
    "question":"हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है। लोगों में गर्भनिरोधक विकल्पों को लेकर कईj?",
    "author":"author-name",
    "thumbnail":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
    "view":"1233",
    "likes":"12",
    "answer":"ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं। महिलाओं के कंडोम योनि के अंदर और लेबिया के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, ."

  },
  {
    "id":5,
    "question":"हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है। लोगों में गर्भनिरोधक विकल्पों को लेकर कईj?",
    "author":"author-name",
    "thumbnail":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
    "view":"1233",
    "likes":"12",
    "answer":"ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं। महिलाओं के कंडोम योनि के अंदर और लेबिया के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, ."

  },
]
const tipsContent =[

  {
    "id": 1,
    "meta-tags":"",
    "title": "जयपुर इंडियन ऑयल डिपो अग्निकांड",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore.",
    "thumbnail":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
    "author":"proxima",
    "views":"1200",
    "comments":"hujhj",
    "likes":"1500",
    "articletags":[
      {
        "id":1,
        "tag-name":"tag1"
      },
      {
        "id":2,
        "tag-name":"tag2"
      },
      {
        "id":3,
        "tag-name":"tag3"
      }
    ]
  },

  {
    "id": 2,
    "meta-tags":"",
    "title": "जयपुर इंडियन ऑयल डिपो अग्निकांड",
    "desc": "कालिंजर दुर्ग, भारतीय राज्य उत्तर प्रदेश के बांदा जिला स्थित एक दुर्ग है। बुन्देलखण्ड क्षेत्र में विंध्य पर्वत पर स्थित.",
    "thumbnail":"https://static.toiimg.com/photo/67144956.cms",
    "author":"proxima",
    "views":"1200",
    "comments":"hujhj",
    "likes":"1500",
    
    "articletags":[
      {
        "id":1,
        "tag-name":"tag1"
      },
      {
        "id":2,
        "tag-name":"tag2"
      },
      {
        "id":3,
        "tag-name":"tag3"
      }
    ]
  },
  {
    "id": 3,
    "meta-tags":"",
    "title": "article-3",
    "desc": "कालिंजर दुर्ग, भारतीय राज्य उत्तर प्रदेश के बांदा जिला स्थित एक दुर्ग है। बुन्देलखण्ड क्षेत्र में विंध्य पर्वत पर स्थित.",
    "thumbnail":"https://static.toiimg.com/photo/67144956.cms",
    "author":"proxima",
    "views":"1200",
    "comments":"hujhj",
    "likes":"1500",
    "articletags":[
      {
        "id":1,
        "tag-name":"tag1"
      },
      {
        "id":2,
        "tag-name":"tag2"
      },
      {
        "id":3,
        "tag-name":"tag3"
      }
    ]
  },
  {
    "id": 4,
    "meta-tags":"",
    "title": "article-1",
    "desc": "कालिंजर दुर्ग, भारतीय राज्य उत्तर प्रदेश के बांदा जिला स्थित एक दुर्ग है। बुन्देलखण्ड क्षेत्र में विंध्य पर्वत पर स्थित.",
    "thumbnail":"https://static.toiimg.com/photo/67144956.cms",
    "author":"proxima",
    "views":"1200",
    "comments":"hujhj",
    "likes":"1500",
    "articletags":[
      {
        "id":1,
        "tag-name":"tag1"
      },
      {
        "id":2,
        "tag-name":"tag2"
      },
      {
        "id":3,
        "tag-name":"tag3"
      }
    ]
  }
];





export function qaByQuestionId(id){
  return {
    id:id,
    content:qaById(id)
  }
}

const qaById = (id) => ({
  "id": id,
  "meta-tags" : "",
  "author" : "author-name",
  "question" : "हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है। लोगों में गर्भनिरोधक विकल्पों को लेकर कईj?",
  "answer" : ` ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं।  महिलाओं के कंडोम योनि के अंदर और लेबिया  के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, पुरुषों के कंडोम 98 % और महिलाओं के कंडोम 95 % तक कारगर साबित हो सकते हैं। ये गर्भनिरोध का सबसे आसान तरीका है,
   और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। 
   पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं।  महिलाओं के कंडोम योनि के अंदर और लेबिया 
    के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका 
    इस्तेमाल किया जाए तो, पुरुषों के कंडोम 98 % और महिलाओं के कंडोम 95 % तक कारगर साबित हो सकते हैं।
    ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं।  महिलाओं के कंडोम योनि के अंदर और लेबिया  के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।
अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, पुरुषों के कंडोम 98 % और महिलाओं के कंडोम 95 % तक कारगर साबित हो सकते हैं।  `,
  "image":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
  "thumbnail":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
  "tags":[
    {
      "id":1,
      "tagname":"tag1"
    },
    {
      "id":2,
      "tagname":"tag2"
    },
    {
      "id":3,
      "tagname":"tag3"
    }
  ]
});


  

