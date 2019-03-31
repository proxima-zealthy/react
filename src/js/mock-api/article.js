export default function prepareArticleForId (id) {
  return {
    id: id,
    content: articleContent(id),
    views:'1500',
    likes:'1200',
    comments: comments,
  };
}

const articleContent = (id) => ({
  "id": id,
  "meta-tags":"",
  "title": "जयपुर इंडियन ऑयल डिपो अग्निकांड",
  "body": ` ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं।  महिलाओं के कंडोम योनि के अंदर और लेबिया  के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, पुरुषों के कंडोम 98 % और महिलाओं के कंडोम 95 % तक कारगर साबित हो सकते हैं। ये गर्भनिरोध का सबसे आसान तरीका है,
   और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। 
   पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं।  महिलाओं के कंडोम योनि के अंदर और लेबिया 
    के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।अगर सही प्रकार से इसका 
    इस्तेमाल किया जाए तो, पुरुषों के कंडोम 98 % और महिलाओं के कंडोम 95 % तक कारगर साबित हो सकते हैं।
    ये गर्भनिरोध का सबसे आसान तरीका है, और ये आसानी से बाजार में उपलब्ध भी है। चाहे आप स्तनपान करा रही हो या नहीं ये तरीका आप कभी भी अपना सकती हैं। पुरुषों और महिलाओं दोनों के द्वारा इस्तेमाल किये जाने वाले कंडोम बाजार में उपलब्ध हैं।  महिलाओं के कंडोम योनि के अंदर और लेबिया  के बाहरी तरफ व्यवस्थित हो जाते हैं. हालांकि, हो सकता है ये आपको पुरुषों के कंडोम के समान सहज महसूस न हो।
अगर सही प्रकार से इसका इस्तेमाल किया जाए तो, पुरुषों के कंडोम 98 % और महिलाओं के कंडोम 95 % तक कारगर साबित हो सकते हैं।  `,
  "image":"https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg",
  "author":"proxima",
  "thumbnail":"",
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
export var comments= [
  {
    "id": 1,
    "user":"prox",
    "text":"i can do this "
  },
  {
    "id": 2,
    "user":"jack",
    "text":"change is the only constant "
  },
  {
    "id": 3,
    "user":"rose",
    "text":"life is beutiful "
  },
]
export function removeCommentById(commentId){
  function remove(id){
    for(var i = comments.length - 1; i >= 0; i--) {
      if(comments[i].id === id) {
        comments.splice(i,1);
        break;
      }
  }
  } 
  
  return remove(commentId);
}
export function addComment(comment){
  var commentid=comments.length+1;
  newcomment={
    "id":{commentid},
    "user":"new user",
    "text":{comment}
  }
  comments.push(newcomment)
  return comments;
}
