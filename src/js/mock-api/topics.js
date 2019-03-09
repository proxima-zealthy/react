export default function prepareAboutForTopicId (id) {
  return {
    id: id,
    about: 'Random about page for this particular Topic Id:' + id,
    videos: 'Random about page for this particular Topic Id:' + id,
    tips: 'Random about page for this particular Topic Id:' + id,
    tabs: [
      'about',
      'videos',
      'tips'
    ],
  };
}
