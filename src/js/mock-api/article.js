export default function prepareArticleForId (id) {
  return {
    id: id,
    content: articleContent(id),
    views:'1500',
    likes:'1200',
    comments: comments(id),
  };
}

const articleContent = (id) => ({
  "id": id,
  "meta-tags":"",
  "title": "जयपुर इंडियन ऑयल डिपो अग्निकांड",
  "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
const comments = (id) => ({
  "id":id,
  "comment":[
    {
      "id": 1,
      "user":"username",
      "text":"all the comments "
    },
    {
      "id": 2,
      "user":"username",
      "text":"all the comments "
    },
    {
      "id": 3,
      "user":"username",
      "text":"all the comments "
    },

]


});
