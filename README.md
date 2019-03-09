To start server side rendering:
```
npm install
npm start
```

#### TODOS:
1. Add Font icons support
2. Add build scripts
3. Can add auto image optimization
4. Add bundle analyzer for optimizations


#### Pattern:

##### For page related routes: Use `/views/`: 
1. Meaning, any top level component that has a url will go inside.
2. Casing of folders inside `views/` should be Title case **only**, like: `js/views/Article/ArticlePage.js` or simply `js/views/ArticlePage.js`

##### For side components:
Any other component like Cards, NavBar, etc. will go inside components folder. So, create a component folder inside `js` and move them there like: `js/components/Comments/Comment.js`, `js/components/Comments/List.js` and `js/components/Cards/VideoCard.js`, `js/components/Cards/ImageCard.js` 

