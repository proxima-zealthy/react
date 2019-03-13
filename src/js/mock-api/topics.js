export default function prepareAboutForTopicId (id) {
  return {
    id: id,
    about: aboutContent,
    videos: videos,
    tips: 'Random about page for this particular Topic Id:' + id,
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


  

