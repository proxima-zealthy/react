export default function MOCKAPI(data) {
  const prm  = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);

    if (true || (random > 8)) {
      setTimeout(resolve(data), 1500);
    } else {
      reject({error: {message: 'Dummy mock error'}});
    }
  });

  return prm;
}
